import React from 'react';
import ReactDOM from 'react-dom';
import ScrollEvent from '../../src/ScrollEvent';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.handleScrollCallback = this.handleScrollCallback.bind(this);
	}

	handleScrollCallback() {
		console.log('A scroll event occurred!');
	}
	render() {
		return(
			<div>
				<ScrollEvent handleScrollCallback={this.handleScrollCallback} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
