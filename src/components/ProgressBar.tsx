import React from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface ProgressBarProps {
  todos: Todo[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ todos }) => {
  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;
  const progress = (completedCount / totalCount) * 100;

  return (
    <div>
      <div
        style={{ width: "200px", height: "20px", border: "1px solid black" }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "green",
          }}
        ></div>
      </div>
      <p>Progress: {progress.toFixed(2)}%</p>
    </div>
  );
};

export default ProgressBar;
