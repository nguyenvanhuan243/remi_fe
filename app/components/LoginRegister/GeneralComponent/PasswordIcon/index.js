import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PasswordIcon extends PureComponent {
  render() {
    const { onToggle = () => {}, show } = this.props;
    const style = { cursor: 'pointer', padding: '0px', outline: 'none' };
    const xLinkHref = show ? `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAQAAAAu0KdMAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
    AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
    RQfiBQkCDjHuaSkJAAAA+ElEQVQY0z3PsUrDUBjF8f+9N01qKY0gqBiMIBaLDoKDg4LgZDc3VwcV
    X0NfwS0O+hpCJ6mDbrYuDg4iRWzBoS62ucn9HBo94+8Mh6P4z2VQCit5PNzL/kQBiL6upxt6uqBP
    eTp7L8qbcrbv5pTojv9mvWyVOrjXmbvD3EtK4wMVgrofDWRTUh6xrOmVb59b7bZUCCo9efGbblka
    ZnfcBcjjpKFNBMDowkgVQMLgZ7ItkZY2gNQWp9QzaHEdswAgtvKg4GpddkD3Xcv3jU2DvElVrGmd
    9hRAEqttqYk1ffFkFs2g3D76Kn7CuY6W8nlCcm+oescfE/0Fz8VX4bjIqA8AAAAldEVYdGRhdGU6
    Y3JlYXRlADIwMTgtMDUtMDlUMDI6MTQ6NDktMDc6MDDSrqDXAAAAJXRFWHRkYXRlOm1vZGlmeQAy
    MDE4LTA1LTA5VDAyOjE0OjQ5LTA3OjAwo/MYawAAAABJRU5ErkJggg==` : `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAQAAADljHTpAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
    AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
    RQfiBwQHEg2pEEGFAAABB0lEQVQY023QzUoCURxA8fO/3hmMCfzAIAI3kdCiNoJGGK2CEOoVAoPo
    BXqWSAiEXsEghAIXEtEiC4lCwpa5sIzMJnXm3hbtorP7bY/wT4cJvamvdzv6lyfeaNnMmrgY6XIj
    RXB7oAHKWT+Loh+5D0VepQjSGPogcLQuiyCdTL09Fw70FriX45x9S1xEjhdsDsCt9lbkU22AUw0K
    xsXzUWEeQA1K39EXuwb2vPQehABqXtk2gNWVuL8KYc1mKlHxAORWJZvStRPnarINwamkknejPIB5
    2nsWKDtOOiiANGwMTJqYGFr7LdDgTX0V4OPMW1IzImoQPEw/7gwBNIxTTILaQZ/631M/f5peMPCJ
    VWsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDctMDRUMDc6MTg6MTMtMDc6MDBE0+bIAAAAJXRF
    WHRkYXRlOm1vZGlmeQAyMDE4LTA3LTA0VDA3OjE4OjEzLTA3OjAwNY5edAAAAABJRU5ErkJggg==`;
    return (
      <button style={style} onClick={onToggle} >
        {
          <svg
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="14px"
            height="10px"
            viewBox="0 0 14 10"
            enableBackground="new 0 0 14 10"
            xmlSpace="preserve"
          >
            <image width={14} height={10} x={0} y={0} xlinkHref={xLinkHref} />
          </svg>
        }
      </button>
    );
  }
}
PasswordIcon.propTypes = {
  onToggle: PropTypes.func.isRequired,
  show: PropTypes.bool,
};
