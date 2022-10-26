import React, { Component } from "react";
import TodoBtn from "./TodoBtn";
import iconPlus from "../icon/PlusCircle.png";
import Trash from "../icon/Trash.png"
import "./todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "active",
      id: 0,
    };
    this.Add = this.Add.bind(this);
    this.Reset = this.Reset.bind(this);
  }

  Add(e) {
    var data = {
      name: document.querySelector("#ToDo-name").value,
      text: document.querySelector("#ToDo-text").value,
      subtext: document.querySelector("#ToDo-subtext").value,
    };
    if (data.name === "" || data.text === "" || data.text === "") {
      alert("Please input all");
      this.preventDefault();
    }
    var context = `
            <div class="ToDo-card-text">
                <p class="id">${this.state.id}</p>
                <p class="name">${data.name}</p>
                <p class="text">${data.text}</p>
                <p class="subtext">${data.subtext}</p>
            </div>
            <div class="ToDo-card-btn">
            <a  class="card-reset"><img src="${Trash}">Delete</a>
            </div>
        `;
    document.querySelectorAll(".card-reset").forEach((e) => {
      e.addEventListener("click", (e) => {
        this.Reset(e);
      });
    });
    this.setState((state) => ({
      id: state.id + 1,
    }));
    var ToDoList = document.querySelector(".ToDo-place");
    var el = document.createElement("div");
    el.innerHTML = context;
    el.classList.add("ToDo-card");
    ToDoList.append(el);
  }
  Reset(e) {
    e.target.parentNode.parentNode.remove();
  }

  render() {
    return (
      <div id="wrapper">
        <div class="ToDo-header" onMouseOver={()=>{document.querySelectorAll(".ToDo-btn input").forEach(e=>{e.style.display="flex"})}}>
          <div className="ToDo-title">
            <h1>Simple Notes app</h1>
          </div>
          <div className="ToDo-header-btn">
          <a href="#" onClick={(e) => {
                  this.Add(this);
                }} className="addBtn">
                <img src={iconPlus} alt="icon"></img>
                <span>Add</span>
              </a>
          </div>
        </div>
        <div className="main">
            <TodoBtn />
        <div className="ToDo-list non-active">
          <div className="ToDo-place"></div>
        </div>
        </div>
      </div>
    );
  }
}
