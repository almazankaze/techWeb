import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart-selector";
import { addItemToCart } from "../../store/cart/cart-actions";
import StarReview from "../star-review/StarReview";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

import tempImg from "../../img/note_1.jpg";

import "./productcard.css";

function ProductCard({ product }) {
  const { shortname, desc, dprice, oprice, percentOff, rating, inStock, img } =
    product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="card">
      <div className="card-image">
        <img src={tempImg} alt="product-img" />
        {percentOff ? (
          <div className="card-percent">{percentOff}% OFF</div>
        ) : (
          ""
        )}

        <div className="card-corner-btns">
          <div className="card-btn">
            <FavoriteBorderIcon />
          </div>
          <div className="card-btn">
            <VisibilityOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="card-details">
        <div className="card-bonus-details">
          <StarReview rating={rating} />
          <div className={inStock ? "card-stock" : "card-stock card-soldout"}>
            {inStock ? "INSTOCK" : "SOLDOUT"}
          </div>
        </div>
        <h5 className="overflow-text mb-small">{shortname}</h5>

        <div className="card-price mb-small">
          <h3>${dprice ? dprice : oprice}</h3>
          {dprice ? <p className="original-price">${oprice}</p> : ""}
        </div>
        <Button
          type="button"
          buttonType={BUTTON_TYPE_CLASSES.cart}
          className="full-btn"
          onClick={addProductToCart}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
