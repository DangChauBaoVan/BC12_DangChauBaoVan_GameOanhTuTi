//Import hàm khởi tạo store
import {createStore,combineReducers} from 'redux';
import oanhTuTiReducer from './reducers/OanhTuTiReducer';

//Khởi tạo root reducer
const rootReducer = combineReducers({
    oanhTuTiReducer // oanhTuTiReducer:oanhTuTiReducer
})

//Khởi tạo store
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;