import { useState, useEffect, useRef } from "react";
import { FaTimes, FaSearch } from "react-icons/fa";
import Detail from "../components/Detail";
import { fetchData } from "../services/FetchData";
import Loader from "../ui/Loader";
import { formatNumber } from "../utils/formatter";
import SocialMediaFeed from "../components/SocialMediaFeed";
import Urls from "../components/Urls";

export default function Home({ addToCart }) {
  const [data, setData] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const add = () => {
    addToCart(data);
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      clearSearch();
    }, 2000);
  };

  const clearSearch = () => {
    setSearchText("");
    setData(null);
    setError(null);
  };

  useEffect(() => {
    if (searchText) {
      const Data = async () => {
        setLoading(true);
        setError(null);

        try {
          const result = await fetchData(searchText);
          setData(result);
        } catch (error) {
          setError(error.message);
        }

        setLoading(false);
      };

      Data();
    }
  }, [searchText]);

  // Blur input when data is loaded
  useEffect(() => {
    if (data && inputRef.current) {
      inputRef.current.blur();
    }
  }, [data]);

  return (
    <div className="">
      <div className="fixed bottom-16 left-4 right-4">
        <div className="relative">
          <input
            type="text"
            value={searchText}
            onChange={handleInputChange}
            placeholder="... لینک خرید ترندیول رو وارد کن"
            className="text-right border h-14  border-gray-300 rounded-lg py-2 px-4 w-full pl-2 pr-8 focus:border-gray-400 focus:outline-none bg-white"
            ref={inputRef}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          {searchText && (
            <button
              onClick={clearSearch}
              className="p-2 absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              <FaTimes />
            </button>
          )}
        </div>
      </div>

      {!data && !loading && <Urls />}

      <div className="relative">
        {loading && (
          <div className="flex justify-center items-center mt-2">
            <Loader />
          </div>
        )}
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </div>

      {/* Content display logic */}
      {data && !error && (
        <div className="text-center">
          <Detail data={data} />
          {!showConfirmation && (
            <button
              onClick={add}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              اضافه کردن به سبد
            </button>
          )}
        </div>
      )}

      {showConfirmation && data && (
        <div className="bg-green-500 text-white py-2 px-4 rounded shadow-lg mt-4">
          <div className="flex items-center">
            <img src={data.imageUrl} alt="Product" className="w-12 h-12 mr-4" />
            <div>
              <p className="font-bold"> به سبد اضافه شد</p>
              <p className="text-sm">{formatNumber(data.priceIr, 0)} </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
