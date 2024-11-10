
import ChocolateCard from '../../Components/ChocolateCard';
import HeroSection from '../../Components/HeroSection';

export default function GiftBasket() {
  const GiftBasket = [
    {
      category: "Gift Basket",
      title: "ANNIVERSARY BASKET",
      image: "/assets/Gift Basket/anniversary.webp",
      price: "RS 4536",
    },
    {
      category: "Gift Basket",
      title: "BIRTHDAY BASKET",
      image: "/assets/Gift Basket/birthday.webp",
      price: "RS 4536",
    },
    {
      category: "Gift Basket",
      title: "ARIEL ANNIVERSARY BASKET",
      image: "/assets/Gift Basket/ariel anniversary.webp",
      price: "RS 2592",
    },
    {
      category: "Gift Basket",
      title: "ARIEL BIRTHDAY BASKET",
      image: "/assets/Gift Basket/ariel birthday.webp",
      price: "RS 2592",
    },
    {
      category: "Gift Basket",
      title: "BLOSSOM PACKAGE 2",
      image: "/assets/Gift Basket/blossom.webp",
      price: "RS 6165",
    },
    {
      category: "Gift Basket",
      title: "ROSE",
      image: "/assets/Gift Basket/rose.webp",
      price: "RS 6349",
    },
    {
      category: "Gift Basket",
      title: "GRACIOUS",
      image: "/assets/Gift Basket/gracious.webp",
      price: "RS 7186",
    },
    {
      category: "Gift Basket",
      title: "CONGRATULATION",
      image: "/assets/Gift Basket/congratulations.webp",
      price: "RS 7134",
    },
  ];

  return (
    <>
      <HeroSection imageSrc="/assets/Gift Basket/hero.webp" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {GiftBasket.map((item, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <ChocolateCard
                  category={item.category}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
