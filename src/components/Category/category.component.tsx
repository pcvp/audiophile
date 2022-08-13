import { CaretRight } from "phosphor-react";
import markIIHeadphoneCategory from "./../../assets/images/markIIHeadphonesCategory.png";
import speakersCategory from "./../../assets/images/speakersCategory.png";
import earphonesCategory from "./../../assets/images/earphonesCategory.png";

const Category = () => {
  return (
    <>
      <section className="bg-gray-200 rounded-lg my-10 mx-6 flex flex-col items-center mt-28">
        <img
          src={markIIHeadphoneCategory}
          className="-mt-20 -mb-5 max-w-[200px]"
        />
        <p className="font-bold uppercase text-base text-center mb-4">
          Headphones
        </p>
        <a href="#" className="flex items-center font-bold mx-auto mb-6">
          <span className="uppercase text-base text-black opacity-50">
            Shop
          </span>
          <CaretRight size={20} className="text-primary font-bold" />
        </a>
      </section>

      <section className="bg-gray-200 rounded-lg mx-6 my-10 flex flex-col items-center mt-28">
        <img src={speakersCategory} className="-mt-20 -mb-5 max-w-[200px]" />
        <p className="font-bold uppercase text-base text-center mb-4">
          Speakers
        </p>
        <a href="#" className="flex items-center font-bold mx-auto mb-6">
          <span className="uppercase text-base text-black opacity-50">
            Shop
          </span>
          <CaretRight size={20} className="text-primary font-bold" />
        </a>
      </section>

      <section className="bg-gray-200 rounded-lg mx-6 my-10 flex flex-col items-center mt-28">
        <img src={earphonesCategory} className="-mt-20 -mb-5 max-w-[200px]" />
        <p className="font-bold uppercase text-base text-center mb-4">
          Earphones
        </p>
        <a href="#" className="flex items-center font-bold mx-auto mb-6">
          <span className="uppercase text-base text-black opacity-50">
            Shop
          </span>
          <CaretRight size={20} className="text-primary font-bold" />
        </a>
      </section>
    </>
  );
};

export default Category;
