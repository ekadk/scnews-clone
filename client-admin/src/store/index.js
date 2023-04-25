import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "./reducers/rootReducer";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

export default store;