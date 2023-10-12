import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
const Banner = () => {
  return (
    <div className="banner">
      <h1>Unlimited movies, TV shows, and more</h1>
      <h4>Watch anywhere. Cancel anytime.</h4>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <a href="#top" className="btns">
        <BsFillPlayFill size={25} />
        Explore Now
      </a>
    </div>
  );
};

export default Banner;
