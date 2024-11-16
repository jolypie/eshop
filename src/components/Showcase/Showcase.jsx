import React from "react";
import "../Showcase/showcase.scss";
import { BlackRoundButton } from "../Button/Buttons";

function Showcase() {
  return (
    <>
      <section >
        <div className="showcase-section text-dark text-center d-flex align-items-center justify-content-between">
          <div className="overlay-content text-start">
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p class="lead my-4">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sence
              of
            </p>
            <BlackRoundButton>
              Shop Now
            </BlackRoundButton>
          </div>
        </div>
      </section>
    </>
  );
}

export default Showcase;
