import React, { Component } from 'react';
import './App.css';
import MyPokedex from './routes/myPokedex';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<MyPokedex />
			</div>
		);
	}
}

export default App;
