import { useState } from "react";
import {TList} from "./TodoList"

interface TodoItemProps {
    id: number;
    text: string;
    completed: boolean;
    onClickDelete(id: number): void;
    onClickUpdate(updatedTodoItem: TList): void;
}

export default function TodoItem(
    {
        id,
        text,
        completed,
        onClickDelete,
        onClickUpdate
    }: TodoItemProps
){
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [updatedText, setUpdatedText] = useState<string>(text);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedText(event.target.value);
    };
    
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const updatedTodoItem = {
          id: id,
          text: updatedText,
          completed: completed,
        };
        onClickUpdate(updatedTodoItem);
        setIsUpdating(false);
    };

    const handleComplete = () => {
        const updatedTodoItem = {
          id: id,
          text: text,
          completed: !completed,
        };
        onClickUpdate(updatedTodoItem);
    };


    return (
        <div>
            {!isUpdating ? (

                <li className="todoContainer">
                {/* {completed ? <button>완료됨</button> : <button>완료하기</button>}
                주신 코드는 조건부 렌더링을 사용하여 completed라는 상태 값에 따라 다른 버튼을 표시하는 JSX 코드입니다. 이 코드는 React에서 자주 사용되는 구문입니다. completed가 true일 때 "완료됨" 버튼을 표시하고, 그렇지 않으면 "완료하기" 버튼을 표시하게 됩니다 */}
                <button className="completeBtn" onClick={handleComplete}>
                    {completed ? "✔" : null}
                </button>
                <p className="itemText"
                style={completed ? { textDecoration: "line-through" } : undefined}>
                    { text }
                </p>
                <div className="buttonContainer">
                    <button type="button" onClick={() => setIsUpdating(true)}>수정</button>
                    <button type="button" onClick={() => onClickDelete(id)}>삭제</button>
                </div>
                </li>

            ) :
            (
                <li className="todoContainer">
                    <form className="formContainer" onSubmit={handleFormSubmit}>
                        <input
                        type="text"
                        value={updatedText}
                        onChange={handleInputChange}
                        />
                        <div className="buttonContainer">
                            <button type="submit">확인</button>
                            <button type="button" onClick={() => setIsUpdating(false)}>취소</button>
                        </div>
                    </form>
                </li>
            )}

            

        </div>
        
    );



}