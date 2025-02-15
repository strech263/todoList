interface TodoItemProps {
    id: number;
    text: string;
    completed: boolean;
    onClickDelete(id: number): void;
}

export default function TodoItem(
    {
        id,
        text,
        completed,
        onClickDelete
    }: TodoItemProps
){
    


    return (
        <li className="todoContainer">
          {completed ? <button>완료됨</button> : <button>완료하기</button>}
          {/* 주신 코드는 조건부 렌더링을 사용하여 completed라는 상태 값에 따라 다른 버튼을 표시하는 JSX 코드입니다. 이 코드는 React에서 자주 사용되는 구문입니다. completed가 true일 때 "완료됨" 버튼을 표시하고, 그렇지 않으면 "완료하기" 버튼을 표시하게 됩니다 */}
          <p>{ text }</p>
          <div className="buttonContainer">
            <button type="button">수정</button>
            <button type="button" onClick={() => onClickDelete(id)}>삭제</button>
          </div>
        </li>
    );

}