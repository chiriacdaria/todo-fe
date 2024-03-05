import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const TodoPage: React.FC = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        <NavBar />

        <main
          className="flex-1 bg-gray-200 p-4"
          style={{
            maxHeight: `calc(100vh - ${headerHeight}px)`,
            overflow: "hidden"
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default TodoPage;
