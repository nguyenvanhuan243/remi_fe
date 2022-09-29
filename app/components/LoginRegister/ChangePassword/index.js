import React, { useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import TextField from '@material-ui/core/TextField';
import UserAPI from '../../../api/backend/users';
import UserUtils from '../../../utils/user/UserUtils';

export default function ChangePassword() {
  const [passwordInfo, setPasswordInfo] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true)
    UserAPI.changePassword(passwordInfo, UserUtils.getAccessToken()).then(response => {
      setIsSubmitting(false)
      if (response.data.success) {
        Swal('Thành công!', 'Thay đổi mật khẩu thành công.', 'success');
      } else {
        Swal('Thất bại!', 'Thay đổi mật khẩu không thành công.', 'error');
      }
    }).catch(error => {
      if (error) {
        Swal('Thất bại!', 'Thay đổi mật khẩu không thành công.', 'error');
      }
    });
  }

  return (
    <div className="ChangePassword-container">
      <div className="container col-md-6">
        <h3 className="ChangePassword-title">
          Change Password
        </h3>
        <div className="ChangePassword-postJobForm">
          <div className="ChangePasswordForm">
            <div className="ChangePasswordForm-container">
              <div className="ChangePasswordForm-inputContainer">
                <form onSubmit={handleSubmit}>
                  <div className="ChangePasswordForm-lableItem">
                    <TextField
                      label="Enter current password"
                      style={{ width: '100%' }}
                      type="password"
                      required
                      onChange={e => setPasswordInfo({ ...passwordInfo, current_password: e.target.value })}
                    />
                  </div>
                  <div className="ChangePasswordForm-lableItem">
                    <TextField
                      type="password"
                      label="Enter new password"
                      style={{ width: '100%' }}
                      required
                      onChange={e => setPasswordInfo({ ...passwordInfo, new_password: e.target.value })}
                    />
                  </div>
                  <div className="ChangePasswordForm-lableItem">
                    <TextField
                      type="password"
                      label="Enter new password again"
                      style={{ width: '100%' }}
                      required
                      onChange={e => setPasswordInfo({ ...passwordInfo, confirm_password: e.target.value })}
                    />
                  </div>
                  <div className="ChangePassword-editContainer">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="ChangePassword-editButton"
                    >
                      {
                        isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>
                      }
                      <span className="ChangePassword-editButtonText">
                        Update Password
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
