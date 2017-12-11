import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Assets
import './list-item.css';

export default class ListItem extends Component {
	currencys = {
		'ARS': '$',
		'BRL': 'R$'
	};

	conditions = {
		'new': 'Novo',
		'used': 'Usado'
	};

	render() {
		return (
			<li className="c-list_item">
				<Link to={'/items/' + this.props.item.id}>
					<div className="c-list_item_thumbnail">
						<img src={this.props.item.thumbnail} alt={this.props.item.title} title="iPhone 7" />
					</div>

					<div className="c-list_item_content">
						<div className="column-1">
							<h2>
								{this.currencys[this.props.item.currency_id]} {this.props.item.price}
							</h2>

							<h1>{this.props.item.title}</h1>
						</div>

						<div className="column-2">
							<span>{this.conditions[this.props.item.condition]}</span>
						</div>

						<div className="clearfix"></div>
					</div>
				</Link>

				<div className="clearfix"></div>
			</li>
		);
	}
}