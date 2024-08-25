import React from "react";

const ShippingStep = ({ step, isLast }) => {
  const { title, date, status } = step;
  const isCompleted = status === "completed";
  const isCurrent = status === "current";

  return (
    <div className="flex items-center">
      {/* Step indicator */}
      <div className="relative flex items-center">
        <div
          className={`w-10 h-10 rounded-full ${
            isCompleted ? "bg-green-500" : "bg-gray-300"
          } flex items-center justify-center`}
        >
          {isCompleted ? "✔" : isCurrent ? "●" : "○"}
        </div>
        {!isLast && (
          <div
            className={`flex-1 h-2 ${
              isCompleted ? "bg-green-500" : "bg-gray-300"
            }`}
          ></div>
        )}
      </div>
      {/* Step details */}
      <div className="ml-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-500">{date || "Pending"}</p>
      </div>
    </div>
  );
};

export default ShippingStep;
