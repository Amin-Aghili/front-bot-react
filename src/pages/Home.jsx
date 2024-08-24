import { useState, useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import Detail from "../components/Detail";
import BannerSlider from "../components/Slider"; // Import the BannerSlider component
import { fetchData } from "../services/FetchData";
import Loader from "../ui/Loader";
import { formatNumber } from "../utils/formatter";

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

  // Banner data (this should be dynamic or fetched from an API in a real application)
  const banners = [
    {
      href: "https://www.trendyol.com/defacto-x-b37",
      src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Defacto_202301270049.jpg",
    },
    {
      href: "https://www.trendyol.com/koton-x-b38",
      src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Koton_202301270326.png",
    },
    {
      href: "https://www.trendyol.com/philips-x-b577",
      src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Philips_202301271558.jpg",
    },
    {
      href: "https://www.trendyol.com/stradivarius-x-b147",
      src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/4/26/Stradivarius_202304260936.png",
    },
    {
      href: "https://www.trendyol.com/karaca-x-b325",
      src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/2/13/Karaca_202302131917.jpg",
    },
    {
      href: "https://www.trendyol.com/magaza/penti-m-4442?sst=0",
      src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/3/7/Penti_202303072238.jpg",
    },
    {
      href: "https://www.trendyol.com/pull-bear-x-b592",
      src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/3/31/Topstory_202303311553.jpg",
    },
    {
      href: "https://www.trendyol.com/pierre-cardin-x-b122",
      src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Pierrecardin_202301271558.jpg",
    },
    {
      href: "https://www.trendyol.com/magaza/x-m-105292",
      src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/7/17/MadmextLogo200200_202307172142.jpg",
    },
    {
      href: "https://www.trendyol.com/bershka-x-b486",
      src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/4/26/Bershka_202304260943.png",
    },
    {
      href: "https://www.trendyol.com/trend-alacati-stili-x-b102767",
      src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/28/TrendalacAtistili_202301280121.jpg",
    },
    {
      href: "https://www.trendyol.com/xiaomi-x-b101939",
      src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/28/Xiaomi_202301280236.jpg",
    },
    {
      href: "https://www.trendyol.com/adidas-x-b33",
      src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/26/Adidas_202301262144.png",
    },
    {
      href: "https://www.trendyol.com/mango-x-b41",
      src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Mango_202301270525.png",
    },
    {
      href: "https://www.trendyol.com/magaza/x-m-63",
      src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Mavi_202301270522.png",
    },
    {
      href: "https://www.trendyol.com/apple-x-b101470",
      src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/26/Apple_202301262111.jpg",
    },
    {
      href: "https://www.trendyol.com/puma-x-b160",
      src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Puma_202301271558.jpg",
    },
    {
      href: "https://www.trendyol.com/nike-x-b44",
      src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Nike_202301271540.jpg",
    },
    {
      href: "https://www.trendyol.com/magaza/l-oreal-turkiye-m-107819",
      src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/LOreal_202301270444.png",
    },
    {
      href: "https://www.trendyol.com/kiwi-x-b108839",
      src: "https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Kiwi_202301270326.png",
    },
  ];

  return (
    <div className="">
      <div className="fixed bottom-16 left-4 right-4">
        <div className="relative">
          <input
            type="text"
            value={searchText}
            onChange={handleInputChange}
            placeholder="... لینک خرید ترندیول رو وارد کن"
            className="text-right border h-14  border-gray-300 rounded-lg py-2 px-4 w-full pl-2 pr-8 focus:border-gray-400 focus:outline-none transition-colors"
            ref={inputRef}
          />

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

      {/* Show BannerSlider only when there is no search data */}
      {!data && !loading && <BannerSlider banners={banners} />}

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
