import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductStartAsync } from "../../store/singleProduct/product-actions";
import {
  selectProductMap,
  selectIsLoading,
} from "../../store/singleProduct/product-selector";
import { selectCartItems } from "../../store/cart/cart-selector";
import { addItemToCart } from "../../store/cart/cart-actions";
import Review from "../../components/review/Review";
import ImageZoom from "../../components/zoom-img/ImageZoom";
import StarReview from "../../components/star-review/StarReview";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Spinner from "../../components/spinner/Spinner";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";

import tempImg from "../../img/note_1.jpg";
import "./product.css";

function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const [detailsBtn, setDetailsBtn] = useState(true);
  const [reviewBtn, setReviewBtn] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    dispatch(fetchProductStartAsync(id));
  }, [dispatch, id]);

  const toggleDetailsBtn = () => {
    if (!detailsBtn) {
      setDetailsBtn(true);
      setReviewBtn(false);
    }
  };

  const toggleReviewBtn = () => {
    if (!reviewBtn) {
      setDetailsBtn(false);
      setReviewBtn(true);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity > 0 ? quantity - 1 : 0);
  };

  const addProductToCart = () => {
    if (quantity <= 0) return;
    dispatch(addItemToCart(cartItems, singleProduct[0], quantity));
    setQuantity(0);
  };

  const singleProduct = useSelector(selectProductMap);
  const isLoading = useSelector(selectIsLoading);

  if (singleProduct.length <= 0) {
    return null;
  }

  return (
    <div className="container">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="product-container">
          <div className="product-control-container">
            <ImageZoom zoomImg={tempImg} />
            <div className="product-controller">
              <h2>{singleProduct[0].name}</h2>

              <div className="product-control-review">
                <StarReview rating={singleProduct[0].rating} />
                <p>(2 customer reviews)</p>
              </div>

              <div className="product-control-price">
                <h3>
                  $
                  {singleProduct[0].dprice
                    ? singleProduct[0].dprice
                    : singleProduct[0].oprice}
                </h3>
                {singleProduct[0].dprice ? (
                  <p className="product-slashed-price">
                    ${singleProduct[0].oprice}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div
                className={
                  singleProduct[0].inStock
                    ? "product-stock"
                    : "product-stock product-soldout"
                }
              >
                {singleProduct[0].inStock ? "INSTOCK" : "SOLDOUT"}
              </div>

              <div className="product-control-quantity">
                <div className="quantity-input">
                  <button
                    className="quantity-input-btn quantity-input-btn__left"
                    onClick={decrement}
                  >
                    &mdash;
                  </button>
                  <input
                    className="quantity-input-screen"
                    type="text"
                    value={quantity}
                    readOnly
                  />
                  <button
                    className="quantity-input-btn quantity-input-btn__right"
                    onClick={increment}
                  >
                    &#xff0b;
                  </button>
                </div>
                <div className="quantity-buttons">
                  <Button
                    type="button"
                    buttonType={BUTTON_TYPE_CLASSES.cart}
                    onClick={addProductToCart}
                  >
                    Add to Cart
                  </Button>
                  <div className="product-favorite-btn">
                    <FavoriteBorderIcon />
                  </div>
                </div>
              </div>

              <div className="product-extra-details">
                <p>Free shipping on orders over $50!</p>
                <ul>
                  <li>Satisfaction Guaranteed</li>
                  <li>No Hassle Refunds</li>
                  <li>Secure Payments</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="detail-button-container">
            <Button
              type="button"
              className={detailsBtn ? "active-detail" : null}
              buttonType={BUTTON_TYPE_CLASSES.detail}
              onClick={toggleDetailsBtn}
            >
              Description
            </Button>
            <Button
              type="button"
              className={reviewBtn ? "active-detail" : null}
              buttonType={BUTTON_TYPE_CLASSES.detail}
              onClick={toggleReviewBtn}
            >
              Reviews (2)
            </Button>
          </div>

          <div
            className={
              detailsBtn
                ? "product-description-container show-product-section"
                : "product-description-container hide-product-section"
            }
          >
            {singleProduct[0].desc}
          </div>

          <div
            className={
              reviewBtn ? "show-product-section" : "hide-product-section"
            }
          >
            <Review />
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
