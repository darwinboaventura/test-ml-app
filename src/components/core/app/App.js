import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Assets
import './App.css';

// Components
import Header from '../../shared/header/header.js';
import Search from '../../shared/search/search.js';
import Home from '../../features/home/home.js';
import Result from '../../features/result/result.js';
import ProductDetail from '../../features/product-detail/product-detail.js';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Header>
						<Search method="GET" action="items" />
					</Header>

					<div className="l-pages">
						<div className="l-wrapper">
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/items' component={Result} />
								<Route path='/items/:id' component={ProductDetail} />
							</Switch>
						</div>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
