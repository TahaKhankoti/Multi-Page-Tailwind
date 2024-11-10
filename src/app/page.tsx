
import ChocolateCard from '../Components/ChocolateCard';
import HeroSection from '../Components/HeroSection';

export default function Home() {
  const ChocolateBar = [
    {
      category: "Chocolate Bar",
      title: "PLAIN SIGNATURE",
      image: "/assets/Bar/Plain Signature.webp",
      price: "RS 599",
    },
    {
      category: "Chocolate Bar",
      title: "ROASTED ALMONDS",
      image: "/assets/Bar/Roasted Almonds.webp",
      price: "RS 599",
    },
    {
      category: "Chocolate Bar",
      title: "ROASTED PEANUTS",
      image: "/assets/Bar/Roasted Peanuts.webp",
      price: "RS 599",
    },
    {
      category: "Chocolate Bar",
      title: "FRUIT & NUT",
      image: "/assets/Bar/Fruit & Nut.webp",
      price: "RS 599",
    },
    {
      category: "Chocolate Bar",
      title: "LOVE CHARMS DARK",
      image: "/assets/Bar/Love Charms.webp",
      price: "RS 599",
    },
    {
      category: "Chocolate Bar",
      title: "LOVE CHARMS WHITE",
      image: "/assets/Bar/Love Charms White.webp",
      price: "RS 599",
    },
    {
      category: "Chocolate Bar",
      title: "BLUE STAR",
      image: "/assets/Bar/Blue Star.webp",
      price: "RS 599",
    },
    {
      category: "Chocolate Bar",
      title: "PINK STAR",
      image: "/assets/Bar/Pink Star.webp",
      price: "RS 599",
    },
  ];

  return (
    <>
      <HeroSection imageSrc="/assets/Bar/hero.webp" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {ChocolateBar.map((item, index) => (
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
