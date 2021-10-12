import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer/userReducer";

const store = createStore(userReducer, applyMiddleware(thunk));
//const store = createStore(userReducer);
export default store;
