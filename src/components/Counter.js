import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  increase,
  decrease,
  increaseAsync,
  decreaseAsync,
} from "../modules/counter";
const Counter = () => {
  const { counter: number } = useSelector((state) => state);
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increaseAsync(increase));
  const onDecrease = () => dispatch(decreaseAsync(decrease));
  return (
    <div
      style={{
        margin: "10px auto",
        width: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default React.memo(Counter);
