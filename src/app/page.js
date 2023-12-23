import Banner from "@/common/Banner";
import Footer from "@/common/Footer";
import Nav from "@/components/Nav";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="bg-gradient rounded-md flex flex-col justify-center  shadow-md md:w-[80vw] w-full mx-auto translate-y-[-70px]">
        <Nav />
        <Products
          arr={[
            { image: "pasta.jpg", name: "Tallarines a la casa", price: 5000 },
            { image: "bolognesa.jpg", name: "Bolognesa", price: 5000 },
            { image: "lasagna.jpg", name: "Lasagna", price: 5000 },
            { image: "pesto.jpg", name: "Tallarines al pesto", price: 5000 },
            { image: "sorrentinos.jpg", name: "Sorrentinos", price: 5000 },
            { image: "ravioles.jpg", name: "Ravioles pampeanos", price: 5000 },
          ]}
          name={"Pastas"}
        />
        <Products
          arr={[
            { image: "pollo.jpg", name: "Pollo horneado", price: 5000 },
            { image: "cordero.jpg", name: "Cordero tradicional", price: 5000 },
            { image: "cerdo.jpg", name: "Rodajero de cerdo", price: 5000 },
            { image: "ternera.jpg", name: "Ternera navideña", price: 5000 },
          ]}
          name={"Carnes"}
        />
        <Products
          arr={[
            {
              image: "ensalada1.jpg",
              name: "Ensalada poke de atún y algas con aguacate",
              price: 5000,
            },
            { image: "ensalada2.jpg", name: "Ensalada Griega", price: 5000 },
            {
              image: "ensalada3.jpg",
              name: "Ensalada de pepinillos a la japonesa",
              price: 5000,
            },
          ]}
          name={"Ensaladas"}
        />
        <Products
          arr={[
            { image: "infantil1.jpg", name: "Patitas de pollo", price: 5000 },
            { image: "infantil2.jpg", name: "Combo feliz", price: 5000 },
          ]}
          name={"Infantil"}
        />
        <Products
          arr={[
            { image: "coca.jpg", name: "Coca", price: 5000 },
            { image: "sprite.jpg", name: "Sprite", price: 5000 },
            { image: "fanta.jpg", name: "Fanta", price: 5000 },
            { image: "agua.jpg", name: "Agua mineral", price: 5000 },
            { image: "corona.jpg", name: "Cerveza Corona", price: 5000 },
            { image: "cerveza.jpg", name: "Cerveza Heineken", price: 5000 },
          ]}
          name={"Bebidas"}
        />
        <Products
          arr={[
            { image: "chianti.jpg", name: "Chianti", price: 5000 },
            { image: "diablo.jpg", name: "Casillero del diablo", price: 5000 },
            { image: "melchor.jpg", name: "Don Melchor", price: 5000 },
          ]}
          name={"Vinos"}
        />
      </div>
      <Footer />
    </>
  );
}
