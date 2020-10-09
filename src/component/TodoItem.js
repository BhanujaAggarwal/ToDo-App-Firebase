import React, { Component } from 'react';
import PropTypes from "prop-types";

class TodoItem extends Component {
    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }
    }
    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" checked={completed} onChange={(e) => this.props.markComplete(id, e)} /> {' '}
                <p>{title}</p>
                <button onClick={(e) => this.props.deleteTodo(id, e)} style={btnStyle}>x</button>
            </div>
        )
    }
}

const btnStyle = {
    background: '#ffc0cb',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
  }
  
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }
  

export default TodoItem
