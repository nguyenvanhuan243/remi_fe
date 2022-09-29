import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import config from '../../../../config';
library.add(faPlus);

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
}))(MuiDialogActions);

export default class EmploymentItem extends PureComponent {
  constructor() {
    super();
    this.state = {
      open: false,
      employeeItem: {},
    };
  }

  handleClose = () => this.setState({ open: false });

  handleClickOpen = employeeItemId => {
    this.setState({ open: true });
    const { limit } = this.state;
    axios.get(`${config.API_BASE_URL}/employees/${employeeItemId}?limit=${limit}`).then(
      response => this.setState({ employeeItem: response.data })
    );
  }

  renderEmployeeData = objectItem => (
    objectItem.map(item => (
      <Typography gutterBottom>
        <FontAwesomeIcon icon="plus" className="EmployeeItem-plusIcon" />
        { item }
      </Typography>
    ))
  );

  render() {
    const { employeeItemId } = this.props;
    const { open } = this.state;
    const {
      employeeItem: {
        skills = [],
        degree = [],
        objectives = [],
        favorite_languages: favoriteLanguages = [],
        office_information: officeInformation = [],
        working_experiences: workingExperiences = [],
      } = {},
    } = this.state;
    const chipAvatar = 'https://static.coindesk.com/wp-content/uploads/2018/11/Bitcoins-860x430.jpg';
    return (
      <React.Fragment>
        <Button
          variant="outlined"
          style={{ width: '100%' }}
          onClick={() => this.handleClickOpen(employeeItemId)}
          className="btn btn-primary EmployeeItem-primaryButton"
        >
          Xem Thông Tin
        </Button>
        <Dialog
          open={open}
          scroll={'body'}
          maxWidth={'lg'}
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Xem Thông Tin Người Làm { employeeItemId }
          </DialogTitle>
          <DialogContent className="EmployeeItem-dialog" dividers>
            <Chip
              avatar={<Avatar alt="Natacha" src={chipAvatar} />}
              label="Mục Tiêu Nghề Nghiệp"
            />
            { this.renderEmployeeData(objectives) }
          </DialogContent>
          <DialogContent dividers>
            <Chip
              avatar={<Avatar alt="Natacha" src={chipAvatar} />}
              label="Kĩ Năng Yêu Cầu"
            />
            { this.renderEmployeeData(skills) }
          </DialogContent>
          <DialogContent dividers>
            <Chip
              avatar={<Avatar alt="Natacha" src={chipAvatar} />}
              label="Ngôn Ngữ Yêu Thích"
            />
            { this.renderEmployeeData(favoriteLanguages) }
          </DialogContent>
          <DialogContent dividers>
            <Chip
              avatar={<Avatar alt="Natacha" src={chipAvatar} />}
              label="Tin Học Văn Phòng"
            />
            { this.renderEmployeeData(officeInformation)}
          </DialogContent>
          <DialogContent dividers>
            <Chip
              avatar={<Avatar alt="Natacha" src={chipAvatar} />}
              label="Bằng Cấp"
            />
            { this.renderEmployeeData(degree) }
          </DialogContent>
          <DialogContent dividers>
            <Chip
              avatar={<Avatar alt="Natacha" src={chipAvatar} />}
              label="Kinh Nghiệm Làm Việc"
            />
            { this.renderEmployeeData(workingExperiences) }
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

EmploymentItem.propTypes = {
  employeeItemId: PropTypes.number,
};

