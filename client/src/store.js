import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import  Reducer  from "../src/reducer/reducer";

const middleWare = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  Reducer,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;