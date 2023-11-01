import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MovileRepair from "../../component/movileRepair";
import SpecialRate from "../../component/special_rate";


function Home() {
    return (
        <div className="d-flex row ">
            < MovileRepair />
            < SpecialRate />
        </div>

    )
}
export default Home;