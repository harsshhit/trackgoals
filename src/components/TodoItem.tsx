import React from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  link: string;
}

interface TodoItemProps {
  todo: Todo;
  onClick: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onClick }) => {
  return (
    <div className="flex items-center justify-between py-3 px-4 my-2 bg-gray-800 rounded-lg shadow-md hover:shadow-lg">
      <div className="flex items-center">
        <div className="w-9 mr-4 flex items-center justify-center">
          <img
            src={todo.link}
            alt="Your Image"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <span
          className={`text-sm ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onClick}
        className={`w-5 h-5 rounded-full cursor-pointer appearance-none ring-2 focus:ring-2 focus:ring-offset-2 ${
          todo.completed
            ? "ring-green-500 focus:ring-offset-green-100"
            : "ring-red-500 focus:ring-offset-red-100"
        }`}
      />
    </div>
  );
};

export default TodoItem;
