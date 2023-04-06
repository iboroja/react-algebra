import React from "react";
import PropTypes from "prop-types";
import "./Testimonial.scss";

const Testimonial = ({ children, imgSrc, imgAlt }) => {
  return (
    <div className="Testimonial">
      <figure className="Testimonial-Figure">
        <img src={imgSrc} alt={imgAlt} className="Testimonial-Image" />
      </figure>
      <p className="Testimonial-Content">
        <span className="Testimonial-Quotation">"</span> {children}
        <span className="Testimonial-Quotation">"</span>
      </p>
    </div>
  );
};

Testimonial.propTypes = {
  children: PropTypes.node,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default Testimonial;
