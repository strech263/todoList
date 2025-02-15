import { useState } from "react";
import TodoItem from "./TodoItem";
import CreateTodo from "./CreateTodo";

export interface TList {
    id : number;
    text : string;
    completed : boolean;
}


export default function TodoList() {


    const [inputText, setInputText] = useState("");

    const [todoList, setTodoList] = useState<TList[]>([
        // { id: 1,
        //   text: "할일1",
        //   completed: false
        // },
        // { id: 2,
        //   text: "할일2",
        //   completed: false
        // }
    ]);


    // 입력값 변경내용 확인
    const textTypingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    // 입력 확인
    const textInputHandler = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // 폼을 제출할 때, 폼을 서버로 전송하는 기본 동작을 막고, 그 대신 JavaScript에서 다른 처리를 하도록 할 수 있습니다.
        const newTodo: TList = {
        id: Date.now(),
        text: inputText,
        completed: false,
        };
        setTodoList([...todoList, newTodo]);
        // 1. todoList 배열의 모든 항목을 복사한 후 (...todoList).
        // 2. newTodo를 배열의 끝에 추가하여 새로운 배열을 만듭니다.
        // 3. setTodoList를 호출하여, 새로운 배열로 todoList 상태를 갱신합니다.



        // 아래처럼도 사용 가능
        // setTodoList(todoList.concat(newTodo));
        // 입력한 값 지우기
        setInputText("");      
    };

    const textDeleteHandler = (id: number) => {
        setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
        //filter 로 id!==id 하는것들만 모아 TodoList 재생성(업데이트)
    };

    const textUpdateHandler = (newTodo: TList): void => {
        const newTodoList = todoList.map((item) => {
          // id값이 같은 것은 새롭게 입력한 값으로 return하고
            if (item.id === newTodo.id) {    
                // ===는 타입까지 비교하는 연산자
                return newTodo;
                // 그 외에는 기존 값을 return
            } else {
                return item;
            }
        });
        setTodoList(newTodoList);
    };




    return (
        <div className="todoListContainer">
            <h3> TodoList </h3>
            {todoList.map((item) => (
                <TodoItem 
                id={item.id} 
                text={item.text} 
                completed={item.completed} 
                onClickDelete={textDeleteHandler}
                onClickUpdate={textUpdateHandler}
                />
            ))}
            <CreateTodo
                onChange={textTypingHandler}
                onSubmit={textInputHandler}
                inputText={inputText}
                
            />
        
        </div>
    );
}