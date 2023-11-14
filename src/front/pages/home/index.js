import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MobileRepair from "../../component/mobileRepair";
import SpecialRate from "../../component/special_rate";
import DataRecovery from "../../component/data_recovery";
import RepairCourses from "../../component/repair_courses";
import AboutUs from "../../component/about_us";
import Services from "../../component/services";
import Gallery from "../../component/galeria";


function Home() {
    return (
        <div className="d-flex row ">
            < Services />
            < MobileRepair />
            < SpecialRate />
            < DataRecovery />   
            < RepairCourses />
            < Gallery />    
            < AboutUs />    
        </div>

    )
}
export default Home;