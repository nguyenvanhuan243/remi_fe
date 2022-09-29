import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/Header/Loadable';
import ChangePassword from '../../components/LoginRegister/ChangePassword/Loadable';

const mapStateToProps = state => ({
  searchBoxText: state.text,
  messages: state.last().last(),
});

class ChangePasswordPage extends PureComponent {
  render() {
    const { messages = {} } = this.props;
    return (
      <React.Fragment>
        <div>
          <Header
            postJobText={messages['header.postJob']}
            findJobText={messages['header.findJob']}
            findPeopleText={messages['header.findPeople']}
            loginText={messages['header.loginText']}
            signupText={messages['header.signupText']}
          />
        </div>
        <div className="ChangePasswordPageContainer">
          <ChangePassword />
        </div>
      </React.Fragment>
    );
  }
}

ChangePasswordPage.propTypes = {
  messages: PropTypes.object,
}

export default connect(mapStateToProps)(ChangePasswordPage);
