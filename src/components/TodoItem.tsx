import React from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onClick: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onClick }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={onClick} />
      <span>{todo.text}</span>
    </div>
  );
};

export default TodoItem;
