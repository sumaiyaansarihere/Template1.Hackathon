import React from 'react';
import TopSellingCard from './TopSellingCard';
import Link from 'next/link';


interface ProductType {
  id: number;
  img: string;
  title: string;
  ratings: number;
  price: number;
}

const productsData: ProductType[] = [
  {
    id: 1,
    img: "/Frame 32 (1).jpg",
    title: "Vertical Stripped Shirt",
    ratings: 4.5,
    price: 212.0,
  },
  {
    id: 2,
    img: "/Frame 33 (1).jpg",
    title: "Courage Graphic T-Shirt",
    ratings: 3.5,
    price: 145.0,
  },
  {
    id: 3,
    img: "/Frame 34 (2).jpg",
    title: "Loose Fit Bermuda Shorts",
    ratings: 4.5,
    price: 80.0,
  },
  {
    id: 4,
    img: "/Frame 38.jpg",
    title: "Faded Skinny Jeans",
    ratings: 4.5,
    price: 210.0,
  },
];

const TopSelling: React.FC = () => {
  return (
    <div className="container pt-16 bg-bisque w-full px-6 py-16">
      <h2 className="font-extrabold text-black text-center text-4xl lg:text-7xl mb-20">
        TOP SELLING
      </h2>
      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
        {productsData.map((item) => (
          <Link key={item.id} href={`/top-selling/${item.id}`}>
            <div>
              <TopSellingCard
                img={item.img}
                title={item.title}
                ratings={item.ratings}
                price={item.price}
              />
            </div>
            
          </Link>
        
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/components/id.tsx">
          <button
            className="px-6 py-2 bg-white text-black text-lg font-semibold rounded-full border border-gray-500 hover:bg-gray-300 transition"
          >
            View All
          </button>
        </Link>
      </div>
     
    </div>
  );
};

export default TopSelling
