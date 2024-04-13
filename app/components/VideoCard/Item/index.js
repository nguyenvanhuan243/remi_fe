import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import MovieAPI from '../../../api/backend/movies';
import UserUtils from '../../../utils/user/UserUtils';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { faListAlt, faHeading, faMoneyBillAlt, faBuilding } from '@fortawesome/free-solid-svg-icons';

library.add(faListAlt, faHeading, faMoneyBillAlt, faBuilding);

const VideoCard = ({
  title,
  embedUrl,
  description,
  sharedByEmail,
  movieID,
  likedUserIds
}) => {
  const handleLikeMovie = (movieID) => {
    const params = {
      movie_id: movieID,
      reaction_type: 0
    };
    MovieAPI.likeMovie(params, UserUtils.getAccessToken())
      .then(res => {
        if (res.status === 201) {
          alert("Liked successfully!!!");
          window.location.reload()
        }
      })
      .catch(e => {
        alert("You liked this movie");
        console.log("error", e)
      });
  };

  const checkUserLikedMovie = () => {
    const currentUserInfo = UserUtils.getCurrentUser()
    const currentUserID = currentUserInfo && currentUserInfo.id
    return likedUserIds.includes(parseInt(currentUserID))
  };

  const renderButtonLike = (movieID) => {
    if (UserUtils.getAccessToken() && !checkUserLikedMovie()) {
      return (
        <Button variant="contained" color="secondary" onClick={() => handleLikeMovie(movieID)}>
          <Typography style={{ marginRight: "10px" }} variant="h6" color="white">
            {likedUserIds.length}
          </Typography>
          <ThumbUpIcon>
          </ThumbUpIcon>
        </Button>
      );
    } else {
      return (
        <Button disabled variant="contained" color="secondary">
          <Typography style={{ marginRight: "10px" }} variant="h6" color="white">
            {likedUserIds.length}
          </Typography>
          <ThumbUpIcon>
          </ThumbUpIcon>
        </Button>
      );
    }
  };

  const donateUsdtForVideoOwner = () => {
    return alert("Your usdt is not enought !!!")
  }

  const renderDonateButton = () => {
    return (
      <Button onClick={
        () => donateUsdtForVideoOwner()
      } style={{ marginLeft: "10px" }} variant="contained" color="secondary">
        <Typography style={{ marginRight: "10px" }} variant="h6" color="white">
          Donate
        </Typography>
        <FavoriteIcon />
      </Button>
    )
  }

  return (
    <div className="VideoCard">
      <Card className="VideoCard-container">
        <div className="col-md-6">
          <iframe className="VideoCard-cardImg" width="420" height="300" src={embedUrl}></iframe>
        </div>
        <CardBody className="col-md-6">
          <CardTitle>
            <span className="VideoCard-title">{title}</span>
          </CardTitle>
          <CardTitle><span>{`Shared by: ${sharedByEmail}`}</span></CardTitle>
          {renderButtonLike(movieID)}
          {
            renderDonateButton()
          }
          <CardTitle>Description: <br /><span>{description}</span></CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

VideoCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  sharedByEmail: PropTypes.string,
  embedUrl: PropTypes.string,
  movieID: PropTypes.any,
};

export default VideoCard;
