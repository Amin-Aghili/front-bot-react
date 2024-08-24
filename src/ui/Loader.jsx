// function Loader() {
//   return (
//     <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
//       <div className="loader text-center">
//         <p>یکم واسا</p>
//         <p>این صفحه رو ترک نکن یه لحظه</p>
//       </div>
//     </div>
//   );
// }

// export default Loader;
const Loader = () => {
  return (
    <div className="flex  justify-center pt-4 min-h-screen">
      <div className="w-16 h-16 border-4 border-t-transparent border-gray-700 rounded-full animate-spin-slow"></div>
    </div>
  );
};

export default Loader;
