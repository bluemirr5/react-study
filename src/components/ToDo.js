import React from "react";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoCheckFlag: props.data.checked, };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo() {
    this.props.onDelete(this.props.data.id)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ todoCheckFlag: value });
    this.props.onChangeChecked(this.props.data.id, value)
  }

  render() {
    return (
      <div>
        <input type="checkbox" checked={this.state.todoCheckFlag} onChange={this.handleInputChange} />&nbsp;&nbsp;
        <span>{this.props.data.todo}</span>&nbsp;&nbsp;
        <button onClick={this.deleteTodo }>x</button>
      </div>
    );
  }
}

export default ToDo
