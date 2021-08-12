import React, { Component } from 'react'
import "./TodoApp.css";
export default class   extends Component {

    state = {
    input: ""
    };



    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    };
    render() {
        const { input } = this.state;
        return (
            <div className="todo-container">
           

            <form className="input-section">
            <h1> Todo App</h1>
                <input type="text"
                value= {input}
                onChange={this.handleChange} placeholder="Enter Here"  />
                
              </form>

              <ul>
                  <li>sdjfsjkidhfsikouf <i className="fas fa-trash-alt"></i></li>
                  <li>sdjfsjkidhfsikouf <i className="fas fa-trash-alt"></i></li>
              </ul>
            </div>
        )
    }
}
