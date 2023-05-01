import { Routes, Route, useNavigate } from "react-router-dom";
import { Messagepage } from "../bharatComponent/messgaepage";
import Hompage from "../Components/Faizan's Components/Hompage";
import { Answer } from "../NafisAns/Answer";
import Profile from "../amitcomponent/Profile/Profile";
import { LoginLandingPage } from "../SComponent/ShaadLogin";
import { useContext } from "react";
import { AuthContext } from "../commonStore/contextapi";
import { Following } from "../NafisFollowing/Following";
import { Spaces } from "../bharatComponent/spaces";
import { Noti } from "../bharatComponent/noti";

const AllRoutes=()=>{

    const navigate = useNavigate();
    const { isAuth } = useContext(AuthContext);

    return <>
       <Routes>
        <Route path="/" element={<LoginLandingPage />} />
        <Route path="/home" element={isAuth? <Hompage />: navigate('/') } />
        <Route path="/message" element={isAuth? <Messagepage/>: navigate('/')}/>
        <Route path="/answer" element={isAuth?<Answer/>: navigate('/')}/>
        <Route path="/profile" element={isAuth?<Profile/>: navigate('/')}/>
        <Route path="/following" element={isAuth?<Following/>: navigate('/')}/>
        <Route path="/spaces" element={isAuth?<Spaces/>: navigate('/')}/>
        <Route path="/notification" element={isAuth?<Noti/>: navigate('/')}/>
       </Routes>
    </>
}

export {AllRoutes}