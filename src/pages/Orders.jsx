// import OrderList from "../components/OrderList";

// const orders = [
//   {
//     id: 1,
//     imageUrl: "https://via.placeholder.com/150",
//     name: "Product A",
//     price: 20.99,
//     priceIr: 50000,
//     quantity: 2,
//     size: "M",
//     color: "Red",
//     date: "2024-08-22",
//     totalPrice: 41.98,
//     items: [{ name: "Product A", size: "M", price: 20.99, quantity: 2 }],
//   },
//   // سایر سفارشات
// ];

// function Orders() {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Orders</h1>
//       <OrderList orders={orders} />
//     </div>
//   );
// }

// export default Orders;

import { useState } from "react";
import OrderList from "../components/OrderList";
import OrderDetails from "./OrderDetails";

const orders = [
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/150",
    name: "Product A",
    price: 20.99,
    priceIr: 50000,
    quantity: 2,
    size: "M",
    color: "Red",
    date: "2024-08-22",
    totalPrice: 41.98,
    items: [{ name: "Product A", size: "M", price: 20.99, quantity: 2 }],
  },
  // سایر سفارشات
];

const Orders = () => {
  const [currentView, setCurrentView] = useState("list"); // حالت پیش‌فرض لیست سفارشات است
  const [selectedOrder, setSelectedOrder] = useState(null);

  const showOrderDetails = (order) => {
    setSelectedOrder(order);
    setCurrentView("details");
  };

  const goBackToList = () => {
    setSelectedOrder(null);
    setCurrentView("list");
  };

  return (
    <div className="container mx-auto p-4">
      {currentView === "list" && (
        <OrderList orders={orders} onOrderClick={showOrderDetails} />
      )}

      {currentView === "details" && selectedOrder && (
        <OrderDetails order={selectedOrder} onBack={goBackToList} />
      )}
    </div>
  );
};

export default Orders;
