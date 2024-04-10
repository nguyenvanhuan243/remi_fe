import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';
import Swal from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import classNames from 'classnames';
import CloseIcon from 'components/Icons/CloseIcon/Loadable';
import UserAPI from '../../../api/backend/users';

const Signup = ({ showPopup = false, closeSignupForm }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const onSubmit = () => {
    const userParams = {
      email: userEmail,
      password: userPassword
    }
    UserAPI.create(userParams)
      .then(response => {
        Swal('Register successfully', 'success');
      })
      .catch(error => {
        Swal('Register fail', 'error');
      });
  };

  const signupContainerClassName = classNames('Signup', { 'Signup-showPopup': showPopup });
  return (
    <div className={signupContainerClassName}>
      <div className="Signup-container">
        <button className="Signup-closeButton" onClick={closeSignupForm}>
          <CloseIcon />
        </button>
        <div className="Signup-reportJob">
          <div className="Signup-reportJobContent">
            <div className="Signup-formText">Register Account</div>
            <div className="Signup-formContainer">
              <div>
                <TextField
                  label="Email"
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  className="Signup-emailField"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
              <div>
                <TextField
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  className="Signup-passwordField"
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              </div>
              <div>
                <Button
                  variant="contained"
                  component="span"
                  className="Signup-button"
                  onClick={onSubmit}
                >
                  <span className="Signup-buttonText">Sign Up</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  showPopup: PropTypes.bool,
  closeSignupForm: PropTypes.func.isRequired,
};

export default Signup;
