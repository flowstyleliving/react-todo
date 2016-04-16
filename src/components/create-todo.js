import React from 'react';


export default class App extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="What do U need to do?" ref="createInput"/>
        <button>Create</button>
      </form>
    );
  }

  handleCreate(event) {
    event.preventDefault();
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value= "";
  }
}
