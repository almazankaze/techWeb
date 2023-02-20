//import { useEffect } from "react";
//import { useDispatch } from "react-redux";

//import { fetchProductsStartAsync } from "../../store/product/product-actions";
import ProductCard from "../../components/product-card/ProductCard";
import air from "../../img/note_1.jpg";
import iphoneImg from "../../img/phones/phone_2.jpg";

const product = {
  id: 1,
  name: "AppleMacbook Air 13",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque, eius animi ipsa voluptates. Optio repellat tempora voluptas, dolores ipsam ad!",
  img: air,
  dPrice: "1725.00",
  oPrice: "2300.00",
  percentOff: 25,
  rating: 4,
  inStock: true,
};

const iphone = {
  id: 2,
  name: "iPhone 12 mini",
  desc: "description",
  img: iphoneImg,
  dPrice: "",
  oPrice: "699.99",
  percentOff: "",
  rating: 5,
  inStock: false,
};

const Home = () => {
  //const dispatch = useDispatch();

  /* useEffect(() => {
    dispatch(fetchProductsStartAsync());
  }, [dispatch]); */

  return (
    <div className="home container">
      <ProductCard product={product} />
      <ProductCard product={iphone} />
    </div>
  );
};

export default Home;
