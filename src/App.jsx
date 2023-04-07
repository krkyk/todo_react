import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "sss"]);
  const [completeTodos, setCompleteTodos] = useState(["ddd"]);

  // フォームの値
  const onChangeTodoText = (e) => setTodoText(e.target.value);

  // 追加ボタン機能
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 削除ボタン機能
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // splice(何番目の要素か,いくつ削除するか)
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了ボタン機能
  const onClickComplete = (index) => {
    // 未完了リストから削除
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
    // 完了リストへ追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  // 戻すボタン機能
  const onClickBack = (index) => {
    // 完了リストから削除
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
    // 未完了リストへ追加
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOの入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
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
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <span>{todo}</span>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
