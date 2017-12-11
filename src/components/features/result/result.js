import React, { Component } from 'react';
import * as queryString from 'query-string';
import axios from 'axios';

// Components
import Breadcrumb from '../../shared/breadcrumb/breadcrumb.js';
import Stage from '../../shared/stage/stage.js';
import List from '../../shared/list/list.js';
import ListItem from '../../shared/list-item/list-item.js';

export default class Result extends Component {
	searchParam = null;

	constructor(props) {
		super(props);

		this.searchParam = queryString.parse(this.props.location.search).search;
		this.state = {
			filters: [],
			items: []
		};
	}

	componentWillMount() {
		axios.get('http://localhost:4000/api/items?q=' + this.searchParam)
		.then((res) => {
			if (res.data.categories) {
				this.setState({
					filters: res.data.categories
				});
			}

			if (res.data.items) {
				this.setState({
					items: res.data.items
				});
			}
		})
		.catch((err) => {
			console.log(err);
		});
	}

	render() {
		return(
			<div className="result">
				<Breadcrumb filters={this.state.filters} />

				<Stage>
					<List>
						{this.state.items.map((item) => {
							return <ListItem item={item} key={item.id} />
						})}
					</List>
				</Stage>
			</div>
		);
	}
}