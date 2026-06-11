import { FaArrowLeftLong, FaArrowRight, FaCediSign } from "react-icons/fa6";
import Star from "./Star";
import Button from "./Button";
import { promotionData } from "../data";
import { useState, useRef, useEffect } from "react";

export default function Promotions() {
  // useRef hook ---> allows to store mutable values that does not cause re-render when updated

  const interval = useRef<any>();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    const timerDate = new Date("February 27 2027 00:00:00").getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = timerDate - now;

      const remainingDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const remainingHours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const remainingMinutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        setDays(remainingDays);
        setHours(remainingHours);
        setMinutes(remainingMinutes);
        setSeconds(remainingSeconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="w-[95%] my-0 mx-auto mb-5">
      <div className="flex justify-between my-4">
        <div>
          <h1 className="text-[#1F252C] font-bold text-lg">
            Hot<span className="text-[#3084A9] ml-1">Promotions</span>
          </h1>
        </div>
        <div className="flex items-center gap-1">
          <FaArrowLeftLong className="bg-white text-slate-500 rounded-full shadow-md p-1 w-5 h-5 cursor-pointer" />
          <FaArrowRight className="bg-[#3084A9] text-white rounded-full p-1 shadow-md w-5 h-5 cursor-pointer" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promotionData.map((product) => (
            <div key={product.id} className="relative w-full">
              {/* Image */}
              <img
                src={product.image}
                alt="cake image"
                className="w-full aspect-[3/4] object-cover rounded-sm"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Countdown Timer */}
                <div className="grid grid-cols-4 gap-3 w-full max-w-xs lg:max-w-sm">
                  <div className="bg-white p-2 rounded-md flex flex-col items-center text-center">
                    <h4 className="text-sm font-semibold text-[#3084A9]">
                      Days
                    </h4>
                    <p className="text-xl text-black">{days}</p>
                  </div>

                  <div className="bg-white p-2 rounded-md flex flex-col items-center text-center">
                    <h4 className="text-sm font-semibold text-[#3084A9]">
                      Hours
                    </h4>
                    <p className="text-xl text-black">{hours}</p>
                  </div>

                  <div className="bg-white p-2 rounded-md flex flex-col items-center text-center">
                    <h4 className="text-sm font-semibold text-[#3084A9]">
                      Minutes
                    </h4>
                    <p className="text-xl text-black">{minutes}</p>
                  </div>

                  <div className="bg-white p-2 rounded-md flex flex-col items-center text-center">
                    <h4 className="text-sm font-semibold text-[#3084A9]">
                      Seconds
                    </h4>
                    <p className="text-xl text-black">{seconds}</p>
                  </div>
                </div>

                {/* Product Card */}
                <div className="w-full max-w-xs lg:max-w-sm mt-4 bg-white rounded-md shadow-md py-3 px-3">
                  <h5 className="text-lg font-semibold">{product.name}</h5>

                  {/* Rating */}
                  <div className="flex gap-1 items-center mt-1">
                    <Star className={""} />
                    <span className="text-sm">4.6</span>
                  </div>

                  {/* Price + Button */}
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex gap-2 items-center">
                      <h5 className="flex items-center font-semibold">
                        <FaCediSign />
                        {product.price}
                      </h5>

                      <h6 className="flex items-center text-slate-300 text-sm line-through">
                        <FaCediSign />
                        500
                      </h6>
                    </div>

                    <Button
                      className=""
                      product={{ ...product, quantity: 1 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
