const OrderSummary = () => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">Products Purchased</h2>
      {/* اطلاعات محصولات خریداری شده */}
      <ul>
        <li>Product 1 - Quantity: 2 - Price: $20</li>
        <li>Product 2 - Quantity: 1 - Price: $15</li>
      </ul>
    </div>
  );
};

export default OrderSummary;
