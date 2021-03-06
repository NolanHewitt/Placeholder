import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import background from "../images/background.jpg";
import Skywatch from "../skywheel/watch";

export default function() {
  return (
<>
<Skywatch/>

    <div style={{ height: "75vh" }} className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">

        <div id ="bg">
      <img src={background} alt="starry night sky">
      </img>
    </div>

          <h4>
            <b className="white-text">View the skies!</b>{" "}
            <span style={{ fontFamily: "Star Jedi" }}></span>
          </h4>
          <p className="flow-text white-text">
            Share your thoughts with others
          </p>
          <br />
          <div className="col s6">
            <Link
              to="/register"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Register
            </Link>
          </div>
          <div className="col s6">
            <Link
              to="/login"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large btn-flat waves-effect white black-text"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );

}
