import React, { useState, useEffect } from 'react';
import Header from 'components/Header/Loadable';
import VideoCard from 'components/VideoCard/Item/Loadable';
import LoadingList from 'components/VideoCard/LoadingList/Loadable';
import MovieAPI from '../../api/backend/movies'; 
import { toUpper } from 'lodash'
import Button from '@material-ui/core/Button';
export default function HomePage(messages) {
  const [isLoading, setIsLoading] = useState(true)
  const [jobTitleList, setJobTitleList] = useState([])
  const [movieList, setMovieList] = useState(true)
  const [jobList, setJobList] = useState(true)
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    MovieAPI.getMovies().then(
      res => {
        setMovieList(res.data)
        setTimeout(() => setIsLoading(false), 1000);
      }
    );
  }, [])

  const searchJobByTitle = title => {
    setIsLoading(true)
    setIsSearching(true)
    MovieAPI.getMovies().then(res => {
      setTimeout(() => {
        setIsLoading(false)
        setIsSearching(false)
      }, 1000);
      setJobList(res.data)
    })
  }

  const countJobByTitle = item => {
    let titleDeletedSpace = 0
    if (item === 'ALL') { return jobTitleList.length }
    const normalTitle = jobTitleList.filter(job => toUpper(job.title).includes(toUpper(item))).length
    if (item.includes(' ')) {
      titleDeletedSpace = jobTitleList.filter(job => toUpper(job.title).includes(toUpper(item.split(" ").join("")))).length
    }
    return normalTitle + titleDeletedSpace
  }
  
  const renderSearchButton = () => {
    const titleList = [
      'Nhạc',
      'Phim',
      'Guitar',
      'Piano',
      'Game',
      'Blockchain',
      'Code',
      'Music',
      'Trading',
      'Remitano'
    ]
    return (
      <div className='SearchBoxContainer'>
        {
          titleList.map((item, i) => {
            return (
              <Button onClick={() => searchJobByTitle(item)} className='custom-button' variant='contained' color={ i % 2 === 0 ? 'success' : 'primary' }>
                { isSearching && <span className="spinner-border spinner-border-sm mr-1"></span> }
                { item } ({ countJobByTitle(item) })
              </Button>
            )
          })
        }
      </div>
    )
  }

  return (
    <div className="HomePage">
      <Header
        postJobText={messages['header.postJob']}
        findJobText={messages['header.findJob']}
        findPeopleText={messages['header.findPeople']}
        loginText={messages['header.loginText']}
        signupText={messages['header.signupText']}
      />
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
                  />
                </div>))
            }
          </div>
        }
      </div>
    </div>
  );
}

