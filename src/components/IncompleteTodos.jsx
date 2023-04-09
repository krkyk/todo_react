import React from "react";

const style = {
  backgroundColor: "#ffc0cb",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div style={style}>
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            // mapなどループ処理でレンダリングするときは特定のためのkeyが必要
            // 関数に引数を渡すときはそのまま渡すと関数が実行されてしまうので、アロー関数にする必要がある
            <li key={todo} className="list-row">
              <span>{todo}</span>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
