import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// Use only in development
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

// Use in production
//const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;