import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./SpinWheel.css"; // شامل استایل‌های لازم

const prizes = [
  "10% Off",
  "20% Off",
  "30% Off",
  "50% Off",
  "Free Shipping",
  "No Prize",
];

export default function SpinWheel() {
  const [spinning, setSpinning] = useState(false);
  const [prize, setPrize] = useState("");
  const [canSpin, setCanSpin] = useState(true);

  useEffect(() => {
    const lastSpinDate = localStorage.getItem("lastSpinDate");
    const today = new Date().toDateString();

    if (lastSpinDate === today) {
      setCanSpin(false);
    } else {
      setCanSpin(true);
    }
  }, []);

  const { transform } = useSpring({
    to: {
      transform: spinning
        ? `rotate(${360 * 5 + Math.random() * 360}deg)`
        : "rotate(0deg)",
    },
    config: { duration: 3000 },
    reset: true,
    onRest: () => {
      if (spinning) {
        const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
        setPrize(randomPrize);
        setSpinning(false);
        localStorage.setItem("lastSpinDate", new Date().toDateString());
        // Apply the discount here, e.g., by calling an API or updating state
      }
    },
  });

  const spin = () => {
    if (canSpin) {
      setSpinning(true);
      setCanSpin(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Spin the Wheel!</h1>
      <div className="relative">
        <animated.div
          style={{
            transform,
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "conic-gradient(#ff0000 0% 20%, #ffff00 20% 40%, #00ff00 40% 60%, #0000ff 60% 80%, #ff0000 80% 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            border: "10px solid #000",
          }}
          className="wheel"
        >
          <div className="absolute w-full h-full flex items-center justify-center">
            <div className="w-3/4 h-3/4 flex items-center justify-center text-center text-white font-bold">
              {prizes.map((item, index) => (
                <div
                  key={index}
                  className="wheel-section"
                  style={{
                    transform: `rotate(${index * (360 / prizes.length)}deg)`,
                    position: "absolute",
                    width: "50%",
                    textAlign: "center",
                    padding: "10px",
                    transformOrigin: "100% 50%",
                    color: "black",
                    background: "white",
                    borderRadius: "5px",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </animated.div>
        <button
          onClick={spin}
          disabled={!canSpin}
          className={`bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 shadow-lg ${
            !canSpin ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {canSpin ? "Spin Now!" : "Already Spun Today"}
        </button>
        {prize && (
          <p className="text-xl mt-4">Congratulations! You won: {prize}</p>
        )}
      </div>
    </div>
  );
}
