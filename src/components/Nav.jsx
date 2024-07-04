import React, { useState } from "react";
import { xSymbol, hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenuToggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full max-lg:bg-blue-50">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition duration-300 font-semibold">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          {!isOpenMenu ? (
            <img
              src={hamburger}
              alt="hamburger icon"
              width={25}
              height={25}
              onClick={handleMenuToggle}
              className="cursor-pointer"
            />
          ) : (
            <img
              src={xSymbol}
              alt="hamburger icon"
              width={25}
              height={25}
              onClick={handleMenuToggle}
              className="cursor-pointer"
            />
          )}
        </div>
      </nav>

      <div
        className={`max-lg:flex flex-col items-center absolute top-full left-0 w-full bg-blue-50 shadow-xl transition-all duration-300 ${
          isOpenMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}>
        <ul className="flex flex-col items-center gap-4 py-4 ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition duration-300 font-semibold">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
