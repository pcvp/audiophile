import AudiophileLogo from "../../assets/svg/audiophileLogo";
import ShoppgingCart from "../../assets/icons/shoppingCart";

const NavBar = () => {
  return (
    <nav className="container flex justify-between mx-auto py-10 border-b-2 border-white border-opacity-20">
      <AudiophileLogo />
      <ul className="text-white flex gap-10 font-bold">
        <li>Home</li>
        <li>Headphones</li>
        <li>Speakers</li>
        <li>Earphones</li>
      </ul>
      <ShoppgingCart />
    </nav>
  );
};

export default NavBar;
