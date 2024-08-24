const Card = ({ children }) => {
  return (
    <div className="bg-gray-600/15 backdrop-blur-sm rounded-lg shadow-md shadow-slate-500 p-2 my-4 border border-white/30">
      {children}
    </div>
  );
};

export default Card;
