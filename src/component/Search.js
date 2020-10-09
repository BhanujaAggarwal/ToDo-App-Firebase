import React, { Component } from 'react'

export default class Search extends Component {
    render() { 
        return (
           <div align="right" style={{backgroundColor: "rgb(51, 51, 51)"}}>
             <input 
              type="text" 
              className="input" 
              style={{ flex: '1', padding: '5px', marginBottom:"20px" }}
              placeholder="--- Search Todo ---" 
              onChange={this.props.searchTodo}
            />
        </div>
        )
      }
}
