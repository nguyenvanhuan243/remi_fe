import React, { useState } from 'react';
import Header from 'components/Header/Loadable';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import TextField from '@material-ui/core/TextField';
import MovieAPI from '../../api/backend/movies';
import UserUtils from '../../utils/user/UserUtils';

export default function ShareMovie() {
  const [movieUrl, setMovieUrl] = useState("")
  const onSubmit = e => {
    e.preventDefault();
    const params = {
      url: movieUrl
    };
    MovieAPI.create(params, UserUtils.getAccessToken()).then(res => {
      if (res.status === 201) Swal(res.statusText, 'Success.', 'success');
    }).catch(e => Swal(e.response.statusText, e.message, 'warning'));
  }

  return (
    <React.Fragment>
      <Header />
      <div className="ShareMovie-container container">
        <div className="col-md-9">
          <div className="ShareMovie-title">
            Share a youtube movie
          </div>
          <div className="ShareMovie-content">
            <div className="ShareMovie-form">
              <div className="ShareMovie-formContainer">
                <form onSubmit={onSubmit}>
                  <div className="ShareMovie-inputTitle">
                    <TextField
                      onChange={e => setMovieUrl(e.target.value) }
                      label="Youtube Url:"
                      className="ShareMovie-customInput"
                      required
                    />
                  </div>
                  <div className="ShareMovie-buttonContainer">
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      className="ShareMovie-buttonShareMovie"
                    >
                      <span className="ShareMovie--buttonText">
                        Share
                      </span>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

