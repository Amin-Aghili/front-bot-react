import { formatNumber } from "../utils/formatter";

export default function Detail({ data }) {
  return (
    <div className="text-center">
      <img src={data.imageUrl} alt="Product" className="w-full mx-auto" />
      <div className="border rounded-lg px-4 py-2 m-6">
        <div className="flex items-center justify-between">
          <p>تومان</p>
          <p className="text-lg mt-2">{formatNumber(data.priceIr, 0)}</p>
        </div>

        <div className="flex items-center justify-between">
          <p>لیر</p>
          <p className="text-lg mt-2">{formatNumber(data.price, 2)}</p>
        </div>
        {data.size && (
          <div className="flex items-center justify-between">
            <p>سایز</p>
            <p className="text-lg mt-2">{data.size}</p>
          </div>
        )}
        {data.color && (
          <div className="flex items-center justify-between">
            <p>رنگ</p>
            <p className="text-lg mt-2">{data.color}</p>
          </div>
        )}
      </div>
    </div>
  );
}
