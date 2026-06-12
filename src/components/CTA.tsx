// import { Link } from "react-router-dom";
import cakeBg from "../images/cake-background.jfif";

export default function CTA() {
  return (
    <div
      className="relative bg-cover bg-center h-[400px] md:max-h-[600px] lg:h-[700px] w-full flex items-center justify-center"
      style={{ backgroundImage: `url(${cakeBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />

      <div className="relative z-10 flex items-center justify-center px-4">
        <h1 className="text-white mix-blend-plus-darker text-3xl font-extrabold font-[roboto] w-[300px] text-center tracking-tighter mb-2">
          Ghana's Most Iconic Cake For Your Birthday
        </h1>
        {/* <Link
          to={"/"}
          className="bg-[#3084A9] hover:bg-[#256d8a] text-white capitalize rounded-md py-2 px-4 w-fit my-0 mx-auto block"
        >
          Explore
        </Link> */}
      </div>
    </div>
  );
}
