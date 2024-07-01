"use client";

import React, { useState } from "react";
import TodoItem from "./TodoItem";
import ProgressBar from "./ProgressBar";
import SwipeButton from "./SwipeButton"; // Import the SwipeButton component

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  link: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: "Workout",
      completed: false,
      link: "https://img.icons8.com/?size=48&id=16887&format=png",
    },
    {
      id: 2,
      text: "Read Book",
      completed: false,
      link: "https://img.icons8.com/?size=48&id=20445&format=png",
    },
    {
      id: 3,
      text: "30 min walk",
      completed: false,
      link: "https://img.icons8.com/?size=48&id=Y0hqLZkCtY89&format=png",
    },
    {
      id: 4,
      text: "Sleep at 11 sharp",
      completed: false,
      link: "https://img.icons8.com/?size=80&id=nfFc9F8TR8At&format=png",
    },
    {
      id: 5,
      text: "Drink 2L water",
      completed: false,
      link: "https://img.icons8.com/?size=80&id=114615&format=png",
    },
  ]);

  const handleTodoClick = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleSwipeRight = () => {
    const updatedTodos = todos.map((todo) => ({ ...todo, completed: true }));
    setTodos(updatedTodos);
  };

  const progressDataMap = todos.reduce((acc, todo) => {
    const date = new Date().toLocaleDateString();
    const progress = todo.completed ? 100 : 0;
    if (!acc[date]) {
      acc[date] = [progress];
    } else {
      acc[date].push(progress);
    }
    return acc;
  }, {} as { [date: string]: number[] });

  return (
    <div>
      <ProgressBar todos={todos} />
      <div className="flex py-4 font-bold text-white">
        <p>Todays Goal</p>
      </div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onClick={() => handleTodoClick(todo.id)}
        />
      ))}
      <SwipeButton onSwipeRight={handleSwipeRight} />
    </div>
  );
};

export default TodoList;
