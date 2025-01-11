import React from 'react';
import NewArrivalsCard from './NewArrivalsCard';

// Define TypeScript type for product data
interface ProductType {
  img: string;
  title: string;
  ratings: number;
  price: number;
  id: number; // Ensure 'id' is part of the type
}

const productsData: ProductType[] = [
  {
    img: '/Frame 32.jpg',
    title: 'Tea Shirt with tape details',
    ratings: 4.5,
    price: 120.0,
    id: 1,
  },
  {
    img: '/Frame 33.jpg',
    title: 'Skinny Fit Jeans',
    ratings: 3.5,
    price: 240.0,
    id: 2,
  },
  {
    img: '/Frame 34.jpg',
    title: 'Checkered Shirt',
    ratings: 4.5,
    price: 180.0,
    id: 3,
  },
  {
    img: '/Frame 38.png',
    title: 'Sleeve Stripped T-Shirt',
    ratings: 4.5,
    price: 130.0,
    id: 4,
  },
];

const NewArrivals: React.FC = () => {
  return (
    <div className="container pt-16 bg-bisque w-full px-6 py-16">
              <h2 className="font-extrabold text-black text-center text-4xl lg:text-7xl mb-20">
        NEW ARRIVALS
      </h2>
      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
        {productsData.map((item) => (
          <NewArrivalsCard
            key={item.id}
            img={item.img}
            title={item.title}
            ratings={item.ratings}
            price={item.price}
            id={item.id} // Pass 'id' here
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="px-6 py-2 bg-white text-black text-lg font-semibold rounded-full border border-gray-500 hover:bg-gray-300 transition"
        >
          View All
        </button>
      </div>
      <div className="border-t border-gray-500 w-full mt-6"></div>
    </div>
  );
};

export default NewArrivals;
