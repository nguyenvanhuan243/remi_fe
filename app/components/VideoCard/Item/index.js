import React, { PureComponent } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faListAlt, faHeading, faMoneyBillAlt, faBuilding } from '@fortawesome/free-solid-svg-icons';
library.add(faListAlt, faHeading, faMoneyBillAlt, faBuilding);

export default class VideoCard extends PureComponent {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      title,
      embedUrl,
      description,
      sharedByEmail
    } = this.props;

    return (
      <div className="VideoCard">
        <Card className="VideoCard-container">
          <div className="col-md-6">
            <iframe className="VideoCard-cardImg" width="420" height="300" src={embedUrl}></iframe>
          </div>
          <CardBody className="col-md-6">
            <CardTitle>
              <span className="VideoCard-title">{title}</span>
            </CardTitle>
            <CardTitle><span>{`Shared by: ${sharedByEmail}`}</span></CardTitle>
            <CardTitle>Description: <br /><span>{description}</span></CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

VideoCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  sharedByEmail: PropTypes.string,
  embedUrl: PropTypes.string,
  movieID: PropTypes.any,
  currentUser: PropTypes.any
};
