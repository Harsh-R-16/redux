export const INC_COUNT = "INC_COUNT";
export const DEC_COUNT = "DEC_COUNT";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const incCount = () => {
  return {
    type: INC_COUNT,
  };
};

export const decCount = () => {
  return {
    type: DEC_COUNT,
  };
};

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};
