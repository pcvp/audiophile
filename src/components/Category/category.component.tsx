import { CaretRight } from "phosphor-react";
interface CategoryProps {
  name: string;
  slug: string;
  image: string;
}

const Category = (props: CategoryProps) => {
  return (
    <>
      <section id="category">
        <a
          href={"category/" + props.slug}
          className="flex items-center font-bold mx-auto mb-6"
        >
          <div className="bg-gray-200 rounded-lg my-10 mx-6 flex flex-col items-center mt-28 group hover:cursor-pointer">
            <img src={props.image} className="-mt-20 -mb-5 max-w-[200px]" />
            <p className="font-bold uppercase text-base text-center mb-4">
              {props.name}
            </p>

            <div className="flex items-center justify-center pb-6">
              <span className="uppercase text-base text-black opacity-50 group-hover:text-primary-900 group-hover:font-bold transition-all">
                SHOP
              </span>
              <CaretRight size={20} className="text-primary-900 font-bold " />
            </div>
          </div>
        </a>
      </section>
    </>
  );
};

export default Category;
