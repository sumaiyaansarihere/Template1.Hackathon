import Image from "next/image";
import Announcement from "@/components/announcement";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Fonts from "@/components/fonts";
import NewArrivals from "@/components/NewArrivals";
import TopSelling from "@/components/TopSelling";
import Dress from "@/components/dress";
import CustomerCarousel from "@/components/Customer";
import Footer from "@/components/Footer";
// import Stayudpate from "@components/update";
import Stayudpate from "@/components/update";
// import Product_Detail from "@/components/id";




export default function Home() {
  return (
     <div>
    <Announcement />
    <Header/>
    <Hero/>
    <Fonts/>
    <NewArrivals/>
    <TopSelling/>
    <Dress/>
    {/* <CarouselSpacing/> */}
    <CustomerCarousel/>
    <Footer/>
    {/* <Product_Detail/> */}
    {/* <Stayudpate/> */}
   
    </div>
  );
}
