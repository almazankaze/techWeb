//import { useEffect } from "react";
//import { useDispatch } from "react-redux";

//import { fetchProductsStartAsync } from "../../store/product/product-actions";
import ProductCard from "../../components/product-card/ProductCard";

const product = {
  id: 1,
  name: "AppleMacbook Air 13",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque, eius animi ipsa voluptates. Optio repellat tempora voluptas, dolores ipsam ad!",
  img: "",
  dprice: "1725.00",
  oprice: "2300.00",
  percentOff: 25,
  rating: 4,
  inStock: true,
};

const Home = () => {
  //const dispatch = useDispatch();

  /* useEffect(() => {
    dispatch(fetchProductsStartAsync());
  }, [dispatch]); */

  return (
    <div className="home container">
      <ProductCard product={product} />
    </div>
  );
};

export default Home;
