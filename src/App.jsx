import Navbar from "./components/Navbar";
import { useState } from "react";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [cart, setCart] = useState([]);

  const incrementQuantity = (url) => {
    setCart(
      cart.map((item) =>
        item.url === url ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (url) => {
    setCart(
      cart
        .map((item) =>
          item.url === url ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.url === item.url);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.url === item.url
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home addToCart={addToCart} />;
      case "setting":
        return <Setting />;
      case "orders":
        return <Orders />;
      case "cart":
        return (
          <Cart
            cart={cart}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        );
      default:
        return <Home addToCart={addToCart} />;
    }
  };
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-grow flex items-center justify-center ">
        <div className="w-full pb-32 ">{renderPage()}</div>
      </main>
      <div className="fixed bottom-0 left-0 w-full z-10">
        <Navbar
          setPage={setActivePage}
          cartItemCount={cart.length}
          activePage={activePage}
        />
      </div>
    </div>
  );
}
