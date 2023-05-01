const initialValue = {
  post: [],
  };
  
  const Bharatreducer = (state = initialValue, action) => {
    if(action.type==="userpost"){
      return{
          ...state,post:action.payload
      }
    }
  
    return state;
}
  
  export  {Bharatreducer};
  