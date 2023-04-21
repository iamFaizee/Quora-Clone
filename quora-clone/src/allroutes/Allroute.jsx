import { Routes, Route } from "react-router-dom";
import { Navbar } from "../Components/bharatComponent/nav";
import Hompage from "../Components/Faizan's Components/Hompage";

const AllRoutes = () => {
    return <>
       <Routes>
        {/* <Route path={"/"} element={<Navbar/>}/> */}
        <Route path={"/"} element={<Hompage />} />
       </Routes>
    </>
}

export {AllRoutes}