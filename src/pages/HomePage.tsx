import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Category from "../components/Category/category.component";
import ProductHighlight from "../components/ProductHighlight/ProductHighlight.component";
import {
  useCategoriesQuery,
  useProductHighlightsQuery,
} from "../graphql/generated";

const HomePage = () => {
  const categoriesResponse = useCategoriesQuery().data;
  const productHighlights = useProductHighlightsQuery().data?.productHighlights;

  if (!productHighlights) return <span>Carregando</span>;

  const firstProductHighlight = productHighlights[0];
  const secondProductHighlight = productHighlights[1];

  return (
    <section className="max-w-full">
      <section className="bg-black ">
        <ProductHighlight
          imageUrl={firstProductHighlight.image.url}
          showNewProductTag={
            firstProductHighlight.product?.showNewProductTag ?? false
          }
          productName={firstProductHighlight.product?.name ?? ""}
          smallDescription={
            firstProductHighlight.product?.smallDescription ?? ""
          }
          slug={firstProductHighlight.product?.slug ?? ""}
        />
      </section>

      <main className="max-w-[1000px] mx-auto">
        <section className="categories flex justify-center items-center flex-col md:flex-row">
          {categoriesResponse?.categories.map((category) => {
            return (
              <Category
                slug={category.slug}
                name={category.name}
                image={category.image.url}
                key={category.id}
              />
            );
          })}
        </section>

        <section className="mb-10 px-6 max-w-sm mx-auto md:max-w-5xl lg:w-[1000px] lg:my-auto lg:px-0">
          <div
            className="h-[600px] rounded bg-primary-900 bg-top bg-no-repeat flex flex-col items-center justify-end pb-6
            lg:bg-left lg:justify-center lg:mr-20 lg:h-[350px] lg:pb-0 lg:items-start lg:pl-96 lg:w-[1000px]"
            style={{
              backgroundImage: "url(" + secondProductHighlight.image.url + ")",
            }}
          >
            <p className="text-4xl text-white font-bold w-[220px] text-center mt-20 lg:mt-0 lg:text-left">
              {secondProductHighlight.product?.name}
            </p>
            <p className="text-md font-medium text-white w-[220px] text-center mt-8  lg:text-left">
              {secondProductHighlight.product?.smallDescription}
            </p>

            <Link
              to={"/product/" + secondProductHighlight.product?.slug}
              className="my-6 lg:mb-0"
            >
              <Button kind="raised" appearance="secondary">
                See Product
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </section>
  );
};

export default HomePage;
