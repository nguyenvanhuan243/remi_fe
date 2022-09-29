import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PasswordIcon from 'components/LoginRegister/GeneralComponent/PasswordIcon/Loadable';

export default class FormComponent extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    buttonText: PropTypes.string,
    showPasswordInput: PropTypes.bool,
    showEmailInput: PropTypes.bool,
  }
  render() {
    const {
      buttonText = 'Sign up FREE',
      showPasswordInput = true,
      showEmailInput = true,
    } = this.props;
    return (
      <div className="FormComponent">
        <form>
          <div className="FormComponent-inputCustom">
            { showEmailInput ?
              <span>
                <input className="FormComponent-inputHoverEmail" type="text" placeholder="Email" />
                <div className="FormComponent-separate" />
              </span> : null }
            { showPasswordInput ?
              <span>
                <div className="FormComponent-placeHolderTop">
                  Password
                </div>
                <div className="FormComponent-passwordContainer">
                  <input className="FormComponent-inputHover" type="password" placeholder="Password" />
                  <button className="">
                    <PasswordIcon />
                  </button>
                </div>
                <div className="FormComponent-separateColor" />
              </span> : null }
            <button className="FormComponent-button">
              <div className="FormComponent-buttonText">
                { buttonText }
              </div>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
