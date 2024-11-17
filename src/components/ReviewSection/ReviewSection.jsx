import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

function ReviewSection() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1 className="d-flex m-0 py-5 fw-bold justify-content-center px-1">
        OUR HAPPY CUSTOMERS
      </h1>
      <div className="container-fluid d-flex px-lg-5">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 justify-content-center">
          <ReviewCard />
          {windowWidth >= 768 && <ReviewCard />}
          {windowWidth >= 992 && <ReviewCard />}
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
