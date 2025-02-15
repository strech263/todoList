import { useState } from 'react';
import './App.css'

interface TList {
  id : number;
  text : string;
  completed : boolean;
}

function App() {

  const [todoList, setTodoList] = useState<TList[]>([
    { id: 1,
      text: "할일1",
      completed: false
    },
    { id: 2,
      text: "할일2",
      completed: false
    }
  ]);


  return (
    <>
      <div className="App">
        <div className="todoListContainer">
          {/* <li className="todoContainer">
            <button>완료</button>
            <p>할 일 1</p>
            <div className="buttonContainer">
              <button type="button">수정</button>
              <button type="button">삭제</button>
            </div>
          </li>
          <li className="todoContainer">
            <button>완료</button>
            <p>할 일 2</p>
            <div className="buttonContainer">
              <button type="button">수정</button>
              <button type="button">삭제</button>
            </div>
          </li> */}

          {todoList.map((item, idx) => (
            <div key={idx}>
              <li className="todoContainer">
                <button>완료</button>
                <p>{item.text}</p>
                <div className="buttonContainer">
                  <button type="button">수정</button>
                  <button type="button">삭제</button>
                </div>
              </li>
            </div>
          ))}





        </div>
        <div className="todoCreateContainer">
          <form>
            <input type="text" placeholder="할 일을 입력해 주세요." />
            <button>등록</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
