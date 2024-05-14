"use client";

import React, { useState } from 'react';
import TodoItem from './TodoItem';
import ProgressBar from './ProgressBar';
import ProgressGraph from './ProgressGraph';
import SwipeButton from './SwipeButton'; // Import the SwipeButton component

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Todo 1', completed: false },
    { id: 2, text: 'Todo 2', completed: false },
    { id: 3, text: 'Todo 3', completed: false },
  ]);

  const handleTodoClick = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleSwipeRight = () => {
    const updatedTodos = todos.map(todo => ({ ...todo, completed: true }));
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

  const progressData = Object.entries(progressDataMap).map(([date, percentages]) => ({
    date,
    percentage: percentages.reduce((sum, percentage) => sum + percentage, 0) / percentages.length,
  }));

  return (
    <div>
      <ProgressBar todos={todos} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onClick={() => handleTodoClick(todo.id)}
        />
      ))}
      <SwipeButton onSwipeRight={handleSwipeRight} />
      <ProgressGraph data={progressData} />
    </div>
  );
};

export default TodoList;
