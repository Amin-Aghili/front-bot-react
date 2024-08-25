import ShippingStatus from "../components/ShippingStatus";
import OrderSummary from "../components/OrderSummary";
import { IoChevronBackOutline } from "react-icons/io5";
const OrderDetails = ({ order, onBack }) => {
  return (
    <div className="p-4">
      <button
        onClick={onBack}
        className="rounded-full bg-slate-800/20 w-9 h-9 " // بازگشت به صفحه قبلی
      >
        <IoChevronBackOutline className="ml-1 text-2xl " />
      </button>
      <h2 className="text-2xl font-bold mb-4">Order Details</h2>
      <OrderSummary order={order} />
      <ShippingStatus orientation="vertical" />
    </div>
  );
};

export default OrderDetails;
