
import Image from "next/image";

interface HeroSectionProps {
  imageSrc: string;
}

export default function HeroSection({ imageSrc }: HeroSectionProps) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-6 py-6 items-center justify-center flex-col">
        <Image
          className="lg:w-full md:w-4/6 w-5/6 object-cover object-center rounded"
          alt="hero"
          src={imageSrc}
          width={2100}
          height={2100}
        />
      </div>
    </section>
  );
}
