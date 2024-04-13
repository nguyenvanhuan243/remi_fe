import React, { useState, useEffect } from 'react';
import Header from 'components/Header/Loadable';
import Footer from 'components/Footer';
import VideoCard from 'components/VideoCard/Item/Loadable';
import LoadingList from 'components/VideoCard/LoadingList/Loadable';
import MovieAPI from '../../api/backend/movies';
import UserUtils from '../../utils/user/UserUtils';
import config from '../../../config';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [movieList, setMovieList] = useState({})

  useEffect(() => {
    connectToSocket()
    MovieAPI.getMovies().then(
      res => {
        setMovieList(res.data)
        setTimeout(() => setIsLoading(false), 500);
      }
    );
  }, [])

  const renderMovies = () => {
    if (isLoading) {
      return <LoadingList />
    }
    return (
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
                likedUserIds={item.liked_user_ids}
              />
            </div>))
        }
      </div>
    )
  }

  const connectToSocket = () => {
    try {
      const cable = new WebSocket(`${config.SOCKET_BASE_URL}?token=${UserUtils.getAccessToken()}`);
      cable.onopen = () => {
        console.log('Connected to Action Cable')

        const subscribeMessage = {
          command: 'subscribe',
          identifier: JSON.stringify({
            channel: 'MoviesChannel'
          }),
        };

        cable.send(JSON.stringify(subscribeMessage));
      };

      cable.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log("#####", data["message"])
        if (data && data["message"] && data["message"]["title"]) {
          alert(`${data["message"]["user"]} shared: ${data["message"]["title"]}`)
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
        {
          renderMovies()
        }
      </div>
      <Footer />
    </div>
  );
}

