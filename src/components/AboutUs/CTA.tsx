import { FaAngleRight } from "react-icons/fa6";
import cake11 from "../../images/cake11.jfif";
import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <div
      className="relative h-[357px] md:h-[500px] w-full mb-10 bg-cover bg-center flex items-start"
      style={{ backgroundImage: `url(${cake11})` }}
    >

      <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 text-sm md:text-base">
        <div className="flex items-center space-x-1">
          <Link to="/" className="text-[#8B96A5] font-normal hover:underline">
            Home
          </Link>
          <FaAngleRight className="text-[#8B96A5]" />
        </div>
        <div className="flex items-center space-x-1">
          <span className="capitalize text-[#8B96A5] font-normal">
            About Us
          </span>
          <FaAngleRight className="text-[#8B96A5]" />
        </div>
      </div>

      <h3 className="hidden md:block absolute right-16 top-1/2 w-[230px] transform -translate-y-1/2 text-[#1F252C] font-medium tracking-tight text-lg md:text-xl">
        Our conviction lies in the emotional impact of food
      </h3>
    </div>
  );
}
