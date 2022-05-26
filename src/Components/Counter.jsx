import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incCount, decCount } from "../Redux/action.js";

export default function Counter() {
  let count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <main>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decCount())}>Dec</button>
      <button onClick={() => dispatch(incCount())}>Inc</button>
    </main>
  );
}
