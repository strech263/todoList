interface InputTextProps {
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    onSubmit(event: React.FormEvent<HTMLFormElement>): void;
    inputText: string;
}



export default function CreateTodo({
    onChange,
    onSubmit,
    inputText
}: InputTextProps) {
    return (
      <div className="todoCreateContainer">
        {/* <form>
          <input type="text" placeholder="할 일을 입력해 주세요." />
          <button>등록하기</button>
        </form> */}
        <form onSubmit={(event) => onSubmit(event)}>
            <input
            onChange={(e) => onChange(e)}
            type="text"
            placeholder="할 일을 입력해 주세요."
            value={inputText}
            />
            <button type="submit">등록하기</button>
        </form>
      </div>
    );
}