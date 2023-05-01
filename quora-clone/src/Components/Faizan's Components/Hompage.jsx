import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import {Spacer} from '@chakra-ui/react'
import Advertisment from './Advertisment';
import "../Faizan's Components/homapage.css"
import AddPost from './AddPost';
import PostContainer from './PostContainer';
import { AuthContext } from '../../commonStore/contextapi';


function Hompage(props) {

    const { postuser, setinputdata, postdata, inputdata, setIsAuth, getalldata, dark, setdark } = useContext(AuthContext);
    return (
        <div id="mainContainer" style={{display:'flex', justifyContent:'center', marginLeft:'5%'}}>
            <div className='homepage-container' style={{marginTop:'60px', position:'absolute', zIndex:'-1', display:'flex'}}> 
                <div style={{width:'75%', position:'fixed'}}>
                <Sidebar />
                </div>
                
                <div className="homepage" style={{width:'55%' }}> 
                    <AddPost/> 
                    <Spacer/> 
                    <PostContainer/>
                 </div>
                 <div style={{width:'75%', position:'fixed', left:'65%'}}>
                 <Advertisment/>
                 </div>
                 
             </div>
        </div>
    );
}

export default Hompage;