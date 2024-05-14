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
    <div
      className="p-3 rounded-xl "
      style={{
        background: "linear-gradient(to left, #1178d7, #77a4cd)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        padding: "10px",
      }}
    >
      <div>
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRH-MCRfcb99CUsZ00DziVCoyUmKpukkgXVHsy0GIiHwbpGd0mj"
          alt="Your Image"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div>
        <p className="text-sm font-medium">Your Daily Goal Almost done</p>
        <p className="text-sm">Progress: {progress.toFixed(2)}%</p>

        <div className="h-2 my-2 bg-gray-300 rounded-full">
          <div
            className="h-full bg-blue-700 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
