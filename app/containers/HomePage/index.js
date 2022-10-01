import React, { useState, useEffect } from 'react';
import Header from 'components/Header/Loadable';
import VideoCard from 'components/VideoCard/Item/Loadable';
import LoadingList from 'components/VideoCard/LoadingList/Loadable';
import MovieAPI from '../../api/backend/movies'; 
import UserAPI from '../../api/backend/users'; 
import Button from '@material-ui/core/Button';
import UserUtils from '../../utils/user/UserUtils';
export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [movieList, setMovieList] = useState({})
  const [isSearching, setIsSearching] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [currentSearchSelected, setCurrentSearchSelected] = useState(null)

  useEffect(() => {
    MovieAPI.getMovies().then(
      res => {
        setMovieList(res.data)
        setTimeout(() => setIsLoading(false), 1000);
      }
    );
    UserAPI.getUserByAccessToken(UserUtils.getAccessToken()).then(res => setCurrentUser(res.data))
  }, [])

  const searchMovieByTitle = title => {
    setIsLoading(true)
    setIsSearching(true)
    setCurrentSearchSelected(title)
    title = title === 'ALL' ? null : title
    MovieAPI.getMovies(title).then(res => {
      setTimeout(() => {
        setIsLoading(false)
        setIsSearching(false)
      }, 1000);
      setMovieList(res.data)
    })
  }
  
  const renderSearchButton = () => {
    const titleList = [
      'ALL',
      'Music',
      'Smart Contract',
      'Guitar',
      'Piano',
      'Game',
      'Blockchain',
      'Code',
      'Trading',
      'Remitano'
    ]
    return (
      <div className='SearchBoxContainer'>
        { titleList.map((item, i) => {
          return (
            <Button onClick={() => searchMovieByTitle(item)} className='custom-button' variant='contained' color={ i % 2 === 0 ? 'success' : 'primary' }>
              { isSearching && currentSearchSelected === item && <span className="spinner-border spinner-border-sm mr-1"></span> }
              { item }
            </Button>)})
        }
      </div>)
  }

  return (
    <div className="HomePage">
      <Header />
      <div className="HomePage-container">
        { renderSearchButton() }
        { isLoading ?
          <LoadingList /> :
          <div className="row">
            {
              movieList.length === 0 ? <div>
                <h1 className="HomePage-dont-have-job">
                  Don't have any videos
                </h1>
              </div> : movieList.map(item => (
                <div key={item.id} className="col-md-12">
                  <VideoCard
                    title={item.title}
                    description={item.description}
                    sharedByEmail={item.shared_by}
                    embedUrl={item.embed_url}
                    movieID={item.id}
                    totalLikes={item.total_likes}
                    totalDisLikes={item.total_dislikes}
                    currentUser={currentUser}
                    likeList={item.like_list}
                  />
                </div>))
            }
          </div>
        }
      </div>
    </div>
  );
}

