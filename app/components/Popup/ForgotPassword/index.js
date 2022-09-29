import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import 'sweetalert2/src/sweetalert2.scss';
import CloseIcon from 'components/Icons/CloseIcon/Loadable';
import classNames from 'classnames';
import validator from 'validator';
import UserAPI from '../../../api/backend/users';

export default function ForgotPassword(showPopupForm) {
  const [forgotPasswordIsClicked, setForgotPasswordIsClicked] = useState(false)
  const [showEmailError, setShowEmailError] = useState(false)
  const [showPopup, setShowPopup] = useState(showPopupForm)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailErrorText, setEmailErrorText] = useState()
  const handleCloseForm = () => setShowPopup(false)
  const onSubmit = () => {
    return true
  }
  const handleForgotPassword = () => {
    if (!validator.isEmail(email)) {
      setShowEmailError(true)
      setEmailErrorText('Your email is invalid')
      return null;
    }
    setShowEmailError(false)
    const params = { email };
    setIsSubmitting(true)
    UserAPI.sendEmailSetNewPassword(params).then(res => {
      setIsSubmitting(false)
      if (res.data.status === 200) {
        setForgotPasswordIsClicked(true)
      } else {
        setEmailErrorText('Your email not correctly')
      }
    });
    return null;
  }

  const renderForgotPasswordText = () => {
    return forgotPasswordIsClicked ? 'Kiểm tra email và làm theo hướng dẫn' : 'Nhập email và làm theo hướng dẫn'
  }

  const containerClassName = classNames('ForgotPassword', { 'ForgotPassword-showPopup': showPopup });

  return (
    <div className={containerClassName}>
      <button className="ForgotPassword-closeButton" onClick={() => handleCloseForm()}>
        <CloseIcon />
      </button>
      <div className="ForgotPassword-reportJob">
        <div className="ForgotPassword-reportJobContent">
          <div className="ForgotPassword-formText">
            Khôi Phục Mật Khẩu
          </div>
          <div className="ForgotPassword-helperText">
            { renderForgotPasswordText() }
          </div>
          <form className="ForgotPassword-formContainer">
            {
              !forgotPasswordIsClicked &&
                <div>
                  <TextField
                    helperText={emailErrorText}
                    error={showEmailError || emailErrorText}
                    label="Enter your email"
                    margin="normal"
                    variant="outlined"
                    className="ForgotPassword-emailField"
                    onChange={event => setEmail(event.target.value)}
                  />
                </div>
            }
            <div>
              {
                forgotPasswordIsClicked ?
                  <Button
                    variant="contained"
                    component="span"
                    className="Signup-button"
                    onClick={() => window.open('https://mail.google.com/mail/u/0/#inbox')}
                  >
                    <span className="Signup-buttonText">
                      Truy Cập Email Nhanh
                    </span>
                  </Button> : <Button
                    onClick={() => handleForgotPassword()}
                    component="span"
                    variant="contained"
                    className="Login-button btn button-submit"
                    disabled={isSubmitting}
                  >
                    { isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span> }
                    <span className="ForgotPassword-buttonText">Lấy Lại Mật Khẩu</span>
                  </Button>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
