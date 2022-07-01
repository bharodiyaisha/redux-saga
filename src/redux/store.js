import createSagaMiddleWare from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import productSaga from "./productSaga";
import rootReducer from "./rootReducer";

const SagaMiddleWare = createSagaMiddleWare();
const middleWare = applyMiddleware(SagaMiddleWare);
const store = createStore(rootReducer, middleWare);

SagaMiddleWare.run(productSaga);
export default store;
