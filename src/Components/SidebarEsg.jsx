import React, { useState } from "react";
import environment from "../assets/Sustainability.png";
import policy from "../assets/Policy .png";
import policyb from "../assets/Policyb.png";
import social from "../assets/social.png";
import socialb from "../assets/socialb.png";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/homeicon.png";
import environmentb from "../assets/Sustainabilityb.png";
import Environment from "./Environment";
import Social from "../Components/Social";
import Govenance from "./Governance";

const SideBarEsg = () => {
  const [Tabvalue, setTabvalue] = useState("environment");
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
                className={
                  Tabvalue === "environment" ? "aboutactive" : "bgColor"
                }
                onClick={() => myfun("environment")}
              >
                {Tabvalue === "environment" ? (
                  <img src={environment} alt="img" />
                ) : (
                  <img src={environmentb} alt="img" />
                )}
              </span>
            </span>
          </div>
          <div className="item ">
            <span className="whitebg">
              <span
                className={Tabvalue === "social" ? "aboutactive" : "bgColor"}
                onClick={() => myfun("social")}
              >
                {Tabvalue === "social" ? (
                  <img src={social} alt="img" />
                ) : (
                  <img src={socialb} alt="img" />
                )}
              </span>
            </span>
          </div>
          <div className="item iteminner">
            <span className="whitebg ">
              <span
                className={
                  Tabvalue === "governance" ? "aboutactive" : "bgColor"
                }
                onClick={() => myfun("governance")}
              >
                {Tabvalue === "governance" ? (
                  <img src={policyb} alt="img" />
                ) : (
                  <img src={policy} alt="img" />
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
  if (value === "environment") {
    return <Environment />;
  } else if (value === "social") {
    return <Social />;
  } else if (value === "governance") {
    return <Govenance />;
  } else {
    return <Environment />;
  }
}
export default SideBarEsg;
