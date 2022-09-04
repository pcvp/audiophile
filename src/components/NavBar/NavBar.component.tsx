import AudiophileLogo from "../../assets/svg/audiophileLogo";
import { useState } from "react";
import classNames from "classnames";
import { List, ShoppingCart, X } from "phosphor-react";
import { Link, Outlet } from "react-router-dom";
import { useNavbarItemsQuery } from "./../../graphql/generated";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { data } = useNavbarItemsQuery();

  function handleNav() {
    setIsNavOpen((prev) => !prev);
  }
  return (
    <>
      <div className="navbar-container bg-black">
        <nav
          className={classNames(
            "container flex justify-between mx-auto py-10 px-6 border-b-2 border-white border-opacity-20 lg:px-0",
            {
              "w-screen h-screen lg:w-auto lg:h-auto": isNavOpen,
            }
          )}
        >
          <div
            className={classNames(
              "flex items-start flex-grow md:justify-start lg:justify-between",
              {
                "justify-between": !isNavOpen,
                "flex-col lg:flex-row lg:items-center": isNavOpen,
              }
            )}
          >
            <List
              size={25}
              className={classNames("text-white lg:hidden", {
                hidden: isNavOpen,
              })}
              onClick={handleNav}
            />
            <X
              size={25}
              onClick={handleNav}
              className={classNames("text-white", {
                hidden: !isNavOpen,
                "lg:hidden": isNavOpen,
              })}
            />
            <ul
              className={classNames(
                "text-white gap-10 font-bold lg:flex lg:order-2",
                {
                  "flex flex-col mt-10 lg:flex-row lg:mt-0": isNavOpen,
                  hidden: !isNavOpen,
                }
              )}
            >
              {data?.navbarItems.map((item) => {
                return (
                  <li key={item.id}>
                    <Link to={item.redirectTo ?? ""} onClick={handleNav}>
                      {item.displayText}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <AudiophileLogo
              className={classNames("md:ml-10 lg:ml-0 lg:order-1", {
                "hidden lg:block": isNavOpen,
              })}
            />
          </div>
          <div
            className={classNames(
              "flex flex-grow justify-end items-start lg:order-3",
              {
                "hidden lg:flex": isNavOpen,
              }
            )}
          >
            <ShoppingCart size={25} className="text-white" />
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
