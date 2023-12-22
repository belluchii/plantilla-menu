import Image from "next/image";

export default function Circle({ image, name }) {
  return (
    <div className="flex mx-auto  w-[100px]  flex-col items-center  ">
      <div
        className="shadow-lg bg-gray-150 w-[80px] h-[80px] rounded-full flex justify-center"
        onClick={() => {
          const targetElement = document.getElementById(name);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <Image src={image} alt={name} width={50} height={50} />
      </div>
      <p className="text-center">{name}</p>
    </div>
  );
}
