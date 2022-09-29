import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CloseIcon extends PureComponent {
  render() {
    const {
      size = 16,
      closeFunc = () => {},
    } = this.props;
    const widtdPx = `${size}px`;
    const heightPx = `${size}px`;
    const viewBox = `0 0 ${size} ${size}`;
    const enableBackground = `new 0 0 ${size} ${size}`;
    const style = {
      marginRight: 16,
      marginTop: 16,
      cursor: 'pointer',
    };
    return (
      <svg
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width={widtdPx}
        height={heightPx}
        viewBox={viewBox}
        enableBackground={enableBackground}
        xmlSpace="preserve"
        style={size === 12 ? style : null}
        onClick={closeFunc}
      >
        <image
          width={size}
          height={size}
          x={0}
          y={0}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
          RQfiBQsECSvyzvKNAAAAgklEQVQoz3XQMQrCQBAF0Ickrd7AysZO7MSLpDKBXEUNnkU9YlirxLjO
          bjXL+zD8YasRv0pvTSMZQn4aHWCQ3EO+TN88kvEUuZV5GSnwd1GR4SFJv7xazLUd2JfO8jZqw9Ko
          vIzasHTGeemZu7D03Lv7WzpIrtCHPEVObBxLZ3FWfwAUSDS91oRazAAAACV0RVh0ZGF0ZTpjcmVh
          dGUAMjAxOC0wNS0xMVQwNDowOTo0My0wNzowMBb+IDgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgt
          MDUtMTFUMDQ6MDk6NDMtMDc6MDBno5iEAAAAAElFTkSuQmCC"
        />
      </svg>
    );
  }
}
CloseIcon.propTypes = {
  size: PropTypes.number,
  closeFunc: PropTypes.func,
};
