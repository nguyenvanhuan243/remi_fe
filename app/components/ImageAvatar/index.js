import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
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

class ImageAvatar extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.row}>
        <Avatar
          alt="Remy Sharp"
          src='https://i.ibb.co/NWrSrLR/Screen-Shot-2022-08-08-at-21-30-04.png'
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
