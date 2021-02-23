import React, {Component} from 'react';

export default class Pagination extends Component {
	onChangePage = (e) => {
		this.props.changePage(e.target.innerText);
	}

	render() {
		const NumberOfPages = () => {
			const pageLength = Math.ceil(this.props.tableLength  / 50) || 1;
			const button = [];
			for (let i = 1; i <= pageLength; i++) {
				button.push(i);
			}

			const pag = button.map(btn => {
				return (
					<button className="pagination" key={btn} onClick={this.onChangePage}>{btn}</button>
				)
			})

			return pag;
		}
		return (
			<>
				<span>Страницы: </span>
				<NumberOfPages/>
			</>
		)
	}
}