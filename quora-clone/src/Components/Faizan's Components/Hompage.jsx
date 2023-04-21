import React from 'react';
import Sidebar from './Sidebar';
import {Spacer} from '@chakra-ui/react'
import Advertisment from './Advertisment';
import "../Faizan's Components/homapage.css"
import AddPost from './AddPost';
import PostContainer from './PostContainer';


function Hompage(props) {
    return (
        <div id="mainContainer">
            <div className='homepage-container'>
                <Sidebar />
                <div className="homepage">
                    <AddPost/>
                    <Spacer/>
                    <PostContainer/>
                </div>
                <Advertisment/>
            </div>
        </div>
    );
}

export default Hompage;