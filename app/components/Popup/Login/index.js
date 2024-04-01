import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import CloseIcon from 'components/Icons/CloseIcon/Loadable';
import classNames from 'classnames';
import config from '../../../../config';
import UserUtils from '../../../utils/user/UserUtils';
import UserAPI from '../../../api/backend/users';

const Login = ({ showPopup = false, closeLoginForm }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const onLogin = () => {
    const userParams = {
      email: userEmail,
      password: userPassword
    }
    UserAPI.login(userParams).then(response => {
      UserUtils.setAccessToken(response.data.access_token);
      window.location.replace(`${config.BASE_URL}`);
    }).catch(() => {
      Swal('Thất Bại', 'Email hay mật khẩu không chính xác', 'warning');
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
                  onChange={(e) => setUserEmail(e.target.value)}
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
                  onChange={(e) => setUserPassword(e.target.value)}
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
