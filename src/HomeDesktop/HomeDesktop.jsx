import React from "react";
import { Button } from "@mui/material";
import { Category } from "src/Category/Category.js";
import { EditDelete } from "src/EditDelete/EditDelete.js";
import Footer from "src/componentes/Footer.js";
import "./style.css";

export const HomeDesktop = () => {
  return (
    <div className="home-desktop">
      <div className="div">
        <div className="overlap">
          <img className="banner-main" alt="Banner main" src="banner-main.png" />
          <div className="cards">
            <div className="div-2">
              <Category className="category-instance" property1="Frontend" />
              <div className="cards-front">
                <div className="group">
                  <EditDelete className="edit-delete-instance" property1="Front" />
                  <div className="video-card" />
                </div>
                <div className="group-2">
                  <EditDelete className="edit-delete-instance" property1="Front" />
                  <div className="video-card-2" />
                </div>
                <div className="group-3">
                  <EditDelete className="edit-delete-instance" property1="Front" />
                  <div className="video-card-3" />
                </div>
              </div>
            </div>
            <div className="div-2">
              <Category className="category-instance" property1="backend" />
              <div className="div-3">
                <div className="group">
                  <EditDelete className="edit-delete-instance" property1="Back" />
                  <div className="video-card-4" />
                </div>
                <div className="group-4">
                  <EditDelete className="edit-delete-instance" property1="Back" />
                  <div className="video-card-5" />
                </div>
                <div className="group-5">
                  <EditDelete className="edit-delete-instance" property1="Back" />
                  <div className="video-card-6" />
                </div>
              </div>
            </div>
            <div className="div-2">
              <Category className="category-instance" property1="Inov & gestão" />
              <div className="div-3">
                <div className="group-4">
                  <div className="video-card-7" />
                  <EditDelete className="edit-delete-instance" property1="Back" />
                </div>
                <div className="overlap-wrapper">
                  <div className="overlap-group">
                    <div className="video-card-8" />
                    <EditDelete className="edit-delete-instance" property1="Inov & gest" />
                  </div>
                </div>
                <div className="overlap-group-wrapper">
                  <div className="overlap-2">
                    <div className="video-card-9" />
                    <EditDelete className="edit-delete-instance" property1="Inov & gest" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-bar">
            <div className="logo-main" />
            <div className="frame">
              <Button color="primary" variant="contained">
                Upload
              </Button>
              <Button color="primary" variant="contained">
                Default
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
