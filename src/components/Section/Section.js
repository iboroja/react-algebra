import React from "react";
import PropTypes from "prop-types";
import "./Section.scss";
import { Button } from "../../utils/style/generalStyles";

//rafcp skeleton za propove

const Section = ({
  helperText,
  title,
  isSecondary = false,
  button,
  children,
}) => {
  //komponenta prihvaca propove
  return (
    <section className={`Section ${isSecondary ? "Section_secondary" : ""}`}>
      <div className="Section-Inner">
        {helperText && <p className="Section-HelperText">{helperText}</p>}
        {/* ako ima prop helperText ispisi ga */}
        {(title || button) && (
          <div className="Section-Header">
            {title && <h2 className="Section-Title">{title}</h2>}
            {button}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

//prvo se definiraju koje imamo propove
Section.propTypes = {
  helperText: PropTypes.string,
  title: PropTypes.string,
  isSecondary: PropTypes.bool,
  button: PropTypes.node,
  children: PropTypes.node,
};

export default Section;
