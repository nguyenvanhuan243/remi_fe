# ScrollEvent

A simple component that calls a function when an onScroll event occurs.

## Demo & Examples

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-onscroll is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-onscroll.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-onscroll --save
```


## Usage

Use this component by passing a function to <ScrollEvent /> via props. 


```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import ScrollEvent from 'react-onscroll';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.handleScrollCallback = this.handleScrollCallback.bind(this);
	}

	handleScrollCallback() {
		console.log("A scroll event occurred!");
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

```

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## Author

[Ben Gardner](http://www.brainprotips.com)