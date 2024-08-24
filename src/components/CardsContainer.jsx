import DiscountCard from "./DiscountCard";

const discounts = [
  { brand: "Brand A", discount: 20 },
  { brand: "Brand B", discount: 30 },
  { brand: "Brand C", discount: 50 },
];

export default function CardsContainer() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {discounts.map((item, index) => (
        <DiscountCard key={index} brand={item.brand} discount={item.discount} />
      ))}
    </div>
  );
}
