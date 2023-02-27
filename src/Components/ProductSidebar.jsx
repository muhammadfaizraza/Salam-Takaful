import React, { useState } from "react";
import img4 from "../assets/product2.png";
import img4w from "../assets/Protectw.png";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/homeicon.png";
import about2 from "../assets/product1.png";
import about2w from "../assets/Projectb.png";
import ProductFeatures from "./ProductFeatures";
import ProductRiders from "./ProductRiders";

const SideBar = () => {
  const [Tabvalue, setTabvalue] = useState("features");
  const myfun = (data) => {
    setTabvalue(data);
  };

  return (
    <React.Fragment>
      <div>
        <div className="menu">
          <div className="item">
            <span className="whitebg">
              <Link to="/" className="linkstyle">
                <span className="navimg newabout">
                  <span className="text1">Home</span>
                  <img src={HomeIcon} alt="img" />
                </span>
              </Link>
            </span>
          </div>
          <div className="item">
            <span className="whitebg">
              <span
                className={Tabvalue === "features" ? "aboutactive" : "bgColor"}
                onClick={() => myfun("features")}
              >
                {Tabvalue === "features" ? (
                  <img src={about2} alt="img" />
                ) : (
                  <img src={about2w} alt="img" />
                )}
              </span>
            </span>
          </div>
          <div className="item ">
            <span className="whitebg">
              <span
                className={Tabvalue === "riders" ? "aboutactive" : "bgColor"}
                onClick={() => myfun("riders")}
              >
                {Tabvalue === "riders" ? (
                  <img src={img4w} alt="img" />
                ) : (
                  <img src={img4} alt="img" />
                )}
              </span>
            </span>
          </div>
        </div>
      </div>

      <Tab value={Tabvalue} />
    </React.Fragment>
  );
};

function Tab({ value }) {
  if (value === "features") {
    return <ProductFeatures />;
  } else if (value === "riders") {
    return <ProductRiders />;
  } else {
    return <ProductFeatures />;
  }
}
export default SideBar;
