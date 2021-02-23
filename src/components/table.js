import React, {Component} from 'react';

export default class Table extends Component {
	onChangeOrder = () => {
		this.props.changeOrder();
	}

	render() {
		const {notes, page} = this.props;

		const Rows = ({page}) => {

			const note = [];
			for (let i = page * 50 - 49; i <= page * 50; i++) {
				note.push(i);
			}
			
			const res = notes.map((item, i) => {
				if (note[i] && notes[--note[i]]) {
					return (
						<tr key={note[i]}>
							<td>{++note[i]}</td>
							<td>{notes[--note[i]]}</td>
						</tr>
					)
				}
			})

			return res;
		}

		const Header = ({page}) => {
			let btnClasses;
			if (this.props.isOrdered) {
				btnClasses = "reverse-notes on";
			} else {
				btnClasses = "reverse-notes";
			}
			return (
				<table>
					<thead>
						<tr>
							<th>№</th>
							<th><button className={btnClasses} onClick={this.onChangeOrder}>Заметка</button></th>
						</tr>
					</thead>
					<tbody>
						<Rows page={page}/>
					</tbody>
				</table>
			)
		}
		return (
			<Header page={page}/>
		)
	}
}