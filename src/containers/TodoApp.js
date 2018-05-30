import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from '../actions';

import NewTodoForm from '../components/NewTodoForm';
import TodoList from '../components/TodoList';

class TodoApp extends Component {
  //constructor() {
  //super();
  //}

  formSubmitted(event) {
    event.preventDefault();

    this.props.onAddTodo({
      title: this.props.newTodo,
      done: false
    });

    this.props.onNewTodoChanged('');

  }

  toggleTodoDone(event, index) {
    this.props.onToggleTodoDone({
      index,
      checked: event.target.checked
    });
  }

  render() {
    return (
      <div className="App">
        <h3>{this.props.message}</h3>
        <NewTodoForm
          newTodo={this.props.newTodo}
          formSubmitted={this.formSubmitted.bind(this)}
          newTodoChanged={this.props.onNewTodoChanged} />
        <button onClick={() => this.props.onAllDone()}>All Done</button>
        <TodoList
          todos={this.props.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.props.onRemoveTodo} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.message,
    newTodo: state.newTodo,
    todos: state.todos
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onNewTodoChanged: newTodo => {
      dispatch(actions.newTodoChanged(newTodo));
    },
    onAddTodo: todo => {
      dispatch(actions.addTodo(todo));
    },
    onToggleTodoDone: toggle => {
      dispatch(actions.toggleTodoDone(toggle));
    },
    onRemoveTodo: index => {
      dispatch(actions.removeTodo(index));
    },
    onAllDone: () => {
      dispatch(actions.allDone());
    }
  }
}

const connecter = connect(mapStateToProps, mapDispatchToProps);
TodoApp = connecter(TodoApp);

export default TodoApp;
//export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
