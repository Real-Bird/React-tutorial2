import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, insert, remove, toggle } from "../modules/todos";

const TodoItem = ({ text, id, done }) => {
  const dispatch = useDispatch();
  const onToggle = () => dispatch(toggle(id));
  const onDelete = () => dispatch(remove(id));
  console.log(done);
  return (
    <div>
      <input
        type="checkbox"
        checked={done}
        onClick={onToggle}
        readOnly={true}
      />
      <span style={{ textDecoration: done ? "line-through" : "none" }}>
        {text}
      </span>
      <button onClick={onDelete}>삭제</button>
    </div>
  );
};

const Todos = () => {
  const {
    todos: { input, todos },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(insert(input));
    dispatch(changeInput(""));
  };
  const onChange = (e) => dispatch(changeInput(e.target.value));
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
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={input} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Todos);
