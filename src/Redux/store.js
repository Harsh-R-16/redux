import { createStore } from "redux";
import { reducer } from "./reducer";

let initialStore = localStorage.getItem("store")
  ? JSON.parse(localStorage.getItem("store"))
  : {
      count: 0,
      todos: [
        { task: "Learn React", status: false },
        { task: "Dream11 Team", status: false },
        { task: "Redux Todos", status: false },
        { task: "Learn Javascript", status: false },
        { task: "Play Cricket", status: false },
      ],
    };

export const store = createStore(reducer, initialStore);
