import { FaShopify, FaShippingFast, FaCog, FaSearch } from "react-icons/fa";

const buttonStyle = "text-cyan-900 text-2xl bg-transparent py-4 px-6";
const activeStyle = "border-b-2 border-b-blue-950";

export default function Navbar({ setPage, activePage, cartItemCount }) {
  const navItems = [
    { name: "setting", icon: FaCog },
    { name: "orders", icon: FaShippingFast },
    { name: "home", icon: FaSearch },
    { name: "cart", icon: FaShopify, hasBadge: true },
  ];

  return (
    <nav className="bg-gray-50 border-t border-white ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          {navItems.map((item, i) => (
            <button
              key={i}
              className={`${buttonStyle} ${
                activePage === item.name ? activeStyle : ""
              } relative`}
              onClick={() => setPage(item.name)}
            >
              <item.icon />
              {item.hasBadge && cartItemCount > 0 && (
                <span className="animate-bounce absolute top-1 right-[-1] bg-red-500 text-white rounded-full px-2 text-sm">
                  {cartItemCount}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
