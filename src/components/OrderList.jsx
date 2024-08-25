// import { useState } from "react";
// import OrderItem from "./OrderItem";
// import OrderDetails from "../pages/OrderDetail";

// const OrderList = ({ orders }) => {
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   const openDetail = (order) => {
//     setSelectedOrder(order);
//   };

//   const closeDetail = () => {
//     setSelectedOrder(null);
//   };

//   return (
//     <>
//       {orders.map((order, index) => (
//         <OrderItem key={index} item={order} onClick={() => openDetail(order)} />
//       ))}
//       {selectedOrder && (
//         <OrderDetails order={selectedOrder} onClose={closeDetail} />
//       )}
//     </>
//   );
// };

// export default OrderList;

import OrderItem from "./OrderItem";

const OrderList = ({ orders, onOrderClick }) => {
  return (
    <>
      {orders.map((order, index) => (
        <div key={index} onClick={() => onOrderClick(order)}>
          <OrderItem item={order} />
        </div>
      ))}
    </>
  );
};

export default OrderList;
