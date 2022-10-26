import React, { Component } from 'react'
import '../component/todo.css'
export default class TodoBtn extends Component {
  render() {
    return (
        <div className="ToDo-btn">
            <form>
              <input type={"text"} id="ToDo-name" placeholder="Name"></input>
              <input type={"text"} id="ToDo-text" placeholder="Text"></input>
              <input type={"text"} id="ToDo-subtext" placeholder="subtext"></input>
              
            </form>
          </div>
    )
  }
}
