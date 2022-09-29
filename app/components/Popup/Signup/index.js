import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Button,
  Select,
  OutlinedInput,
  MenuItem,
} from '@material-ui/core';
import validator from 'validator';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2';
import CloseIcon from 'components/Icons/CloseIcon/Loadable';
import { isEmpty } from 'lodash';
import UserAPI from '../../../api/backend/users';

const USER_TYPES = {
  candidate: 1
}

export default class Signup extends PureComponent {
  constructor() {
    super();
    this.state = {
      showEmailError: false,
      showPasswordError: false,
    };
  }
  onSubmit = () => {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    this.setState({
      showEmailError: !validator.isEmail(email),
      showPasswordError: isEmpty(password),
    });
    const user_type = USER_TYPES['candidate']
    const params = { email, password, user_type };
    if (validator.isEmail(email) && password) {
      UserAPI.create(params).then(response => {
        if (response.status === 201) {
          Swal('Success!', 'Register successfully', 'success');
          return;
        }
        if (response.data.status === 422) {
          Swal('Thất Bại!', response.data.message, 'error');
        }
      }).catch(error => {
        if (error) Swal('Thất Bại', 'Đăng kí tài khoản không thành công', 'error');
      });
    }
    return null;
  }

  render() {
    const { closeSignupForm = () => {} } = this.props;
    const {
      showEmailError,
      showPasswordError,
    } = this.state;
    return (
      <React.Fragment>
        <div className="Signup">
          <div className="Signup-container">
            <button className="Signup-closeButton" onClick={closeSignupForm}> <CloseIcon /> </button>
            <div className="Signup-reportJob">
              <div className="Signup-reportJobContent">
                <div className="Signup-formText">
                  Register Account
                </div>
                <div className="Signup-formContainer">
                  <div>
                    <TextField
                      error={showEmailError}
                      id="signup-email"
                      label="Email"
                      autoComplete="current-password"
                      margin="normal"
                      variant="outlined"
                      className="Signup-emailField"
                    />
                  </div>
                  <div>
                    <TextField
                      error={showPasswordError}
                      id="signup-password"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      margin="normal"
                      variant="outlined"
                      className="Signup-passwordField"
                    />
                  </div>
                  {/* <div>
                    <Select
                      disabled
                      value="10"
                      autoWidth
                      style={{ width: '100%' }}
                      input={<OutlinedInput name="age" />}
                    >
                      <MenuItem value={10}>
                        Tài Khoản Đăng Việc
                      </MenuItem>
                    </Select>
                  </div> */}
                  <div>
                    <Button
                      variant="contained"
                      component="span"
                      className="Signup-button"
                      onClick={this.onSubmit}
                    >
                      <span className="Signup-buttonText">Đăng Kí</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
Signup.propTypes = {
  closeSignupForm: PropTypes.func.isRequired,
};

