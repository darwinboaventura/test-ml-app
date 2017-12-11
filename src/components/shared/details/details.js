import React, { Component } from 'react';

// Assets
import './details.css';

export default class Details extends Component {
	currencys = {
		'ARS': '$',
		'BRL': 'R$'
	};

	render() {
		if (this.props.item) {
			return (
				<div className="c-details">
					<div className="c-details_thumbnail">
						<img src={this.props.item.picture} alt={this.props.item.title} />
					</div>
	
					<div className="c-details_information">
						<p className="c-details_information_small">{this.props.item.sold_quantity} Vendidos</p>
	
						<h2 className="c-details_information_title">{this.props.item.title}</h2>

						<p className="c-details_information_price">
							{this.currencys[this.props.item.price.currency]} {this.props.item.price.amount} <small>{this.props.item.price.decimals}</small>
						</p>
	
						<a className="c-details_information_buy">Comprar</a>
					</div>
	
					<div className="clearfix"></div>
	
					<div className="c-details_description">
						<h4>Descrição do Produto</h4>
	
						<p>
							{this.props.item.description}
						</p>
					</div>
				</div>
			);
		}
	}
}