import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { RxCross2 } from "react-icons/rx";
import Fade from "react-reveal/Fade";
const MobileMenu = ({ show, setshow }) => {
  return (
    <Fade right>
      <div className="mobileMenu">
        <div>
          <div className="container menuBar">
            <span onClick={() => setshow(false)}>
              <RxCross2 />
            </span>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Governance</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Board of Directors </li>
                    <li> Management Committee </li>
                    <li>
                      Name of Auditor
                      <li> Legal Advisor</li> <li> Pattern of Shareholding </li>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Governance</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Board of Directors </li>
                    <li> Management Committee </li>
                    <li>
                      Name of Auditor
                      <li> Legal Advisor</li> <li> Pattern of Shareholding </li>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Investor Relations</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Board of Directors </li>
                    <li> Management Committee </li>
                    <li>
                      Name of Auditor
                      <li> Legal Advisor</li> <li> Pattern of Shareholding </li>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Financial Statements</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Board of Directors </li>
                    <li> Management Committee </li>
                    <li>
                      Name of Auditor
                      <li> Legal Advisor</li> <li> Pattern of Shareholding </li>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Governance</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Board of Directors </li>
                    <li> Management Committee </li>
                    <li>
                      Name of Auditor
                      <li> Legal Advisor</li> <li> Pattern of Shareholding </li>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default MobileMenu;
