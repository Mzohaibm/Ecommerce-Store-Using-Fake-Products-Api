import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const navigations = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },

  ];
  return (
    <header className="text-gray-600 body-font shadow-lg  w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className=" text-3xl">Ecommerce</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex mr-auto  flex-wrap items-center text-base justify-center">
          {
            navigations.map((item) => {
              return (
                <Link className="mr-5 hover:text-gray-900" to={item.path} >
                  {item.name}
                </Link>
              )
            })
          }
        </nav>
        <Link to={`cart`} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
          Cart
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Header;
