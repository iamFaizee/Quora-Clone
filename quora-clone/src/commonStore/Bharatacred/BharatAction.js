import axios from "axios";

const Bharataction=(postdata)=>{
    let url =
    "http://localhost:3000/posts";

  return (dispatch) => {
    axios.post(url, {
        des: postdata,
      }).then((res) => {
        axios.get(url).then((res1)=>{
            // console.log(res1.data)
            dispatch({ type: "userpost", payload: res1.data });
        })
        
    //   console.log(res.data);
    });
  };
}
export {Bharataction}