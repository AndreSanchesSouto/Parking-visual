import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/index"
import CarRegister from "./pages/CarRegister/CarRegister";

function MainRoutes() {

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/car-register" element={<CarRegister/>}/>
        </Routes>
    );

}

export default MainRoutes