import React from "react";
import Rating from "../Rating/Rating";
import "./reviewCard.scss";

function ReviewCard() {
  return (
      <div className="review_card d-flex flex-column p-3 mx-3 gap-2 ">
        <Rating rating={5} />
        <div className="d-flex align-content-center">
          <h5 className="m-0">Sarah M.</h5>
          <i class="bi bi-check-circle-fill text-success ps-2"></i>
        </div>

        <p className="m-0">
          ”Finding clothes that align with my personal style used to be a
          challenge until I discovered Shop.co. The range of options they offer
          is truly remarkable, catering to a variety of tastes and occasions.”
        </p>
      </div>
  );
}

export default ReviewCard;
