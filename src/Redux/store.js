import { combineReducers, createStore } from "redux";
import rdcUser from "./Reducer/rdcUser";

const globalState = combineReducers({
    userManage: rdcUser
})

const store = createStore(globalState);

export default store;