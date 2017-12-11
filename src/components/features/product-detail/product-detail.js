import React, { Component } from 'react';
import axios from 'axios';

// Components
import Stage from '../../shared/stage/stage.js';
import Details from '../../shared/details/details.js';

export default class ProductDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			item: {
				price: {
					currency: null,
					amout: null,
					decimals: null
				}
			}
		};
	}

	componentWillMount() {
		axios.get('http://localhost:4000/api/items/' + this.props.match.params.id)
		.then((res) => {
			if (res.data.item) {
				this.setState({
					item: res.data.item
				});
			}
		})
		.catch((err) => {
			console.log(err);
		});
	}

	render() {
		return (
			<div className="product-detail">
				<Stage>
					<Details item={this.state.item} />
				</Stage>
			</div>
		);
	}
}