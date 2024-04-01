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
          src={config.DEFAULT_AVATAR}
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
