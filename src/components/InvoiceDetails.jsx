const InvoiceDetails = () => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-semibold mb-2">Invoice Details</h2>
      {/* جزئیات فاکتور و تاریخ هر مرحله */}
      <p>Order Number: #123456</p>
      <p>Total Amount: $55</p>
      <p>Order Date: 2024-08-20</p>
      <p>Shipping Date: 2024-08-22</p>
    </div>
  );
};

export default InvoiceDetails;
