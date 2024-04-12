import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
  },
});

const ImageAvatar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.row}>
      <Avatar
        alt="Remy Sharp"
        src='https://i.ibb.co/NWrSrLR/Screen-Shot-2022-08-08-at-21-30-04.png'
        className={classes.avatar}
      />
    </div>
  );
};

ImageAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ImageAvatar;
