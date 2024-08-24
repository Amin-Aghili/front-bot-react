export default function Setting() {
  return (
    <div>
      <div className="px-2 items-center">
        {" "}
        <div className="animate-spin-slow h-5 w-5 mr-3" viewBox="0 0 24 24">
          dsd
        </div>
        Processing...
      </div>
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
    </div>
  );
}
