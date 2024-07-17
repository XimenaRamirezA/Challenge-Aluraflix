import PropTypes from "prop-types";
import React from "react";
import "./edit-delete.css";

export const EditDelete = ({ property1, className, overlapGroupClassName }) => {
  return (
    <div className={`edit-delete ${className}`}>
      <div className={`overlap-group ${property1} ${overlapGroupClassName}`}>
        <div className="frame">
          <div className="div">
            <img className="vector" alt="Vector" src="vector.svg" />
            <div className="text-wrapper">BORRAR</div>
          </div>
          <div className="div">
            <img className="img" alt="Vector" src="image.svg" />
            <div className="text-wrapper">EDITAR</div>
          </div>
        </div>
      </div>
    </div>
  );
};

EditDelete.propTypes = {
  property1: PropTypes.oneOf(["back", "front", "inov-gest"]),
};
