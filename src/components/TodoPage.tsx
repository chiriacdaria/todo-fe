// src/TodoPage.tsx
import React from "react";

const TodoPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b p-4">
        <div className="text-2xl font-semibold">Your App</div>
      </header>

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Navbar */}
        <nav className="bg-gray-800 w-full lg:w-64 p-4">
          <div className="text-white font-bold text-xl">Navbar</div>
          {/* Add your navbar content here */}
        </nav>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
          {/* Your main content goes here */}
          <h1 className="text-2xl font-semibold mb-4">Main Content</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </main>
      </div>
    </div>
  );
};

export default TodoPage;
