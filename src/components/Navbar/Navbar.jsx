// import React from 'react'
import { FaCaretDown } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { GiBookshelf } from "react-icons/gi";

import DarkMode from './DarkMode';

const Menu = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'Best Sellers',
    link: '/services',
  },
];

const DropdownLinks = [
  {
    name: 'Trending Books',
    link: '/#',
  },
  {
    name: 'Best Selling',
    link: '/#',
  },
  {
    name: 'Authors',
    link: '/#',
  },
];
const Navbar = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex items-center justify-between">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-4 text-blue-500">
                <GiBookshelf size={30} className='text-blue-500'/>
                Books
              </a>
            </div>
            {/* menu section */}

            <div className=" flex items-center justify-between gap-4 font-semibold">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-primary duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
                {/* dropdown section */}
                <li className="group relative cursor-pointer">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            href={data.link}
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/10"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
              <button
                onClick={handleOrderPopup}
                className=" bg-gradient-to-r from-primary to to-secondary px-4 py-1 rounded-full flex items-center gap-3"
              >
                Order
                <FaCartShopping className="text-xl  drop-shadow-sm cursor-pointer hover:scale-175 duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
