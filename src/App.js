import React, {Component} from 'react';
import Form from './components/form';
import Table from './components/table';
import Pagination from './components/pagination';
import Search from './components/search';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			notes: [],
			pages: 1,
			search: '',
			isOrdered: false
		}

		this.onAddNote = this.onAddNote.bind(this);
		this.changePage = this.changePage.bind(this);
		this.getSearch = this.getSearch.bind(this);
		this.changeOrder = this.changeOrder.bind(this);
	}

	onAddNote(note) {
		this.setState(({notes}) => {
			return {
				notes: [note, ...notes]
			}
		})
	}

	changePage(key) {
		this.setState({
			pages: key
		})
	}

	getSearch(value) {
		this.setState({
			search: value
		})
	}

	changeOrder() {
		this.setState(({notes, isOrdered}) => {
			return {
				notes: notes.reverse(),
				isOrdered: !isOrdered
			}
		})
	}

	render() {

		const isFilteredNotes = () => {
			if (this.state.search.length > 0) {
				return this.state.notes.filter(note => {
					return note.indexOf(this.state.search) > -1;
				})
			} else {
				return this.state.notes;
			}
		}

		return (
			<>
				<Search search={this.getSearch}/>
				<Form  onAddNote={this.onAddNote}/>
				<Table notes={isFilteredNotes()} page={this.state.pages} changeOrder={this.changeOrder} isOrdered={this.state.isOrdered}/>
				<Pagination tableLength={this.state.notes.length} changePage={this.changePage}/>
			</>
		)
	}
}