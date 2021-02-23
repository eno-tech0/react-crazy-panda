import React, {Component} from 'react';

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			note: ''
		}

		this.onPutNote = this.onPutNote.bind(this);
		this.onAddNote = this.onAddNote.bind(this);
	}

	onPutNote(e) {
		const value = e.target.value;
		this.setState({
			note: value
		})
	}

	onAddNote() {
		this.props.onAddNote(this.state.note);
		this.setState({
			note: ''
		})
	}

	render() {
		return (
			<div className="add-block">
				<input onChange={this.onPutNote} type="text" value={this.state.note}></input>
				<button onClick={this.onAddNote}>Добавить запись</button>
			</div>
		)
	}
}