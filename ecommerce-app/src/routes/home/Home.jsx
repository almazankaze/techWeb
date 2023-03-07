import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//import SHOP_DATA from "../../shop-data";

//import { addCollectionAndDocuments } from "../../utils/firebase/firebase";
import { fetchProductsStartAsync } from "../../store/products/product-actions";
import {
  selectProductsMap,
  selectIsLoading,
} from "../../store/products/product-selector";
import { fetchFeaturedStartAsync } from "../../store/featured/featured-actions";
import {
  selectFeaturedMap,
  featuredIsLoading,
} from "../../store/featured/featured-selector";

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
import Spinner from "../../components/spinner/Spinner";

const product = {
  id: 1,
  shortname: "AppleMacbook Air 13",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque, eius animi ipsa voluptates. Optio repellat tempora voluptas, dolores ipsam ad!",
  img: air,
  dprice: "1725.00",
  oprice: "2300.00",
  percentOff: 25,
  rating: 4,
  inStock: true,
};

const iphone = {
  id: 2,
  shortname: "iPhone 12 mini",
  desc: "description",
  img: iphoneImg,
  dprice: "",
  oprice: "699.99",
  percentOff: "",
  rating: 5,
  inStock: false,
};

const product2 = {
  id: 3,
  shortname: "AppleMacbook Air 13",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque, eius animi ipsa voluptates. Optio repellat tempora voluptas, dolores ipsam ad!",
  img: air,
  dprice: "1725.00",
  oprice: "2300.00",
  percentOff: 25,
  rating: 4,
  inStock: true,
};

const iphone2 = {
  id: 4,
  shortname: "iPhone 12 mini",
  desc: "description",
  img: iphoneImg,
  dprice: "",
  oprice: "699.99",
  percentOff: "",
  rating: 5,
  inStock: false,
};

const data = [product, iphone, product2, iphone2];

const Home = () => {
  const dispatch = useDispatch();
  const offers = useSelector(selectProductsMap);
  const isLoading = useSelector(selectIsLoading);
  const featured = useSelector(selectFeaturedMap);
  const featuredLoading = useSelector(featuredIsLoading);

  /*useEffect(() => {
    addCollectionAndDocuments("storeItems", SHOP_DATA);
  }, []); */

  useEffect(() => {
    dispatch(fetchProductsStartAsync());
    dispatch(fetchFeaturedStartAsync());
  }, [dispatch]);

  return (
    <div className="home container">
      <HeroSection />
      <Perks />
      <SectionHeader sectionTitle={"Offers"} />

      {isLoading ? (
        <Spinner />
      ) : (
        <Slider slides={4} resSlides={3} data={offers} />
      )}

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
        {featuredLoading ? (
          <Spinner />
        ) : (
          <Slider slides={3} resSlides={3} data={featured} />
        )}
      </div>
      <Services />
      <SectionHeader sectionTitle={"Categories"} />
      <CategorySlider />
    </div>
  );
};

export default Home;
