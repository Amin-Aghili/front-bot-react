import { useState } from "react";
import OrderItem from "./OrderItem";
import OrderModal from "./OrderModal";

const OrderList = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const openModal = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="space-y-10 ">
      {orders.map((order, index) => (
        <OrderItem key={index} item={order} onClick={() => openModal(order)} />
      ))}

      {/* نمایش پاپ‌آپ */}
      {selectedOrder && (
        <OrderModal order={selectedOrder} onClose={closeModal} />
      )}
    </div>
  );
};

export default OrderList;
