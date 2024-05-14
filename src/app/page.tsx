"use client";

import React, { useState } from "react";
import TodoList from "@/components/TodoList";

enum Page {
  PAGE1 = "page1",
  PAGE2 = "page2",
  PAGE3 = "page3",
  PAGE4 = "page4",
}

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.PAGE1);

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6  w-screen h-screen ">
      <div className="relative border-4 border-black rounded-lg overflow-hidden">
        {/* <div className="absolute inset-0 border-2 border-gray-300"></div> */}

        <h1 className="text-2xl font-bold mb-4">Track Goals</h1>
        {/* <BottomNavigationBar /> */}
        {currentPage === Page.PAGE1 && (
          <div>
            <TodoList />
          </div>
        )}
        {currentPage !== Page.PAGE1 && (
          <div>
            <h2>{currentPage}</h2>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
