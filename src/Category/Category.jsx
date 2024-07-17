import PropTypes from "prop-types";
import React from "react";
import "./category.css";

export const Category = ({ property1, className }) => {
  return (
    <div className={`category ${className}`}>
      <div className={`title-wrapper ${property1}`}>
        <div className="title">
          {property1 === "frontend" && <>FRONT-END</>}

          {property1 === "backend" && <>BACK-END</>}

          {property1 === "inov-gest-o" && <>INNOVACIÓN Y GESTIÓN</>}
        </div>
      </div>
    </div>
  );
};

Category.propTypes = {
  property1: PropTypes.oneOf(["frontend", "inov-gest-o", "backend"]),
};
