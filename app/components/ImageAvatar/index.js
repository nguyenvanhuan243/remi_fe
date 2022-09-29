import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { isEmpty } from 'lodash';
import axios from 'axios';
import config from '../../../config';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
  },
};
const requestUrl = `${config.API_URL}/users/${localStorage.currentUser}`;

class ImageAvatar extends PureComponent {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  componentWillMount() {
    axios.get(requestUrl).then(response => {
      this.setState({ user: response.data });
    });
  }

  getAvatarLink = user => {
    if (isEmpty(user) || isEmpty(user.url_avatar)) {
      return config.DEFAULT_AVATAR;
    }
    return user.url_avatar;
  }

  render() {
    const {
      classes,
    } = this.props;
    const {
      user,
    } = this.state;
    return (
      <div className={classes.row}>
        <Avatar
          alt="Remy Sharp"
          src={this.getAvatarLink(user)}
          className={classes.avatar}
        />
      </div>
    );
  }
}

ImageAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatar);
