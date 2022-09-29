import React, { PureComponent } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import { Input, InputLabel, FormControl, FormGroup } from '@material-ui/core';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons/lib/buttons';
import config from '../../../../config';

export default class SocialNetworkComponent extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleLogin = e => {
    e.preventDefault();
    const email = e.currentTarget[0].value;
    const password = e.currentTarget[1].value;
    const url = `${config.API_URL}/sessions`;
    axios.post(url, {
      user: {
        email,
        password,
      },
    }).then(response => {
      this.setState({ success: response === 201 });
      localStorage.setItem('currentUser', response.data.user.id);
      location.replace(`${config.BASE_URL}`);
    }).catch(error => {
      alert('Email or Password is wrong');
      this.setState({ danger: error.response.status === 422 });
    });
  }

  handleSignup = e => {
    e.preventDefault();
    const email = e.currentTarget[0].value;
    const password = e.currentTarget[1].value;
    const urlSignup = `${config.API_URL}/users`;
    axios.post(urlSignup, {
      user: {
        email,
        password,
      },
    }).then(response => {
      console.log(response.data);
      location.reload();
    });
  }

  render() {
    return (
      <div className="DrawersData-container">
        <div className="DrawersData-socialNetwork col-lg-4">
          <ListItem button>
            <FacebookLoginButton
              text={'Đăng Nhập Nhanh'}
              style={{ width: '400px' }}
            />
          </ListItem>
          <ListItem button>
            <GoogleLoginButton
              text={'Đăng Kí Nhanh'}
              style={{ width: '400px' }}
            />
          </ListItem>
        </div>
        <Divider />
        <div className="DrawersData-loginDrawer col-lg-4">
          <div className="DrawersData-loginDrawerContainer">
            <form onSubmit={this.handleLogin}>
              <FormGroup>
                <FormControl>
                  <InputLabel htmlFor="login-email">Email</InputLabel>
                  <Input
                    id="login-email"
                    inputRef={ref => { this.email = ref; }}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="login-password">Password</InputLabel>
                  <Input type="password" id="login-password" />
                </FormControl>
                <FormControl className="DrawersData-marginTop">
                  <Button className="DrawersData-loginButton" type="submit" variant="contained" color="primary">
                    Đăng Nhập
                  </Button>
                </FormControl>
              </FormGroup>
            </form>
          </div>
        </div>
        <Divider />
        <div className="DrawersData-signupDrawer col-lg-4">
          <div className="DrawersData-signupDrawerContainer">
            <form onSubmit={this.handleSignup}>
              <FormGroup>
                <FormControl>
                  <InputLabel htmlFor="signup-email">Email</InputLabel>
                  <Input id="signup-email" />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="signup-password">Password</InputLabel>
                  <Input type="password" id="signup-password" />
                </FormControl>
                <FormControl className="DrawersData-marginTop">
                  <Button type="submit" className="DrawersData-signupButton" variant="contained" color="secondary">
                    Đăng Kí
                  </Button>
                </FormControl>
              </FormGroup>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
