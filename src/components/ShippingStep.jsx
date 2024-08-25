const ShippingStep = ({ step, isLast, len }) => {
  const { title, date, status } = step;
  const isCompleted = status === "completed";
  const isCurrent = status === "current";

  console.log(len);
  return (
    <div className="flex items-center relative">
      {/* Step indicator */}
      {len - 1 > isLast && (
        <div
          className={`border ${
            isCompleted && "border-blue-700"
          } absolute left-4 top-[12px] ml-[-5px] mt-[1.25] h-20 w-[0.125] bg-gray-300`}
        ></div>
      )}
      <div className="relative flex items-center">
        <div
          className={`w-6 h-6 rounded-full ${
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
