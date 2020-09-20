import { createStore, combineReducers, applyMiddleware } from "redux";
import { rootSaga } from './saga'
import createSagaMiddleware from 'redux-saga';
import starshipsReducer from "./starships-reducer";

let reducers = combineReducers({
    starships: starshipsReducer,
});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;