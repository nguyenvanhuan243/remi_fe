import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import LoginForm from 'components/Popup/Login/Loadable';
import SignupForm from 'components/Popup/Signup/Loadable';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faSignInAlt, faArrowAltCircleUp, faHome } from '@fortawesome/free-solid-svg-icons';
import MenuList from 'components/MenuList/Loadable';
import UserUtils from '../../utils/user/UserUtils';

const Header = () => {
  const [user, setUser] = useState({});
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  useEffect(() => {}, []);

  const handleShowLoginForm = () => setShowLoginForm(true);
  const handleShowSignupForm = () => setShowSignupForm(true);
  const handleCloseLoginForm = () => setShowLoginForm(false);
  const handleCloseSignupForm = () => setShowSignupForm(false);

  const shareMovie = () => {
    if (UserUtils.getAccessToken()) return window.location.replace("/share");
    Swal.fire({
      title: 'You are not logged in',
      text: 'You need to login to share a movie',
      icon: 'warning',
      showCancelButton: false,
      confirmButtonText: 'Login',
    }).then(result => {
      if (result.value) setShowLoginForm(true);
    });
  };

  return (
    <Fragment>
      <LoginForm showPopup={showLoginForm} closeLoginForm={handleCloseLoginForm} />
      <SignupForm showPopup={showSignupForm} closeSignupForm={handleCloseSignupForm} />
      <div className="Header">
        <div className="Header-container">
          <div className="col-lg-2 Header-logoContainer">
            <Link to={'/'} className="Header-homePage">
              <span>
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span className="Header-homeText">
                FunnyMovies
              </span>
            </Link>
          </div>
          <div className='Header-postJobContainer col-lg-10 justify-content-end'>
            {user.email && (
              <Button disabled onClick={shareMovie} className="Header-postJob">
                <span className="Header-text">
                  {`Welcome ${user.email}`}
                </span>
              </Button>
            )}
            <Button onClick={shareMovie} className="Header-postJob">
              <FontAwesomeIcon style={{ color: '#FFF' }} icon={faListAlt} />
              <span className="Header-text">{'Share a movie'}</span>
            </Button>
            {!UserUtils.getAccessToken() && (
              <Button className="Header-postJob" onClick={handleShowLoginForm}>
                <FontAwesomeIcon style={{ color: '#FFF' }} icon={faSignInAlt} />
                <span className="Header-text">Login</span>
              </Button>
            )}
            {!UserUtils.getAccessToken() && (
              <Button className="Header-postJob" onClick={handleShowSignupForm}>
                <FontAwesomeIcon style={{ color: '#FFF' }} icon={faArrowAltCircleUp} />
                <span className="Header-text">Register</span>
              </Button>
            )}
            {UserUtils.getAccessToken() && <MenuList />}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
