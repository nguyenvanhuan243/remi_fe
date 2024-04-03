import React from 'react';
import PropTypes from 'prop-types';

class ScrollEvent extends React.Component {
	constructor(props) {
		super(props);

		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	};

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	};

	handleScroll(event) {
		this.props.handleScrollCallback();
	};


	render() {
		return false;
	}

}

export default ScrollEvent;

ScrollEvent.Proptypes = {
	handleScrollCallback: PropTypes.func
};
