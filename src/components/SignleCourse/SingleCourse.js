import React from "react";
import PropTypes from "prop-types";
import "./SingleCourse.scss";

const SingleCourse = ({ imgSrc, imgAlt, children }) => {
  return (
    <div className="SingleCourse">
      <figure className="SingleCourse-Figure">
        <img src={imgSrc} alt={imgAlt} className="SingleCourse-Image" />
      </figure>
      <div className="SingleCourse-Content">
        <p className="SingleCourse-Text">{children}</p>
      </div>
    </div>
  );
};

SingleCourse.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  children: PropTypes.node,
};

export default SingleCourse;
