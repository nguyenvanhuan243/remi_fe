import React, { PureComponent } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faListAlt, faHeading, faMoneyBillAlt, faBuilding } from '@fortawesome/free-solid-svg-icons';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import LikeAPI from '../../../api/backend/likes'; 
import UserUtils from '../../../utils/user/UserUtils';
import Button from '@material-ui/core/Button';
library.add(faListAlt, faHeading, faMoneyBillAlt, faBuilding);

export default class VideoCard extends PureComponent {

  constructor() {
    super();
    this.state = {};
  }

  like = id => LikeAPI.likeMovie(UserUtils.getAccessToken(), id).then(response => location.reload())
  disLike = id => LikeAPI.disLikeMovie(UserUtils.getAccessToken(), id).then(response => location.reload())
  
  renderVoting = (movie, movieID, showVoted) => {
    if (!UserUtils.getAccessToken()) return null
    if (showVoted) return <div>{ movie && movie.status === 'like' ? <span><ThumbUpAltIcon/>(Voted Up)</span> : <span><ThumbDownIcon/>(Voted Down)</span> }</div>
    return (
      <div>
        <Button onClick={() => this.like(movieID)}><ThumbUpAltOutlinedIcon className="VideoCard-likeButton" /></Button>
        <Button><ThumbDownAltOutlinedIcon className="VideoCard-likeButton" onClick={() => this.disLike(movieID)} /></Button>(un-voted)
      </div>
    )
  }

  render() {
    const { 
      title,
      embedUrl,
      description,
      sharedByEmail,
      movieID,
      totalLikes,
      totalDisLikes,
      currentUser,
      likeList
    } = this.props;
    const movieLikedByUser = likeList.filter(item => item.user_id === currentUser.id)
    const showVoted = movieLikedByUser && movieLikedByUser.length > 0
    const movieLiked = movieLikedByUser && movieLikedByUser[0]
    return (
      <div className="VideoCard">
        <Card className="VideoCard-container">
          <div className="col-md-6">
            <iframe className="VideoCard-cardImg" width="420" height="300" src={embedUrl}></iframe>
          </div>
          <CardBody className="col-md-6">
            <CardTitle>
              <span className="VideoCard-title">{ title }</span>
              { this.renderVoting(movieLiked, movieID, showVoted) }
            </CardTitle>
            <CardTitle><span>{ `Shared by: ${sharedByEmail}` }</span></CardTitle>
            { totalLikes } <ThumbUpAltOutlinedIcon></ThumbUpAltOutlinedIcon>
            { totalDisLikes } <ThumbDownAltOutlinedIcon></ThumbDownAltOutlinedIcon>
            <CardTitle>Description: <br/><span>{ description }</span></CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

VideoCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  sharedByEmail: PropTypes.string,
  embedUrl: PropTypes.string,
  movieID: PropTypes.any,
  totalLikes: PropTypes.any,
  totalDisLikes: PropTypes,
  currentUser: PropTypes.any,
  likeList: PropTypes.any
};
