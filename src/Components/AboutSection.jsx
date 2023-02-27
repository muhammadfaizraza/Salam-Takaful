import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";

const AboutSection = () => {
  return (
    <React.Fragment>
      <Fade bottom>
        <div className="section features">
          {data.About.map((item, index) => (
            <>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ReadMoreReact
                text={item.description}
                min={50}
                ideal={90}
                max={120}
                readMoreText="read more"
              />
            </>
          ))}
        </div>
      </Fade>
    </React.Fragment>
  );
};
export default AboutSection;
