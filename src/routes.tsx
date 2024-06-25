import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/index"
import CarRegister from "./pages/CarRegister/CarRegister";
import DriverRegister from "./pages/DriverRegister/DriverRegister";
import Drivers from "./pages/Drivers/Drivers";
import Cars from "./pages/Cars/Cars"

function MainRoutes() {

    return(
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/drivers" element={ <Drivers/> }/>
            <Route path="/driver-register" element={ <DriverRegister/> }/>
            <Route path="/cars" element={ <Cars/> }/>
            <Route path="/car-register" element={<CarRegister />}/>
        </Routes>
    );

}

export default MainRoutes