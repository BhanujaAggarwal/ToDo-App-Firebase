import React from 'react';
import './App.css';
import Todos from "./component/Todos";
import AddTodo from "./component/AddTodo"
import Search from "./component/Search"
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import Header from "./layout/Header";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';

class App extends React.Component {
  state = {
    todos : [],
    filtered: []
  };
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=7')
      .then(res => this.setState({ todos: res.data }));
      this.setState({
        filtered: this.state.todos
      });
  }
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo
      })
    });
  };
  deleteTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };
  addTodo = (title) => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => {
        res.data.id = uuidv4();
        this.setState({ todos: [...this.state.todos, res.data], filtered: [...this.state.todos, res.data] });
      });
  };
  searchTodo = (e) => {
    let search = [];
    if (e.target.value !== "") {
      search = this.state.filtered.filter(searchitem => {
        const searchlw = searchitem.title.toLowerCase();
        const targetlw = e.target.value.toLowerCase();
        return searchlw.includes(targetlw)
      });
      this.setState({
        todos: search
      })
    } else {
      this.setState({
        todos: this.state.filtered
      })
    }
  }
  render(){
    return(
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <Search searchTodo={this.searchTodo} />
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
