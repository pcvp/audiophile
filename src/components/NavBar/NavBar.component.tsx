import AudiophileLogo from "../../assets/svg/audiophileLogo";
import ShoppgingCartIcon from "../../assets/icons/shoppingCart";
import MenuHamburgerIcon from "../../assets/icons/menuHamburger";
import { useState } from "react";
import classNames from "classnames";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleNav() {
    setIsNavOpen((prev) => !prev);
  }
  return (
    <nav
      className={classNames(
        "container flex justify-between mx-auto py-10 px-6 border-b-2 border-white border-opacity-20 lg:px-0",
        {
          "w-screen h-screen": isNavOpen,
        }
      )}
    >
      <div className="flex items-start justify-between flex-grow md:justify-start lg:justify-between">
        <MenuHamburgerIcon className="lg:hidden" onClick={handleNav} />
        <ul className="hidden text-white gap-10 font-bold lg:flex lg:order-2">
          <li>Home</li>
          <li>Headphones</li>
          <li>Speakers</li>
          <li>Earphones</li>
        </ul>

        <AudiophileLogo className="md:ml-10 lg:ml-0 lg:order-1" />
      </div>
      <div className="flex flex-grow justify-end items-start lg:order-3">
        <ShoppgingCartIcon />
      </div>
    </nav>
  );
};

export default NavBar;
