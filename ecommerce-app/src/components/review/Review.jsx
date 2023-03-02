import ReviewDetails from "../review-details/ReviewDetails";
import StarReview from "../star-review/StarReview";
import Button from "../button/Button";
import userIcon from "../../img/default-user.png";
import "./review.css";

function Review() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="product-review">
      <ReviewDetails />

      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        className="my-form"
      >
        <div className="star-container">
          <h3>Your Rating: </h3>
          <div className="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label htmlFor="star5" title="5/5">
              5 stars
            </label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label htmlFor="star4" title="4/5">
              4 stars
            </label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label htmlFor="star3" title="3/5">
              3 stars
            </label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label htmlFor="star2" title="2/5">
              2 stars
            </label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label htmlFor="star1" title="1/5">
              1 star
            </label>
          </div>
        </div>
        <textarea
          className="comment-box"
          placeholder="Add a comment..."
        ></textarea>

        <Button type="submit">Add Review</Button>
      </form>
      <div className="comment-section">
        <h3>REVIEWS</h3>
        <div className="comments-section">
          <div className="comment">
            <div className="author">
              <img src={userIcon} alt="avatar" />
              <h4>John Almazan</h4>
            </div>
            <div className="author-rating">
              <StarReview rating={5} />
              <p>Reviewed January 13, 2023</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
              veritatis ipsa odio numquam atque adipisci, quam accusantium
              deleniti, distinctio veniam ab, repellat libero. Eligendi minus
              omnis odio delectus, harum veniam.
            </p>
          </div>
          <div className="comment">
            <div className="author">
              <img src={userIcon} alt="avatar" />
              <h4>Bryan Alvarez</h4>
            </div>
            <div className="author-rating">
              <StarReview rating={4} />
              <p>Reviewed January 10, 2023</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
              veritatis ipsa odio numquam atque adipisci, quam accusantium
              deleniti, distinctio veniam ab, repellat libero. Eligendi minus
              omnis odio delectus, harum veniam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
