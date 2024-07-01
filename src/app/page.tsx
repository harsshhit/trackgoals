"use client";
import React from "react";
import TodoList from "@/components/TodoList";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 bg-gray-900  ">
      <div
        className="p-4 rounded-lg  "
        // style={{
        //   width: "300px",
        //   height: "600px",
        //   backgroundColor: "#212121",
        // }}
      >
        <TodoList />
      </div>
    </main>
  );
};

export default Home;
