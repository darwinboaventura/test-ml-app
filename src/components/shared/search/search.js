import React, { Component } from 'react';

// Assets
import './search.css';

export default class Search extends Component {
	render() {
		return (
			<form className="c-search" method={this.props.method} action={this.props.action}>
				<input type="text" name="search" />

				<input type="submit" value="Buscar" />
			</form>
		);
	}
};