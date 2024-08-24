export default function DiscountCard({ brand, discount }) {
  return (
    <div className="bg-white shadow p-4 rounded m-2 text-center">
      <h3 className="text-lg font-bold">{brand}</h3>
      <p>تخفیف: {discount}%</p>
    </div>
  );
}
