import React from "react";
import "./Landing.scss";
import LandingImg from "../../assets/images/landing.jpg";
import { Button } from "../../utils/style/generalStyles";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="Landing">
      <figure className="Landing-Figure">
        <img src={LandingImg} alt="Landing image" className="Landing-Image" />
      </figure>
      <div className="Landing-Overlay Landing-Overlay_left"></div>
      <div className="Landing-Overlay Landing-Overlay_right"></div>
      <div className="Landing-Content">
        <div className="Landing-ContentInner">
          <h1 className="Landing-Title">
            Learn what matters, Algebra Academy powered by Vaucher
          </h1>
          <p className="Landing-Subtitle">
            Make a turnaround in your career or upgrade your current skill set
            with knowledge-based lessons from IT practice.
          </p>
          <Link to={"/courses"}>
            <Button isLanding>Explore courses</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
