import { FaPlus, FaMinus } from "react-icons/fa";
import Card from "../ui/Card";
import { formatNumber } from "../utils/formatter";

const CartItem = ({ item, incrementQuantity, decrementQuantity }) => {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <img
          src={item.imageUrl}
          alt={`${item.size} ${item.name}`}
          className="h-28 object-cover"
        />
        <div className="">
          <p className="text-lg font-semibold">{item.size}</p>
          <p className="text-sm text-gray-600">
            {formatNumber(item.price, 2)} x {item.quantity}
          </p>
          <p className="text-sm text-gray-600">
            {formatNumber(item.priceIr, 0)} x {item.quantity}
          </p>
          <p>{item.size}</p>
          <p>{item.color}</p>
        </div>
        <div className="h-28 ">
          <p>22/22/2024</p>
          <div className="flex items-center mt-5">
            <button
              onClick={() => decrementQuantity(item.url)}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
              aria-label="Decrease quantity"
            >
              <FaMinus />
            </button>
            <span className="mx-2 text-lg">{item.quantity}</span>
            <button
              onClick={() => incrementQuantity(item.url)}
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors"
              aria-label="Increase quantity"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
