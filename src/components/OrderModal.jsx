import Modal from "react-modal";
import ShippingStatus from "./ShippingStatus";
import OrderSummary from "./OrderSummary";

Modal.setAppElement("#root"); // برای دسترسی بهتر به DOM

const OrderModal = ({ order, onClose }) => {
  return (
    <Modal
      isOpen={!!order}
      onRequestClose={onClose}
      className="relative bg-white shadow-lg  rounded-lg p-6 w-full max-w-md mx-auto "
      overlayClassName="fixed w-full p-4 bottom-14 top-0  bg-black bg-opacity-50 flex justify-center items-center "
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Order Details</h2>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
      {/* نمایش جزئیات کامل سفارش */}
      <OrderSummary order={order} />
      {/* نمایش وضعیت شیپینگ */}
      <ShippingStatus orientation="vertical" />
    </Modal>
  );
};

export default OrderModal;
