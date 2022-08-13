import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <>
      <h1>{slug}</h1>
    </>
  );
};

export default CategoryPage;
