import React from 'react'
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import {NavigationMenuDemo} from "./navigationMenu";

import { SheetSide } from './sheet';
// import { NavigationMenu } from '@radix-ui/react-navigation-menu';

const Header = () => {
    return (
        <header className='w-full h-[60px] bg-white flex justify-between items-center'>
            <div className='flex justify-center items-center'>
                <SheetSide/>
                <h1 className='text-xl sm:text-3xl pl-2 font-extrabold '>SHOP.CO</h1>
            </div>
            {/* Navbar */}
            <ul className='hidden md:block'>
                <li className='space-x-14 flex items-center text-sm'>
                    <Link href={""}><NavigationMenuDemo/></Link>
                    <Link href={""}>On Sale</Link>
                    <Link href={""}>New Arrivals</Link>
                    <Link href={""}>Brands</Link>
                </li>
            </ul>
            {/* Search input */}
              <div className='hidden md:block'>
                <div className='flex justify-start items-center  w-[600px] h-[40px] rounded-[62px] bg-[#f0f0f0] '> 
                    <IoSearchOutline className="text-xl mr-3 ml-3" />
                    <input  placeholder='Search for products...' className="w-full h-full outline-none bg-[#f0f0f0] rounded-[62px]"></input>
                </div>
                </div>
          
            {/* cart */}

            <div className='flex items-center mr-32  space-x-8 '>
            <IoSearchOutline className="text-xl mr-3 ml-3 md:hidden" />
            <FiShoppingCart className="text-xl"/>
            <VscAccount className="text-xl" />
            </div>
          



        </header>
    );
}

export default Header
