import { CaretRight } from "phosphor-react";
interface CategoryProps {
  name: string;
  slug: string;
  image: string;
}

const Category = (props: CategoryProps) => {
  return (
    <>
      <section className="bg-gray-200 rounded-lg my-10 mx-6 flex flex-col items-center mt-28">
        <img src={props.image} className="-mt-20 -mb-5 max-w-[200px]" />
        <p className="font-bold uppercase text-base text-center mb-4">
          {props.name}
        </p>
        <a
          href={"category/" + props.slug}
          className="flex items-center font-bold mx-auto mb-6"
        >
          <span className="uppercase text-base text-black opacity-50">
            SHOP
          </span>
          <CaretRight
            size={20}
            className="text-primary font-bold text-orange"
          />
        </a>
      </section>
    </>
  );
};

export default Category;
