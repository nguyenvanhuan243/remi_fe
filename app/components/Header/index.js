import React, { PureComponent } from 'react';
import MenuList from 'components/MenuList/Loadable';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import LoginForm from 'components/Popup/Login/Loadable';
import SignupForm from 'components/Popup/Signup/Loadable';
import Swal from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faListAlt,
  faSignInAlt,
  faArrowAltCircleUp,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import UserUtils from '../../utils/user/UserUtils';
import UserAPI from '../../api/backend/users'; 

library.add(faUser, faListAlt, faSignInAlt, faArrowAltCircleUp, faHome);
const reducer = (state, action) => {
  switch (action.type) {
    case 'CLOSE_LOGIN':
      return { showLoginForm: false };
    case 'CLOSE_SIGNUP':
      return { showSignupForm: false };
    case 'TOGGLE_SIGNUP':
      return { showSignupForm: true };
    case 'TOGGLE_SIGNIN':
      return { showLoginForm: true };
    default:
      return state;
  }
};
export default class Header extends PureComponent {
  constructor() {
    super();
    this.state = {
      user: {},
      showLoginForm: false,
      showSignupForm: false,
    };
  }

  componentWillMount() {
    UserAPI.getUserByAccessToken(UserUtils.getAccessToken()).then(res => this.setState({ user: res.data }))
  }

  dispatch = action => this.setState(reducer(this.state, action));

  shareMovie = () => {
    if (UserUtils.getAccessToken()) return location.replace("/share");
    Swal({
      title: 'You not login',
      text: 'You need to login to share movie',
      type: 'warning',
      showCancelButton: false,
      confirmButtonText: 'Login',
    }).then(result => {
      if (result.value) this.setState({ showLoginForm: true });
    });
  }

  render() {
    const { user, showLoginForm, showSignupForm } = this.state;
    return (
      <React.Fragment>
        <LoginForm showPopup={showLoginForm} closeLoginForm={() => this.dispatch({ type: 'CLOSE_LOGIN' })} />
        { showSignupForm && <SignupForm closeSignupForm={() => this.dispatch({ type: 'CLOSE_SIGNUP' })} /> }
        <div className="Header">
          <div className="Header-container">
            <div className="col-lg-2 Header-logoContainer">
              <Link to={'/'} className="Header-homePage">
                <span>
                  <FontAwesomeIcon icon="home" />
                </span>
                <span className="Header-homeText">
                  FunnyMovies
                </span>
              </Link>
            </div>
            <div className='Header-postJobContainer col-lg-10 justify-content-end'>
              {
                user.email && <Button disabled onClick={() => this.shareMovie()} className="Header-postJob">
                  <span className="Header-text">
                    { `Welcome ${user.email}` }
                  </span>
                </Button>
              }
              <Button onClick={() => this.shareMovie()} className="Header-postJob">
                <FontAwesomeIcon style={{ color: '#FFF' }} icon="list-alt" />
                <span className="Header-text">{ 'Share a movie' }</span>
              </Button>
              { !UserUtils.getAccessToken() &&
                <Button
                  className="Header-postJob"
                  onClick={() => this.dispatch({ type: 'TOGGLE_SIGNIN' })}
                >
                  <FontAwesomeIcon style={{ color: '#FFF' }} icon="sign-in-alt" />
                  <span className="Header-text">Login</span>
                </Button>
              }
              {
                !UserUtils.getAccessToken() &&
                  <Button className="Header-postJob" onClick={() => this.dispatch({ type: 'TOGGLE_SIGNUP' })}>
                    <FontAwesomeIcon style={{ color: '#FFF' }} icon="sign-in-alt" />
                    <span className="Header-text">Register</span>
                  </Button>
              }
              { UserUtils.getAccessToken() && user && <MenuList /> }
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
Header.propTypes = {};
