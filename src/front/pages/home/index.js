import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MobileRepair from "../../component/mobileRepair";
import SpecialRate from "../../component/special_rate";
import DataRecovery from "../../component/data_recovery";
import RepairCourses from "../../component/repair_courses";
import AboutUs from "../../component/about_us";
import Services from "../../component/services";
import Carousel from 'react-bootstrap/Carousel';
import circuito from "../../img/circuito.jpg";

const images = [
    {src: circuito, alt: 'Imagen 1'},
    {src: circuito, alt: 'Imagen 1'},
    {src: circuito, alt: 'Imagen 1'}
  ];

function Home() {
    return (
        <div className="d-flex row ">
            < Services />
            < MobileRepair />
            < SpecialRate />
            < DataRecovery />   
            < RepairCourses />
            <Carousel>
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 h-56"
                    src={image.src}
                    alt={image.alt}
                    style={{height: '550px', objectFit: 'cover'}}

                  />
                </Carousel.Item>
              ))}
            </Carousel>
            < AboutUs />    
        </div>

    )
}
export default Home;