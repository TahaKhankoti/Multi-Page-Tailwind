
import Image from "next/image";
import Link from "next/link";

interface ChocolateCardProps {
  category: string;
  title: string;
  image: string;
  price: string;
}

export default function ChocolateCard({ category, title, image, price }: ChocolateCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <a className="block relative h-64 rounded overflow-hidden">
        <Image
          alt={title}
          className="object-cover object-center w-full h-full block"
          src={image}
          width={1000}
          height={1000}
        />
      </a>
      <div className="p-6">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
        <p className="mt-1 text-gray-900 font-bold text-xl flex items-center">
          FROM {price}
          <Link href="#" className="ml-2 text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3l3 3-3 3" />
            </svg>
          </Link>
        </p>
      </div>
    </div>
  );
}
