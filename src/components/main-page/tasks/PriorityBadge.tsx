// PriorityBadge.tsx
import React from "react";

interface PriorityBadgeProps {
  priority: string;
}

const PriorityBadge: React.FC<PriorityBadgeProps> = ({ priority }) => {
  let badgeColor = "";

  switch (priority.toLowerCase()) {
    case "low":
      badgeColor = "#9BCF53";
      break;
    case "medium":
      badgeColor = "#FAA300";
      break;
    case "high":
      badgeColor = "#ee4266";
      break;
    default:
      badgeColor = "bg-gray-500";
  }

  return (
    <span
      className={`inline-block px-4 py-1 text-xs font-semibold text-white rounded-xl ${badgeColor}`}
      style={{ backgroundColor: badgeColor }}
    >
      {priority}
    </span>
  );
};

export default PriorityBadge;
