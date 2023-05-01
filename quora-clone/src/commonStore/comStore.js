import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { Bharatreducer } from "./Bharatacred/BharatReducer";

// const combine= combineReducers({
//     Bharatreducer: Bharatreducer,
// })


const Store=legacy_createStore( Bharatreducer,applyMiddleware(thunk));


export {Store};
