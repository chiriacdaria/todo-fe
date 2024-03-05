import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoPage from "./components/TodoPage";
import Completed from "./components/main-page/Completed";
import Overdue from "./components/main-page/Overdue";
import Today from "./components/main-page/Today";
import Calendar from "./components/main-page/Calendar";
import Tasks from "./components/main-page/tasks/Tasks";
import Task from "./components/main-page/tasks/Task";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/todo/*" element={<TodoPage />}>
          <Route index element={<Tasks />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="tasks/:taskId" element={<Task />} />
          <Route path="completed" element={<Completed />} />
          <Route path="overdue" element={<Overdue />} />
          <Route path="today" element={<Today />} />
          <Route path="calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
