import React, { useContext, useEffect } from 'react';
import ProfileComp from './ProfileComp/ProfileComp';
import AnswerComp from './ProfileComp/AnswerComp';
import "./Profile.css";
import Emploment from './Profileform/Emploment';
import Education from './Profileform/Education';
import { Icon } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import {
  Heading, Avatar, HStack, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, useDisclosure
} from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons'
import { FaPlusCircle } from "react-icons/fa";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from "@chakra-ui/react";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { FiEdit2 } from "react-icons/fi";
import { MdCardTravel } from "react-icons/md";
import { FcGraduationCap } from "react-icons/fc";
import { ImCalendar } from "react-icons/im";
import { ImLocation2 } from "react-icons/im";
import { useState } from 'react';
import { AuthContext } from '../../commonStore/contextapi';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../SComponent/FireBaseAuth';

export default function Profile() {

  const { postuser, setinputdata, postdata, inputdata, setIsAuth } = useContext(AuthContext);
        const navi = useNavigate();
        const [userName, setUserName] = useState("");
        const [useremail, setemail] = useState("");

        const [editdata, setEditdata] = useState({ work: "-", date: 0 });

        function handleDataFromChild(updatedData) {
          setEditdata(updatedData);
        }

        useEffect(() => {
            auth.onAuthStateChanged((user) => {
              if (user) {
                setUserName(user.displayName);
                setemail(user.email);
                console.log(user);
              } else setUserName("");
            });
          }, []);
  const [user, setUser] = useState({
    name: userName,
    email: "akumar451998@.gmail.com",
    avatar: "data:image/png;base64,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"
  });
  const [selectedItem, setSelectedItem] = useState("");

  const handleSelect = (item) => {
    const elements1 = document.getElementsByClassName("btn_hide1");
    for (let i = 0; i < elements1.length; i++) {
      elements1[i].style.display = "none";
    }
    const elements2 = document.getElementsByClassName("btn_hide2");
    for (let i = 0; i < elements2.length; i++) {
      elements2[i].style.display = "none";
    }
    setSelectedItem(item);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const onCloseModal2 = () => setIsOpenModal2(false);
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  return  (
    <>
      <ChakraProvider>
        <div className="border" style={{marginTop:'80px'}}>
          <div className="upper">
            <div className="upper_left">
              <div>
                <div className="pic">
                  <Avatar
                    size="2xl"
                    name="Avatar"
                    src={user.avatar}
                  />
                </div>
              </div>
            </div>
            <div className="upper-right">
              <div className="profilename">
                <Heading as="h2" size="xl">
                  {userName}
                </Heading>
              </div>
              <div className="sidebox">
                <div className="left">
                  <button onClick={onOpen}>
                    <FiEdit2 />
                  </button>


                  <Modal size="xl"
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                  >
                    <ModalOverlay />
                    <ModalContent height="500px">
                      <ModalHeader>
                        <ModalCloseButton style={{ float: 'left' }} />
                        Edit credentials <br />  <Text fontWeight="light" color="#33363d" fontSize='md'>Credentials add credibility to your content</Text>
                      </ModalHeader>
                      <ModalBody pb={6}>
                        <div>
                          <Menu>
                            <MenuButton className='btn_hide1' as={Button} rightIcon={<ChevronDownIcon />}>
                              <div style={{ display: "flex" }}><Icon as={FaPlusCircle} boxSize={6} color="green.500" /> <div style={{ marginTop: "2px", marginLeft: "2px" }}>Add a Credentials</div></div>

                            </MenuButton>
                            <div className='btn_hide1'>
                              <Text mt="4px" ml="5px" fontSize='xs'> YOUR CREDENTIALS</Text>
                              <hr />
                            </div>
                            <MenuList>
                              <MenuItem onClick={() => handleSelect("Employment")}>Employment</MenuItem>
                              <MenuItem onClick={() => handleSelect("Education")}>Education</MenuItem>
                              <MenuItem onClick={() => handleSelect("Location")} >Location</MenuItem>
                              <MenuItem onClick={() => handleSelect("Space")}> Space</MenuItem>
                              <MenuItem onClick={() => handleSelect("Topic")}>Topic</MenuItem>
                              <MenuItem onClick={() => handleSelect("Language")}> Language</MenuItem>
                            </MenuList>

                            {selectedItem === "Employment" && <Emploment onChange={handleDataFromChild} editdata={editdata}/>}
                            {selectedItem === "Education" && <Education />}
                            {selectedItem === "Location" && <h1>lo</h1>}
                            {selectedItem === "Space" && <h1>sp</h1>}
                            {selectedItem === "Topic" && <h1>to</h1>}
                            {selectedItem === "Language" && <h1>ln</h1>}

                          </Menu>

                        </div>
                      </ModalBody>
                      <ModalFooter>
                        <button colorScheme="blue" style={{ width: "70px", height: "40px", marginLeft: "8px", color: "white", backgroundColor: "#F1F2F2", borderRadius: "25px", color: "black" }} mr={3}>
                          Cancel
                        </button>
                        <button mr={4} style={{ width: "70px", height: "40px", marginLeft: "12px", color: "white", backgroundColor: "#2E69FF", borderRadius: "25px" }} onClick={onClose}> Save</button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </div>
                <h1>Credentials & Highlights</h1>
                <hr />
                <div className="credential_box">
                  <HStack>
                    <MdCardTravel />
                    <p>Work at {editdata.work}</p>
                  </HStack>
                </div>
                <div>
                  <HStack>
                    <FcGraduationCap />
                    <p>Student at MASAI</p>
                  </HStack>
                  <HStack>
                    <FcGraduationCap />
                    <p>Email: {useremail}</p>
                  </HStack>
                </div>

                <div>
                  <HStack>
                    <ImLocation2 />
                    <p>Lives in Delhi,India</p>
                  </HStack>
                </div>
                <div>
                  <HStack>
                    <ImCalendar />
                    <p>Joined in {editdata.date}</p>
                  </HStack>
                </div>
              </div>
            </div>
            <div className="para">
              <p>18 followers 20 following</p>
            </div>
          </div>

          <div className="box2">
            <Tabs isFitted variant="enclosed">
              <TabList mb=".6em">
                <Tab _selected={{ color: "red", bg: "white" }} _hover={{ bg: "gray.200" }}>Profile</Tab>
                <Tab _selected={{ color: "red", bg: "white" }} _hover={{ bg: "gray.200" }}>0Answers</Tab>
                <Tab _selected={{ color: "red", bg: "white" }} _hover={{ bg: "gray.200" }}>Questions</Tab>
                <Tab _selected={{ color: "red", bg: "white" }} _hover={{ bg: "gray.200" }}>Posts</Tab>
                <Tab _selected={{ color: "red", bg: "white" }} _hover={{ bg: "gray.200" }}>Followers</Tab>
                <Tab _selected={{ color: "red", bg: "white" }} _hover={{ bg: "gray.200" }}>Following</Tab>
                <Tab _selected={{ color: "red", bg: "white" }} _hover={{ bg: "gray.200" }}>Edits</Tab>
                <Tab _selected={{ color: "red", bg: "white" }} _hover={{ bg: "gray.200" }}>Activity</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Text textAlign="left" fontWeight="bold" marginBottom="10px" marginTop="-20px" fontSize='lg'>Profile</Text>
                  <hr />
                  <div>
                    {
                      <ProfileComp />
                    }
                  </div>
                </TabPanel>
                <TabPanel>
                  <Text textAlign="left" fontWeight="bold" marginBottom="10px" marginTop="-20px" fontSize='lg'>0 Answers</Text>
                  <hr />
                  <div>
                    {
                      <AnswerComp />
                    }
                  </div>
                </TabPanel>
                <TabPanel>
                  <Text textAlign="left" fontWeight="bold" marginBottom="10px" marginTop="-20px" fontSize='lg'>Questions</Text>
                  <hr />
                  <p>Questions</p>
                </TabPanel>
                <TabPanel>
                  <Text textAlign="left" fontWeight="bold" marginBottom="10px" marginTop="-20px" fontSize='lg'>Posts</Text>
                  <hr />
                  <div>Posts</div>
                </TabPanel>
                <TabPanel>
                  <Text textAlign="left" fontWeight="bold" marginBottom="10px" marginTop="-20px" fontSize='lg'>Followers</Text>
                  <hr />
                  <div>Followers</div>
                </TabPanel>
                <TabPanel>
                  <Text textAlign="left" fontWeight="bold" marginBottom="10px" marginTop="-20px" fontSize='lg'>Following</Text>
                  <hr />
                  <div>Following</div>
                </TabPanel>
                <TabPanel>
                  <Text textAlign="left" fontWeight="bold" marginBottom="10px" marginTop="-20px" fontSize='lg'>Edits</Text>
                  <hr />
                  <div>Edits</div>
                </TabPanel>
                <TabPanel>
                  <Text textAlign="left" fontWeight="bold" marginBottom="10px" marginTop="-20px" fontSize='lg'>Activity</Text>
                  <hr />
                  <div>Activity</div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
          <div className="knows">
            <div className="left">
              <button onClick={() => setIsOpenModal2(true)}>
                <FiEdit2 />
              </button>

              <Modal size="xl"
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpenModal2} onClose={onCloseModal2}
              > 
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Topics you know about</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <div>
                      <h1>
                        Topics are how Quora knows what questions to send your way. Be as comprehensive and specific as possible to get the most relevant questions.
                      </h1>
                      <input style={{
                        width: "100%",
                        height: "30px",
                        border: "1px solid blue",
                        borderRadius: "5px",
                        marginTop: "8px"
                      }}
                        ref={initialRef}
                        placeholder="Add topic"
                      />
                    </div>
                  </ModalBody>

                  <ModalFooter>
                    <button colorScheme="blue" mr={3}>
                      Save
                    </button>
                    <button onClose={onCloseModal2} >Cancel</button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
            <div>
              <h1 style={{ marginLeft: "-50px" }}>Knows about</h1>
              <hr style={{ width: "80%", marginLeft: "60px" }} />
            </div>
          </div>
        </div>
      </ChakraProvider>
    </>
  )
}
