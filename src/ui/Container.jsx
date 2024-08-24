const Container = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {children}
      </div>
    </div>
  );
};

export default Container;
