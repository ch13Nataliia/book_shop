// import React from 'react'

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from 'react-icons/fa';

const FooterLinks = [
  {
    id: 1,
    title: 'Home',
    link: '/#',
  },
  {
    id: 2,
    title: 'About',
    link: '/#about',
  },
  {
    id: 3,
    title: 'Contact',
    link: '/#contact',
  },
  {
    id: 4,
    title: 'Blog',
    link: '/#blog',
  },
];
const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-950">
        <div className="container">
          <div className="grid md:grid-cols-3 py-5">
            {/* company details */}
            <div className="flex flex-col py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                Book Store
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                ipsum velit expedita cupiditate commodi aut dolorem saepe. Unde
                facere tenetur deleniti beatae dicta id minus debitis illum,
                sint, iste harum.
              </p>
              <br />
              {/* social links */}

              <div className="flex items-center gap-2">
                <FaLocationArrow />
                <p>UK, 10 Street Drive</p>
              </div>
              <div className="flex flex-row gap-2 mt-3">
                <FaMobileAlt />
                <p>+12345678910</p>
              </div>
              <div></div>
              <div className="flex flex-row gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="text-3xl">
                  <FaFacebook />
                </a>
                <a href="#" className="text-3xl">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            {/* links section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl font-bold sm:text-left text-justify mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((data) => (
                      <div key={data.id}>
                        <li
                          
                          className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                        >
                          <span>&#11162;</span>
                          <span>{data.title}</span>
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl font-bold sm:text-left text-justify mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((data) => (
                      <div key={data.id}>
                        <li
                          
                          className="cutsor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                        >
                          <span>&#11162;</span>
                          <span>{data.title}</span>
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl font-bold sm:text-left text-justify mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((data) => (
                      <div key={data.id}>
                        <li
                          
                          className="cutsor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                        >
                          <span>&#11162;</span>
                          <span>{data.title}</span>
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>


            </div>
          </div>
          
              {/* copyright section */}
              <div>
                <div className="border-t-2 border-gray-300/50">
                  <p className="text-center py-10">
                    Copyright &copy; 2022. All rights reserved by TCJ
                  </p>
                </div>
              </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
