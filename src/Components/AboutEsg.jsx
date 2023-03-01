import React from "react";
import { Fade } from "react-reveal";
import CeoImg from "../assets/Ceo.jpg";

const AboutEsg = () => {
  return (
    <Fade bottom>
      <div className="AboutEsg">
        <div>
          <img src={CeoImg} alt="" />
        </div>
      </div>
    </Fade>
  );
};

export default AboutEsg;
