import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface PropsType {
  img: string;
  title: string;
  desc?: string;
  ratings?: number; 
  price: number;
}

const TopSellingCard: React.FC<PropsType> = ({
  img,
  title,
  desc = "",
  ratings = 0,
  price,
}) => {
 
  const generateRatings = (rating: number) => {
    return (
      <div className="flex gap-1 text-[20px] text-[#FF9529]">
        {Array.from({ length: 5 }).map((_, index) =>
          index < rating ? (
            <AiFillStar key={index} />
          ) : (
            <AiOutlineStar key={index} />
          )
        )}
      </div>
    );
  };

  // Formats price into a currency format
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
      amount
    );

  return (
    
    <div className="product-card px-4 ml-24 w-full rounded-xl max-w-[400px]">
      {/* Image with Next.js Image component */}
      <Image
        className="w-full h-auto"
        src={img}
        width={200}
        height={300}
        alt={title}
        layout="intrinsic"
      />
      <div className="space-y-2 py-2 ">
        {/* Title */}
        <h2 className="text-accent text-black font-bold uppercase">{title}</h2>
        {/* Description */}
        <p className="text-gray-500 max-w-[150px] truncate">{desc}</p>
        {/* Ratings */}
        <div>{generateRatings(ratings)}</div>
        {/* Price and Discount */}
        <div className="font-bold flex gap-4">
          {formatCurrency(price)}
          {/* Assuming a discount is applied */}
          {/* <del className="text-gray-500 font-normal">
            {formatCurrency(price + 50)}
          </del> */}
        </div>
      </div>
    </div>
  
  );
};

export default TopSellingCard;
