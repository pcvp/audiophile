import Category from "../components/Category/category.component";
import Highlight from "../components/Highlight/Highlight.component";
import NavBar from "../components/NavBar/NavBar.component";

const HomePage = () => {
  return (
    <>
      <section className="bg-black ">
        <Highlight />
      </section>
      <section className="categories flex justify-center flex-col">
        <Category />
      </section>
    </>
  );
};

export default HomePage;
