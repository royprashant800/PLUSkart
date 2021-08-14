import React from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import MenuHeader from "../../components/MenuHeader";
import "./style.css";
import caro1 from "../../images/carousel/crsl1.png";
import caro2 from "../../images/carousel/crsl2.png";
import caro3 from "../../images/carousel/crsl3.png";
import body1 from "../../images/body/body1.png";
import body2 from "../../images/body/body2.png";
import Footer from "../../components/Footer/Footer";

const HomePage = (props) => {
  return (
    <Layout>
      <div class="col-md-12 col-12">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class=" w-100" src={caro1} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class=" w-100" src={caro2} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class=" w-100" src={caro3} alt="Third slide" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div class="body-img">
          <img src={body1} alt="" />
          <img src={body2} alt="" />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default HomePage;
