import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MobileRepair from "../../component/mobileRepair";
import SpecialRate from "../../component/special_rate";
import DataRecovery from "../../component/data_recovery";


function Home() {
    return (
        <div className="d-flex row ">
            < MobileRepair />
            < SpecialRate />
            < DataRecovery />   
        </div>

    )
}
export default Home;