import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOの入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <li className="list-row">
            <span>aaa</span>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          <li className="list-row">
            <span>aaa</span>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
    </>
  );
};
