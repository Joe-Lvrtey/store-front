import Button from "./Button";
import Star from "./Star";
import { subSellersData } from "../data";

export default function SubSellers() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center my-4 gap-3">
        {subSellersData.map((data) => (
          <div key={data.id} className="flex flex-col">
            <div>
              <img src={data.image} alt="cake" className="rounded-md" />
            </div>
            <div>
              <h4 className="text-[#3084A9] font-normal text-base">
                {data.name}
              </h4>
              <h5 className="text-[#1F252C] font-normal text-sm">
                {data.description}
              </h5>
              <h6 className="text-[#1F252C] font-medium text-sm">
                ¢{data.price}
              </h6>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <p className="text-[#1F252C]">4.6</p>
                <Star className={"gap-0"} />
              </div>
              <Button
                className={"py-1 px-1 text-sm"}
                product={{ ...data, quantity: 1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
