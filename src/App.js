import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Component/HeaderComponent';
import List from './Component/List';
import ListItem from './Component/ListItem';
import FormSubmit from './Component/FormSubmit';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [ { id: 1, name: 'อาบน้ำ', Complete: false }, { id: 2, name: 'ไปซื้อสบ่', Complete: false } ],
			message: ''
		};
		// การส่งค่านี้เข้าไป
		this.onChangmMessage = this.onChangmMessage.bind(this);
		this.onSubmitMessage = this.onSubmitMessage.bind(this);
	}

	onChangmMessage(e) {
		this.setState({ message: e.target.value });
	}
	//กดบันทึก
	onSubmitMessage(e) {
		e.preventDefault();
		let oldTodos = this.state.todos;
		let todoLength = this.state.todos.length;
		let lastId = this.state.todos[todoLength - 1].id;
		let newMassage = {
			id: lastId + 1,
			name: this.state.message,
			complete: false
		};
		oldTodos.push(newMassage);
		this.setState({ todos: oldTodos });
	}
	render() {
		return (
			<div
				style={{
					borderColor: '#e12c6a',
					borderWidth: 2,
					borderStyle: 'solid',
					borderRadius: 4,
					width: 1024,
					margin: 'auto',
					marginTop: 20
				}}
			>
				<HeaderComponent />
				<List todos={this.state.todos}>
					<ListItem />
				</List>
				<FormSubmit onChangmMessage={this.onChangmMessage} onSubmitMessage={this.onSubmitMessage} />
			</div>
		);
	}
}

export default App;
