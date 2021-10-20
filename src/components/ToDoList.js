import React from "react";
import ToDo from "./ToDo";

class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      listSample: [
        {id: 1, todo: '11111jh', checked: true},
        {id: 2, todo: '22222', checked: false},
        {id: 3, todo: '333333', checked: false},
        {id: 4, todo: '444444', checked: false}
      ],
      value: ''
    };
    this.onChangeCheckBox = this.onChangeCheckBox.bind(this);
    this.valueFix = this.valueFix.bind(this);
    this.onAddTodo = this.onAddTodo.bind(this);
    this.todoDelete = this.todoDelete.bind(this);
  }

  onChangeCheckBox(id, flag) {
    const target = this.state.listSample.find(it => it.id === id)
    target.checked = flag
  }

  valueFix(event) {
    this.setState({value: event.target.value});
  }

  todoDelete(id) {
    console.log(id)
    const target = this.state.listSample.find(it => it.id === id)
    const targetIndex = this.state.listSample.indexOf(target);
    this.state.listSample.splice(targetIndex, 1);

    this.setState({listSample: this.state.listSample});
    console.log(this.state.listSample)
  }

  onAddTodo() {
    const ids = this.state.listSample.map(it => it.id)
    let targetId
    if(ids.length === 0) targetId = 1
    else targetId = Math.max(...ids) + 1
    const target = {id: targetId, todo: this.state.value, checked: false}
    this.state.listSample.push(target)
    console.log(this.state.listSample)

    this.setState({value: ''});
  }

  render() {
    const listJSX = this.state.listSample.map((it, idx) =>
      <div key={it.id}>
        <ToDo data={it} onChangeChecked={this.onChangeCheckBox} onDelete={this.todoDelete} />
      </div>
    )
    return (
      <div>
        <h3>This is Todo List</h3>
        <hr/>
        {listJSX}
        <input type="text" value={this.state.value} onChange={this.valueFix} />
        <button onClick={this.onAddTodo}>Add</button>
      </div>
    );
  }
}

export default ToDoList