import ShippingStep from "./ShippingStep";

const ShippingStatus = () => {
  const steps = [
    { title: "Order Placed", date: "2024-08-20", status: "completed" },
    { title: "Processing", date: "2024-08-21", status: "completed" },
    { title: "Shipped", date: "2024-08-22", status: "current" },
    { title: "Delivered", date: "", status: "upcoming" },
  ];

  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">Shipping Status</h2>
      <div className="flex flex-col space-y-4">
        {steps.map((step, index) => (
          <ShippingStep key={index} step={step} />
        ))}
      </div>
    </div>
  );
};

export default ShippingStatus;
