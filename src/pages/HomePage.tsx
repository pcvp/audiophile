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

  return (
    <>
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
      <section className="categories flex justify-center flex-col md:flex-row">
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
    </>
  );
};

export default HomePage;
