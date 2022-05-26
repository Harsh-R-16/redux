import { INC_COUNT, DEC_COUNT, ADD_TODO, TOGGLE_TODO } from "./action";

export const reducer = (store, action) => {
  localStorage.setItem("store", JSON.stringify(store));
  switch (action.type) {
    case INC_COUNT:
      return {
        ...store,
        count: store.count + 1,
      };

    case DEC_COUNT:
      return {
        ...store,
        count: store.count - 1,
      };

    case ADD_TODO:
      return { ...store, todos: action.payload };

    case TOGGLE_TODO:
      return {
        ...store,
        todos: action.payload,
      };

    default:
      return store;
  }
};
