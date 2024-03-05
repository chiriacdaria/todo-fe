import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPen, faCheck } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import PriorityBadge from "./PriorityBadge";

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "white" // Set the background color of the control
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#1f2937"
      : state.isFocused
      ? "#D8DCE2"
      : "white",
    color: state.isSelected ? "white" : "black",
    "&:hover": {
      backgroundColor: state.isSelected ? "#1f2937" : "#D8DCE2" // Set hover color
    }
  })
};

const initialTaskDetails = {
  name: "Task 1",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget...",
  type: "Task",
  dueDate: new Date("2024-03-15"),
  createdAt: new Date("2024-03-01"),
  priority: "Low",
  difficulty: "Medium"
};

const typeOptions = [
  { value: "Task", label: "Task" },
  { value: "Bug", label: "Bug" },
  { value: "Quick Note", label: "Quick Note" }
];

const difficultyOptions = [
  { value: "Low", label: "Low" },
  { value: "Medium", label: "Medium" },
  { value: "High", label: "High" }
];

const priorityOptions = [
  { value: "Low", label: "Low" },
  { value: "Medium", label: "Medium" },
  { value: "High", label: "High" }
];

const Task: React.FC = () => {
  const navigate = useNavigate();
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [dueDate, setDueDate] = useState<Date | null>(
    initialTaskDetails.dueDate
  );
  const [showDatePicker, setShowDatePicker] = useState(false);
  const isMobileView = window.innerWidth <= 768; // Adjust the width as needed for your design

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, []);

  const [isEditing, setEditing] = useState(false);
  const [taskDetails, setTaskDetails] = useState(initialTaskDetails);

  const handleGoBack = () => {
    navigate("/todo/tasks");
  };

  const handleEditToggle = () => {
    setEditing(!isEditing);
  };

  const handleSave = () => {
    setEditing(false);
    setTaskDetails({
      ...taskDetails,
      dueDate: dueDate || new Date() // Use the selected due date or the current date if not set
    });
  };

  return (
    <div className="bg-gray-100 font-sans flex flex-col p-4 h-full">
      {/* Top Bar */}
      <div
        ref={headerRef}
        className="bg-gray-800 p-4 text-white flex items-center"
      >
        {isEditing ? (
          <button className="cursor-pointer" onClick={handleSave}>
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "#9bcf53", fontSize: "1.2em" }}
            />
          </button>
        ) : (
          <span className="cursor-pointer" onClick={handleGoBack}>
            <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
          </span>
        )}
        <div className="flex items-center w-full">
          {isEditing ? (
            <h2 className="ml-2 text-xl font-thin w-full">
              <input
                type="text"
                className="ml-2 text-sm focus:outline-none bg-transparent text-xl font-thin w-full"
                value={taskDetails.name}
                onChange={(e) =>
                  setTaskDetails({ ...taskDetails, name: e.target.value })
                }
              />
            </h2>
          ) : (
            <h2 className="ml-2 text-xl font-thin w-full">
              {taskDetails.name}
              <button
                className="ml-2 text-sm focus:outline-none"
                onClick={handleEditToggle}
              >
                <FontAwesomeIcon
                  icon={faPen}
                  className="cursor-pointer text-gray-300 mb-0.5"
                />
              </button>
            </h2>
          )}
        </div>
        <div className="ml-auto text-sm font-semibold">
          {/* Priority: {taskDetails.priority}
           */}
          <PriorityBadge priority={taskDetails.priority} />
        </div>
      </div>

      {/* Content Section */}
      <div
        className={`flex ${
          isMobileView ? "flex-col" : "flex-grow overflow-hidden"
        }`}
      >
        {/* Left Side */}
        <div className={`w-full px-4 ${isMobileView ? "pt-4" : "w-1/3 py-4"}`}>
          <div className=" h-full">
            <div className="mb-4">
              <p className="text-md mb-2 font-semibold">Type:</p>
              {isEditing ? (
                <Select
                  options={typeOptions}
                  value={typeOptions.find(
                    (option) => option.value === taskDetails.type
                  )}
                  onChange={(selectedOption) =>
                    setTaskDetails({
                      ...taskDetails,
                      type: selectedOption ? selectedOption.value : ""
                    })
                  }
                  styles={customStyles}
                  className="react-select-container"
                  classNamePrefix="react-select"
                />
              ) : (
                <p className="text-gray-700">{taskDetails.type}</p>
              )}
            </div>

            <div className="mb-4">
              <p className="text-md mb-2 font-semibold">Difficulty:</p>
              {isEditing ? (
                <Select
                  options={difficultyOptions}
                  value={difficultyOptions.find(
                    (option) => option.value === taskDetails.difficulty
                  )}
                  onChange={(selectedOption) =>
                    setTaskDetails({
                      ...taskDetails,
                      difficulty: selectedOption ? selectedOption.value : ""
                    })
                  }
                  styles={customStyles}
                  className="react-select-container"
                  classNamePrefix="react-select"
                />
              ) : (
                <p className="text-gray-700">{taskDetails.difficulty}</p>
              )}
            </div>
            <div className="mb-4">
              <p className="text-md mb-2 font-semibold">Priority:</p>
              {isEditing ? (
                <Select
                  options={priorityOptions}
                  value={priorityOptions.find(
                    (option) => option.value === taskDetails.priority
                  )}
                  onChange={(selectedOption) =>
                    setTaskDetails({
                      ...taskDetails,
                      priority: selectedOption ? selectedOption.value : ""
                    })
                  }
                  styles={customStyles}
                  className="react-select-container"
                  classNamePrefix="react-select"
                />
              ) : (
                <p className="text-gray-700">{taskDetails.priority}</p>
              )}
            </div>
            <p className="text-md mb-2 font-semibold">Due Date:</p>
            {isEditing ? (
              <div className="mb-4 relative">
                <DatePicker
                  selected={dueDate}
                  onChange={(date) => setDueDate(date as Date)}
                  dateFormat="yyyy-MM-dd"
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  className="w-full p-2 border rounded focus:outline-none focus:border-59D5E0"
                />
                <button
                  className="absolute right-2 top-2 p-1 focus:outline-none"
                  onClick={() => setShowDatePicker(!showDatePicker)}
                />
              </div>
            ) : (
              <p className="text-gray-700 mb-4">
                {dueDate ? dueDate.toDateString() : "Not Set"}
              </p>
            )}
            <div className="mb-4">
              <p className="text-md mb-2 font-semibold">Created At:</p>
              <p>{taskDetails.createdAt.toDateString()}</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className={`w-full px-4 ${isMobileView ? "" : "w-2/3 py-4"}`}>
          {/* Description Section */}

          <div className="h-full">
            <p className="text-md mb-2 font-semibold">Description:</p>
            {isEditing ? (
              <>
                <textarea
                  style={{
                    minHeight: `calc(100% - ${headerHeight}px - 1rem )`
                  }}
                  className="text-gray-700  w-full p-2 border rounded focus:outline-none focus:border-blue-500 "
                  value={taskDetails.description}
                  onChange={(e) =>
                    setTaskDetails({
                      ...taskDetails,
                      description: e.target.value
                    })
                  }
                />
                <div className="flex justify-end mt-2">
                  <button
                    type="button"
                    style={{
                      backgroundColor: hovered ? "#416D19" : "#9bcf53",
                      transition: "background-color 0.3s"
                    }}
                    className="text-white py-2 px-4 rounded-md"
                    onMouseOver={() => setHovered(true)}
                    onMouseOut={() => setHovered(false)}
                    onClick={() => alert("Save Changes clicked")}
                  >
                    Save Changes
                  </button>
                </div>
              </>
            ) : (
              <p className="text-gray-700">{taskDetails.description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
