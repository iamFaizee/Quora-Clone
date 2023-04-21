import React from 'react';
import "../Faizan's Components/homapage.css"
import {Box,Divider,Text,Button } from '@chakra-ui/react';
import {MdOutlineAddBox} from 'react-icons/md'



function Sidebar(props) {
    return (
        <div className="sidebar">
            {/* <Box border="none" p="0.3rem 0.5rem" borderRadius="3px" bg="rgb(205, 221, 221)">
                
              <MdOutlineAddBox style={{fontSize:"1.2rem",marginRight:"-5px",color:"grey"}} />

              <p style={{fontSize:"0.8rem",color:"grey"}}>Create Space</p>
            </Box> */}
            <Button leftIcon={<MdOutlineAddBox/>} size="sm" bg="rgb(236,237,237)" color="rgb(100, 100, 100)">
                Create Space

            </Button>
            <div>
                <img src="https://qph.cf2.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg" alt="History" />
                <p>History</p>
            </div>
            
            <div>
                <img src="https://qph.cf2.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg" alt="Business" />
                <p>Business</p>
            </div>
            
            
            <div>
                <img src="https://qph.cf2.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg" alt="Psychology" />
                <p>Psychology</p>
            </div>
            
        
            <div>
                <img src="https://globalhealthcenter.umn.edu/sites/globalhealthcenter.umn.edu/files/styles/folwell_full/public/2020-08/Global_Health_Day_2020.png?itok=OBqPFWl5" alt="Health" />
                <p>Health</p>
            </div>
            
        
            <div>
                <img src="https://qph.cf2.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg" alt="Movies" />
                <p>Movies</p>
            </div>
            
        
            <div>
                <img src="https://render.fineartamerica.com/images/rendered/medium/poster/8/8/break/images/artworkimages/medium/1/circuit-board-technology-setsiri-silapasuwanchai.jpg" alt="Technology" />
                <p>Technology</p>
            </div>
            
        
            <div>
                <img src="https://qph.cf2.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg" alt="Science" />
                <p>Science</p>
            </div>
            
        
            <div>
                <img src="https://qph.cf2.quoracdn.net/main-thumb-t-1605514-100-lcvffzqooyacrpircfxhqcmrpjiahwqa.jpeg" alt="Quora Upvotes" />
                <p>Quora Upvotes</p>
            </div>

            <Divider />
            <Box>
                <Text>
                    {/* AboutCareersTermsPrivacyAcceptable UseBusinessesPressYour Ad ChoicesGrievance Officer */}
                </Text>
            </Box>
        </div>
    );
}

export default Sidebar;