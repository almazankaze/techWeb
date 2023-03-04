import { useState } from "react";
import Review from "../../components/review/Review";
import ImageZoom from "../../components/zoom-img/ImageZoom";
import StarReview from "../../components/star-review/StarReview";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";

import tempImg from "../../img/note_1.jpg";
import "./product.css";

function Product() {
  const [detailsBtn, setDetailsBtn] = useState(true);
  const [reviewBtn, setReviewBtn] = useState(false);
  const [quantity, setQuantity] = useState(0);

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

  return (
    <div className="container">
      <div className="product-container">
        <div className="product-control-container">
          <ImageZoom zoomImg={tempImg} />
          <div className="product-controller">
            <h2>
              Lenovo Legion 7 16 WQXGA Gaming Laptop NVIDIA GeForce RTX 3080 AMD
              Ryzen 9-5900HX 32GB Ram 1TB SSD
            </h2>

            <div className="product-control-review">
              <StarReview rating={5} />
              <p>(2 customer reviews)</p>
            </div>

            <div className="product-control-price">
              <h3>$200.00</h3>
              <p className="product-slashed-price">$230.00</p>
            </div>

            <div className="product-stock">INSTOCK</div>
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
                  readonly
                />
                <button
                  className="quantity-input-btn quantity-input-btn__right"
                  onClick={increment}
                >
                  &#xff0b;
                </button>
              </div>
              <Button type="button" buttonType={BUTTON_TYPE_CLASSES.cart}>
                Add to Cart
              </Button>
              <div className="product-favorite-btn">
                <FavoriteBorderIcon />
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ab saepe
          obcaecati eius accusamus fugit autem optio animi praesentium fuga
          dolor accusantium at facere, tempore consequuntur, modi quia in quos?
        </div>

        <div
          className={
            reviewBtn ? "show-product-section" : "hide-product-section"
          }
        >
          <Review />
        </div>
      </div>
    </div>
  );
}

export default Product;
