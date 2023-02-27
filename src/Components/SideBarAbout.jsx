import React, { useState } from "react";
import about2b from "../assets/images1.png";
import img3 from "../assets/about3.png";
import img3b from "../assets/img3b.png";
import img4 from "../assets/about4.png";
import img4b from "../assets/img4b.png";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/homeicon.png";
import about2 from "../assets/about2.png";
import AboutSection from "./AboutSection";
import AboutArrange from "./AboutArrange";
import AboutEsg from "./AboutEsg";

const SideBar = () => {
  const [Tabvalue, setTabvalue] = useState("about");
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
                className={Tabvalue === "about" ? "aboutactive" : "bgColor"}
                onClick={() => myfun("about")}
              >
                {Tabvalue === "about" ? (
                  <img src={about2} alt="img" />
                ) : (
                  <img src={about2b} alt="img" />
                )}
              </span>
            </span>
          </div>
          <div className="item ">
            <span className="whitebg">
              <span
                className={Tabvalue === "arrange" ? "aboutactive" : "bgColor"}
                onClick={() => myfun("arrange")}
              >
                {Tabvalue === "arrange" ? (
                  <img src={img4b} alt="img" />
                ) : (
                  <img src={img4} alt="img" />
                )}
              </span>
            </span>
          </div>
          <div className="item iteminner">
            <span className="whitebg ">
              <span
                className={Tabvalue === "esg" ? "aboutactive" : "bgColor"}
                onClick={() => myfun("esg")}
              >
                {Tabvalue === "esg" ? (
                  <img src={img3b} alt="img" />
                ) : (
                  <img src={img3} alt="img" />
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
  if (value === "about") {
    return <AboutSection />;
  } else if (value === "arrange") {
    return <AboutArrange />;
  } else if (value === "esg") {
    return <AboutEsg />;
  } else {
    return <AboutSection />;
  }
}
export default SideBar;
