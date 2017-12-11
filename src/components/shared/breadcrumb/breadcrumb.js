import React, { Component } from 'react';

// Assets
import './breadcrumb.css';

export default class Breadcrumb extends Component {
	render() {
		return (
			<div className="c-breadcrumb">
				<ul>
					<li>
						<span>Categorias: </span>
					</li>

					{this.props.filters.map((filter) => {
						return (
							<li key={filter}>
								<span>{filter}</span>
							</li>
						)
					})}

					<div className="clearfix"></div>
				</ul>
			</div>
		);
	}
}