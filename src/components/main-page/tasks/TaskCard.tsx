// TaskCard.tsx
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import GenericModal from "../../base-components/GenericModal";

interface TaskCardProps {
  task: {
    name: string;
    description: string;
    dueDate: string;
    priority: string;
    status: string;
  };
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.preventDefault();

    console.log("Deleting task:", task.name);
    setShowDeleteModal(true);
  };

  return (
    <div className="bg-white p-4 mb-4 rounded shadow-lg relative">
      <h2 className="text-lg font-semibold mb-4">{task.name}</h2>
      <p className="text-gray-600 mb-4">{task.description}</p>
      <div className="flex justify-between text-gray-600">
        <div>Due Date: {task.dueDate}</div>
        <div>Priority: {task.priority}</div>
        <div className="mb-2 text-gray-600">Status: {task.status}</div>
      </div>
      <div className="absolute top-0 right-0 mt-2 mr-2 p-2">
        <button
          className="text-gray-400 hover:text-red-500 focus:outline-none"
          onClick={handleDeleteClick}
        >
          <FaTrash />
        </button>
      </div>

      {/* Delete Modal */}
      <GenericModal
        isOpen={showDeleteModal}
        onDismiss={() => {
          setShowDeleteModal(false);
        }}
        modalName="Confirm Delete"
        buttonText="Delete"
        onButtonClick={() => {
          setShowDeleteModal(false);
          // You can perform additional actions on delete confirmation
        }}
      >
        <p className="text-gray-600 mb-4">
          Are you sure you want to delete this task?
        </p>
      </GenericModal>
    </div>
  );
};

export default TaskCard;
