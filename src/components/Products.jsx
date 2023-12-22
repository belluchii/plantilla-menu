import Product from "@/common/Product";

export default function Products({ arr, name }) {
  return (
    <>
      <div id={name} className=" translate-y-[-150px] w-4 h-4 "></div>
      <h2 className="text-center mt-5 text-3xl font-semibold ">{name}</h2>
      <div className="h-[1px] w-full my-5 mx-auto bg-gray-400"></div>
      <div className="flex flex-wrap w-full mx-auto justify-center">
        {arr.map((elem) => (
          <Product
            image={elem.image}
            name={elem.name}
            price={elem.price}
          ></Product>
        ))}
      </div>
    </>
  );
}
