import React, { useState, useEffect } from 'react';
import Header from 'components/Header/Loadable';
import VideoCard from 'components/VideoCard/Item/Loadable';
import LoadingList from 'components/VideoCard/LoadingList/Loadable';
import MovieAPI from '../../api/backend/movies';
import UserAPI from '../../api/backend/users';
import config from '../../../config';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [movieList, setMovieList] = useState({})
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    connectToSocket()
    MovieAPI.getMovies().then(
      res => {
        setMovieList(res.data)
        setTimeout(() => setIsLoading(false), 1000);
      }
    );
    try {
      UserAPI.getUserByAccessToken(UserUtils.getAccessToken()).then(res => setCurrentUser(res.data))
    } catch (exceptionVar) {
      console.log("connect socket error")
    }
  }, [])

  const connectToSocket = () => {
    try {
      const token = localStorage.getItem("accessToken")
      console.log("Socket #####", token)
      const cable = new WebSocket(`${config.BACKEND_WEB_SOCKET}?token=${token}`);
      cable.onopen = () => {
        console.log('Connected to Action Cable')

        const subscribeMessage = {
          command: 'subscribe',
          identifier: JSON.stringify({
            channel: 'MoviesChannel',
            id: '65b75b213dd35e4374430423'
          }),
        };

        cable.send(JSON.stringify(subscribeMessage));
      };

      cable.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log("#####", data["message"])
        if (data && data["message"] && data["message"]["title"]) {
          alert(data["message"]["title"])
        };
      }
    } catch (exceptionVar) {
      console.log("connect socket error")
    }

  }

  return (
    <div className="HomePage">
      <Header />
      <div className="HomePage-container">
        <div className='SearchBoxContainer'>
        </div>
        {isLoading ?
          <LoadingList /> :
          <div className="row">
            {
              movieList.length === 0 ? <div>
                <h1 className="HomePage-dont-have-job">
                  Don't have any videos - Testing Caching
                </h1>
              </div> : movieList.map(item => (
                <div key={item.id} className="col-md-12">
                  <VideoCard
                    title={item.title}
                    description={item.description}
                    sharedByEmail={item.shared_by}
                    embedUrl={item.embed_url}
                    movieID={item.id}
                    currentUser={currentUser}
                  />
                </div>))
            }
          </div>
        }
      </div>
    </div>
  );
}

