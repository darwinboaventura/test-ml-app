import React, { Component } from 'react';

// Assets
import './stage.css';

export default class Stage extends Component {
	render() {
		return (
			<div className="c-stage">
				{this.props.children}
			</div>
		);
	}
}