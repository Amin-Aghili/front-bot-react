import OrderList from "../components/OrderList";

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

function Orders() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <OrderList orders={orders} />
    </div>
  );
}

export default Orders;
