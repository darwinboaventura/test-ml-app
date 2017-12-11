import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

// Assets
import logo from '../../../assets/images/logo.png';
import './header.css';

export default class Header extends Component {
	render() {
		return (
			<header className="c-header">
				<div className="l-wrapper">
					<Link to={'/'} className="c-header_logo">
						<img src={logo} alt="Mercado Livre" title="Mercado Livre" />
					</Link>

					{this.props.children}
				</div>

				<div className="clearfix"></div>
			</header>
		);
	}
}