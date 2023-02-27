import React from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import SideBar from "../Common/SideBar";
import LeftSideBar from "../Common/LeftSideBar";
import { useState } from "react";
import MobileMenu from "../Common/MobileMenu";

const Home = () => {
  const [show, setshow] = useState(false);
  return (
    <React.Fragment>
      {show ? <MobileMenu show={show} setshow={setshow} /> : <>


        <Header show={show} setshow={setshow} />
        <div className="container-fluid main">

          <SideBar />
          <LeftSideBar />
          <Footer />
        </div>



      </>
      }
    </React.Fragment>
  )
}
export default Home