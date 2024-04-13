import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import CloseIcon from 'components/Icons/CloseIcon/Loadable';
import classNames from 'classnames';
import UserUtils from '../../../utils/user/UserUtils';
import UserAPI from '../../../api/backend/users';

const Login = ({ showPopup = false, closeLoginForm }) => {
  const [userInfo, setUserInfo] = useState({})

  const onLogin = () => {
    UserAPI.login(userInfo).then(response => {
      const accessToken = response.data.access_token
      UserUtils.setAccessToken(accessToken);
      UserAPI.getUserByAccessToken(accessToken).then(response => {
        UserUtils.setCurrentUser(response.data)
      })
      window.location.replace("/");
    }).catch((err) => {
      Swal('Fail', err.response.data.error, 'warning');
    });
  }

  const loginContainerClassName = classNames('Login', { 'Login-showPopup': showPopup });

  return (
    <div className={loginContainerClassName}>
      <div className="Login-container">
        <button className="Login-closeButton" onClick={closeLoginForm}>
          <CloseIcon />
        </button>
        <div className="Login-reportJob">
          <div className="Login-reportJobContent">
            <div className="Login-formText">
              Login Form
            </div>
            <form className="Login-formContainer">
              <div>
                <TextField
                  required
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  className="Login-emailField"
                  onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                />
              </div>
              <div>
                <TextField
                  required
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  className="Login-passwordField"
                  onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                />
              </div>
              <div>
                <Button
                  component="span"
                  variant="contained"
                  onClick={onLogin}
                  className="Login-button btn button-submit"
                >
                  <span className="Login-buttonText">
                    Login
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  showPopup: PropTypes.bool,
  closeLoginForm: PropTypes.func.isRequired,
};

export default Login;
