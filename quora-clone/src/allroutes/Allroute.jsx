import { Routes, Route } from "react-router-dom";
import { Navbar } from "../bharatComponent/nav";

const AllRoutes=()=>{
    return <>
       <Routes>
        <Route path={"/"} element={<Navbar/>}/>
       </Routes>
    </>
}

export {AllRoutes}