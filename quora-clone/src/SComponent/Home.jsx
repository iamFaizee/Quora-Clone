import { getAuth, signOut } from "firebase/auth";
import { Button, background } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function HomeComp({ name }) {
  const navi = useNavigate();

  function handleSignOut() {
    function handlNavi() {
      navi("/");
    }

    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.");
        const myTimeout = setTimeout(handlNavi, 2000);
      })
      .catch((error) => {
        // An error happened.
        console.log("An Error Happend");
      });
  }

  return (
    <>
      <Heading>Home Page</Heading>
      <Heading>{`Hello....Mr ${name}`}</Heading>

      <br />
      <Button onClick={handleSignOut}>SignOut</Button>
    </>
  );
}

export default HomeComp;
