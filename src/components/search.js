import React, {Component} from 'react';

export default class Search extends Component {
	onSearch = (e) => {
		const value = e.target.value;
		this.props.search(value);
	}

	render() {
		return (
			<div className="search-block">
				<input onChange={this.onSearch}></input>
				<button>Найти</button>
			</div>
		)
	}
}