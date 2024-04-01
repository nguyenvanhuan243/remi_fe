import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { isEmpty } from 'lodash';
import CloseIcon from 'components/Icons/CloseIcon/Loadable';
import classNames from 'classnames';
import validator from 'validator';
import config from '../../../../config';
import UserUtils from '../../../utils/user/UserUtils';
import UserAPI from '../../../api/backend/users';

export default class Login extends PureComponent {
  constructor() {
    super();
    this.state = {
      errorEmail: false,
      errorPassword: false,
      userInfo: {}
    };
  }

  onLogin = () => {
    if (this.shouldSubmitForm(email, password)) {
      UserAPI.login(this.state.userInfo).then(response => {
        UserUtils.setAccessToken(response.data.access_token);
        window.location.replace(`${config.BASE_URL}`);
      }).catch(() => {
        Swal('Thất Bại', 'Email hay mật khẩu không chính xác', 'warning');
      });
    }
  }

  shouldSubmitForm = (email, password) => {
    this.setState({ errorEmail: !validator.isEmail(email) });
    if (isEmpty(password)) this.setState({ errorPassword: true });
    return validator.isEmail(email) && !isEmpty(password);
  }

  renderLoginForm() {
    const {
      showPopup = false,
      closeLoginForm = () => {},
    } = this.props;

    const { errorEmail, errorPassword } = this.state;
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
                    error={errorEmail}
                    label="Email"
                    margin="normal"
                    variant="outlined"
                    className="Login-emailField"
                    onChange={(e) => {
                      setUserInfo({
                        ...userInfo,
                        email: e.target.value,
                      });
                    }}
                  />
                </div>
                <div>
                  <TextField
                    error={errorPassword}
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    className="Login-passwordField"
                    onChange={(e) => {
                      setUserInfo({
                        ...userInfo,
                        password: e.target.value,
                      });
                    }}
                  />
                </div>
                <div>
                  <Button
                    component="span"
                    variant="contained"
                    onClick={this.onLogin}
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

  renderForgotPassword() {
    const { showForgotPasswordForm } = this.state;
    return <ForgotPassword handleCloseForm={() => this.handleCloseForgotPasswordForm()} showPopup={showForgotPasswordForm} />;
  }

  render() {
    const {
      closeForm,
      showForgotPasswordForm = false,
    } = this.state;
    if (!showForgotPasswordForm && closeForm) return null;
    return showForgotPasswordForm ? this.renderForgotPassword() : this.renderLoginForm();
  }
}

Login.propTypes = {
  showPopup: PropTypes.bool,
  closeLoginForm: PropTypes.func.isRequired,
};

