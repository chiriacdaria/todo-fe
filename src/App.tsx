// src/App.tsx
import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoPage from "./components/TodoPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
