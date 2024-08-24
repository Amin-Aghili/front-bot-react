import CartItem from "../components/CartItem";
import { formatNumber } from "../utils/formatter";

const Cart = ({ cart, incrementQuantity, decrementQuantity }) => {
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.priceIr * item.quantity,
    0
  );
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl text-center mb-4 text-gray-500">
        کالاهای در سبد شما
        <span className="text-orange-700 font-semibold">
          {" "}
          {totalItems}{" "}
        </span>{" "}
        عدد میباشد
      </h1>
      {cart.length === 0 ? (
        <p className="text-2xl text-center text-gray-600">یه چی بخر دیگه</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem
              key={item.url}
              item={item}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
          ))}
          <div className="mt-4 flex justify-between items-center border-t border-gray-300 pt-4">
            <p className="text-sm font-homa">جمع کل (تومان):</p>
            <p className="text-xl ">{formatNumber(totalAmount, 0)}</p>
          </div>{" "}
          <div className="text-center ">
            <button
              onClick={() => {}}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              پرداخت
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
