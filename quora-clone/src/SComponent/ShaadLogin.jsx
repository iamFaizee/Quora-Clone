import "./ShaadLogin.css";
import { Box, Center } from "@chakra-ui/react";
import { Input, Button, ButtonGroup } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { SignUpComp } from "./SignUpModal";
import { useContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FireBaseAuth";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { provider } from "./FireBaseAuth";
import { AuthContext } from "../commonStore/contextapi";

export function LoginLandingPage() {
  const [errMsg, setErrMsg] = useState("");
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { postuser, setinputdata, postdata, inputdata, setIsAuth } = useContext(AuthContext);

  function handleSignIn() {
    console.log(user);
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((res) => {
        console.log(res);
        navigate("/home");
        setIsAuth(true)
      })

      .catch((error) => {
        console.log(error);
        setErrMsg(error.message);
      });
  }

 

  const handleGoogleSignIn = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setIsAuth(true)
        navigate("/home");
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div style={{paddingTop:'50px'}} className="loginbody">
      <Center>
        <Box className="LoginContainer" mt="5">
          <Center>
            <div className="IconDiv">
              <img
                src="https://assets.entrepreneur.com/content/3x2/2000/20190211224126-quora-logo-crop.jpeg?format=pjeg&auto=webp&crop=16:9&width=675&height=380"
                alt=""
              />
            </div>
          </Center>
          <div className="TagLine">
            <p>A place to share knowledge and better understand the world</p>
          </div>
          <br />
          <div className="LRContainer">
            <div className="LeftDiv">
              <div style={{ marginLeft: "10px" }}>
                <p>
                  By continuing you indicate that you agree to Quora’s{" "}
                  <span
                    className="LinkUnderLine"
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    Terms of Service{" "}
                  </span>
                  and{" "}
                  <span
                    className="LinkUnderLine"
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    Privacy Policy
                  </span>
                </p>
                <br />
              </div>
              <div>
                <button
                  style={{
                    padding: "10px",
                    width: "310px",
                    alignItems: "left",
                  }}
                  onClick={handleGoogleSignIn}
                >
                  <div className="GoogleAuth">
                    <img src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg" />

                    <p>Continue With Google</p>
                  </div>
                </button>
                <button
                  style={{
                    padding: "10px",
                    width: "310px",
                    alignItems: "left",
                    marginTop: "-20px",
                  }}
                >
                  <div className="GoogleAuth">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" />

                    <p>Continue With Facebook</p>
                  </div>
                </button>
                <SignUpComp />
              </div>
            </div>
            <div className="RightDiv">
              <div className="LoginText">
                <p>Login</p>
              </div>

              <div className="InputEmail">
                <p>Email</p>
                <Input
                  borderRadius="2"
                  variant="outline"
                  placeholder="Your Email"
                  type="email"
                  value={user.email}
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                    
                  }}
                />
              </div>
              <br />
              <div className="InputEmail">
                <p>Password</p>
                <Input
                  borderRadius="2"
                  variant="outline"
                  placeholder="Your Password"
                  type="password"
                  value={user.password}
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                />
              </div>

              <p
                style={{
                  fontSize: "small",
                  marginTop: "12px",
                  marginBottom: "-15px",
                  textAlign: "left",
                  color: "red",
                }}
              >
                {errMsg}
              </p>

              <div className="LoginButton">
                <div>
                  <p>Forget Password?</p>
                </div>
                <div>
                  <Button
                    borderRadius="20"
                    colorScheme="messenger"
                    onClick={handleSignIn}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <br />
          <hr className="HrColor" />
          <div className="LangDiv">
            <p style={{marginLeft:'40px', paddingBottom:'10px',}}>
              हिन्दी
              {/* <ChevronRightIcon boxSize={4} /> */}
            </p>
          </div>
          <div className="login__footer">
            <p>About</p>
            <p>Languages</p>
            <p>Careers</p>
            <p>Businesses</p>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Contact</p>
            <p> ChoicesPress</p>
            <p>&copy; Quora Inc. 2023</p>
          </div>
        </Box>
      </Center>
    </div>
  );
}
