import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TaskCard from "./TaskCard";

const Tasks: React.FC = () => {
  const tasksData = [
    {
      id: 1,
      name: "Task 1",
      description: "Description for Task 1",
      dueDate: "2024-03-01",
      priority: "High",
      status: "Pending"
    },
    {
      id: 2,
      name: "Task 2",
      description: "Description for Task 2",
      dueDate: "2024-03-05",
      priority: "Medium",
      status: "Done"
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredTasks = tasksData.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search tasks..."
        className="rounded-full w-full p-2 mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredTasks.map((task) => (
        // Use Link to navigate to the /tasks/:taskId route
        <Link key={task.id} to={`${task.id}`}>
          <TaskCard task={task} />
        </Link>
      ))}
      <button
        className="bg-transparent  py-2 px-4 rounded"
        style={{ color: "#4a5568" }}
        // onClick={handleCreateTask}
      >
        {/* <div className="mb-2 flex items-center justify-center">
            <hr className="w-full border-t border-gray-300 mb-2" />
          </div> */}
        Create Task
        {/* <div className="mb-2 flex items-center justify-center">
            <hr className="w-full border-t border-gray-300 mb-2" />
          </div> */}
      </button>
    </div>
  );
};

export default Tasks;
