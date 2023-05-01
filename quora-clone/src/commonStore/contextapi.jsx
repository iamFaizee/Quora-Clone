import axios from 'axios';
import React, { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [postdata, setpostdata]=useState([]);
  const [inputdata, setinputdata]=useState({data:'', img:''});
  const [toggle,settoggle]=useState(false);
  const [dark, setdark]=useState(false);

  useEffect(()=>{
    axios.get("http://localhost:3000/posts").then((res)=>{
        console.log(res.data)
        setpostdata(res.data)
      })
  },[inputdata])
  
   function getalldata(){
    axios.get("http://localhost:3000/posts").then((res)=>{
        console.log(res.data)
        setpostdata(res.data)
      })
   }

  function postuser(userdes, im){
    axios.post("http://localhost:3000/posts", {des:userdes.data, imgs:im}).then((res)=>{
        console.log(res.data)
      })
  }

  return (
    <div>
    <AuthContext.Provider value={{ isAuth, dark, setdark, setpostdata, setinputdata, postuser, postdata, inputdata, setIsAuth,toggle,settoggle, getalldata}}>
      {children}
    </AuthContext.Provider>
    </div>
  );
};