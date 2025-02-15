import { useState } from "react";
import TodoItem from "./TodoItem";
import CreateTodo from "./CreateTodo";

interface TList {
    id : number;
    text : string;
    completed : boolean;
}


export default function TodoList() {

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
        <div className="todoListContainer">
          {todoList.map((item) => (
            <TodoItem key={item.id} text={item.text} completed={item.completed} />
          ))}
          <CreateTodo />
        
        </div>
    );
}