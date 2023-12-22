import Image from "next/image";

export default function Product({ name, image, price }) {
  return (
    <>
      <div className="w-[500px] m-5 p-3 shadow-md bg-white bg-opacity-20 rounded-md">
        <h2 className="font-semibold">{name}</h2>
        <div className=" flex justify-center ">
          <div className="w-3/6 flex  flex-col justify-between">
            <p className="font-light my-2 leading-snug">
              Lorem ipsum dolor sit amet
            </p>
            <p className="font-semibold  border border-1 border-black rounded w-fit p-1">
              ${price}
            </p>
          </div>
          <div className="w-1/6"></div>

          <div
            style={{ backgroundImage: `url(${image})` }}
            className="w-2/6 h-[110px] rounded-md bg-center  bg-cover bg-origin-content"
          ></div>
        </div>
      </div>
    </>
  );
}
