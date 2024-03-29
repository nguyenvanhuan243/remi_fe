import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import Menus from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import ImageAvatar from 'components/ImageAvatar/Loadable';
import { Link } from 'react-router-dom';
import config from '../../../config';
import UserUtils from '../../utils/user/UserUtils';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
});

class MenuList extends Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = event => {
    if (event.currentTarget.textContent === 'Logout') {
      UserUtils.removeAccessToken();
      location.replace(`${config.BASE_URL}`);
    }
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <div className="MenuList-paper">
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : null}
            aria-haspopup="true"
            onClick={this.handleToggle}
            className="MenuList-button"
          >
            <ImageAvatar />
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <Menus>
                      <MenuItem onClick={this.handleClose}>
                        <span className="MenuList-text">
                          Logout
                        </span>
                      </MenuItem>
                    </Menus>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

MenuList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuList);
