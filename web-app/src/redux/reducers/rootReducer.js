import { combineReducers } from "redux"
import counter from "./syncReducers/counterReducer"
import search from "./asyncReducers/searchReducer";

const rootReducers = combineReducers({
    counter,
    search
})

export default rootReducers;