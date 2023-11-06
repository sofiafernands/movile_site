import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MobileRepair from "../../component/mobileRepair";
import SpecialRate from "../../component/special_rate";


function Home() {
    return (
        <div className="d-flex row ">
            < MobileRepair />
            < SpecialRate />
        </div>

    )
}
export default Home;