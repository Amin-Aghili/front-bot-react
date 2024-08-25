import Card from "../ui/Card";
import { formatNumber } from "../utils/formatter";

const OrderItem = ({ item, onClick }) => {
  return (
    <Card>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={onClick}
      >
        <img
          src={item.imageUrl}
          alt={`${item.size} ${item.name}`}
          className="h-28 object-cover"
        />
        <div className="">
          <p className="text-lg font-semibold">{item.name}</p>
          <p className="text-sm text-gray-600">
            {formatNumber(item.price, 2)} x {item.quantity}
          </p>
          <p className="text-sm text-gray-600">
            {formatNumber(item.priceIr, 0)} x {item.quantity}
          </p>
          <p>{item.size}</p>
          <p>{item.color}</p>
        </div>
        <div className="h-28 flex flex-col justify-between">
          <p className="text-sm text-gray-500">{item.date}</p>
        </div>
      </div>
    </Card>
  );
};

export default OrderItem;
