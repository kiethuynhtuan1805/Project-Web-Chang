import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import rdcUser from "redux/Reducer/rdcUser";
import rootSaga from 'redux/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const globalState = combineReducers({
    userManage: rdcUser
})

const store = createStore(globalState, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store;