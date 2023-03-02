import { useState } from "react";
import Review from "../../components/review/Review";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";
import "./product.css";

function Product() {
  const [detailsBtn, setDetailsBtn] = useState(true);
  const [reviewBtn, setReviewBtn] = useState(false);

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

  return (
    <div className="container product-container">
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
        obcaecati eius accusamus fugit autem optio animi praesentium fuga dolor
        accusantium at facere, tempore consequuntur, modi quia in quos?
      </div>

      <div
        className={reviewBtn ? "show-product-section" : "hide-product-section"}
      >
        <Review />
      </div>
    </div>
  );
}

export default Product;
