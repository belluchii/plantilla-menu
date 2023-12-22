export default function Banner() {
  return (
    <>
      <div
        className="w-full h-[350px]  bg-fixed  bg-cover bg-origin-content  absolute"
        style={{ backgroundImage: `url(banner.jpg)` }}
      >
        <div className="bg-black bg-opacity-20 absolute backdrop-blur-sm w-full h-full"></div>
      </div>
      <div className="w-full h-[350px]"></div>
    </>
  );
}
