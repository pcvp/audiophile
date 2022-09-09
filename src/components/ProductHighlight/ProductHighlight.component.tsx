import { Link } from "react-router-dom";
import Button from "../Button/Button";

interface ProductHighlightProps {
  imageUrl: string;
  showNewProductTag: boolean;
  productName: string;
  smallDescription: string;
  slug: string;
}

const ProductHighlight = (props: ProductHighlightProps) => {
  return (
    <section
      className="bg-black min-h-[500px] max-w-[380px] mx-auto bg-auto bg-no-repeat bg-bottom 
      flex flex-col items-center justify-center lg:max-w-none lg:w-[1000px] lg:my-auto lg:bg-right-bottom
      lg:items-start"
      style={{
        backgroundImage: "url(" + props.imageUrl + ")",
      }}
    >
      {props.showNewProductTag ? (
        <p className="text-white opacity-75 tracking-[10px] mb-2 my-2 ">
          NEW PRODUCT
        </p>
      ) : (
        ""
      )}

      <p className="text-white text-4xl uppercase text-center my-2 font-bold lg:text-left lg:text-6xl lg:max-w-sm">
        {props.productName}
      </p>
      <p className="text-white opacity-75 text-center mt-2 mb-5 lg:text-left lg:max-w-sm">
        {props.smallDescription}
      </p>

      <Link to={"produtct/" + props.slug}>
        <Button kind="raised" appearance="primary">
          See Product
        </Button>
      </Link>
    </section>
  );
};

export default ProductHighlight;
