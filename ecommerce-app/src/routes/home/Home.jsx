//import { useEffect } from "react";
//import { useDispatch } from "react-redux";

//import { fetchProductsStartAsync } from "../../store/product/product-actions";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";
import HeroSection from "../../components/hero-section/HeroSection";
import Perks from "../../components/perks/Perks";
import Slider from "../../components/slider/Slider";
import SectionHeader from "../../components/section-header/SectionHeader";
import CategorySlider from "../../components/category-slider/CategorySlider";
import Services from "../../components/home-section/Services";
import air from "../../img/note_1.jpg";
import iphoneImg from "../../img/phones/phone_2.jpg";

import "./home.css";

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

const product2 = {
  id: 3,
  name: "AppleMacbook Air 13",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque, eius animi ipsa voluptates. Optio repellat tempora voluptas, dolores ipsam ad!",
  img: air,
  dPrice: "1725.00",
  oPrice: "2300.00",
  percentOff: 25,
  rating: 4,
  inStock: true,
};

const iphone2 = {
  id: 4,
  name: "iPhone 12 mini",
  desc: "description",
  img: iphoneImg,
  dPrice: "",
  oPrice: "699.99",
  percentOff: "",
  rating: 5,
  inStock: false,
};

const data = [product, iphone, product2, iphone2];

const Home = () => {
  //const dispatch = useDispatch();

  /* useEffect(() => {
    dispatch(fetchProductsStartAsync());
  }, [dispatch]); */

  return (
    <div className="home container">
      <HeroSection />
      <Perks />
      <SectionHeader sectionTitle={"Offers"} />
      <Slider slides={4} resSlides={3} data={data} />

      <div className="home-img-section">
        <div className="img-wrapper" id="graphics"></div>
        <div className="img-wrapper" id="games"></div>
      </div>
      <SectionHeader sectionTitle={"Laptops"} />
      <div className="img-slider-container">
        <div className="imageCard-container">
          <div
            className="imageCard-background"
            role="img"
            aria-label="gaming laptops"
          >
            <div className="imageCard-content">
              <h2>Gaming Laptops</h2>
              <p>Choose your laptop now!</p>
              <Button type="button" buttonType={BUTTON_TYPE_CLASSES.heroBtn}>
                Shop Now
              </Button>
            </div>
          </div>
        </div>
        <Slider slides={3} resSlides={3} data={data} />
      </div>
      <Services />
      <SectionHeader sectionTitle={"Categories"} />
      <CategorySlider />
    </div>
  );
};

export default Home;
