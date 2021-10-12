import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import auth from './authReducer/reducer';
import commonReducer from './Common';
import cartReducer from './cartReducer/reducer';
import allProductReducer from './productReducer/reducer';
import headerReducer from './headerReducer/reducer'
import { LOGOUT} from '../actions/auth/ActionTypes'

const appReducer = combineReducers({
    form: formReducer,
    authReducer:auth,
    headerReducer,
    allProductReducer,
    cartReducer,
    commonReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartReducer']
}
const rootReducer = (state, action) => {
    if (action.type === LOGOUT) {
      state = undefined;
    }
    return appReducer(state, action);
  };
  
export default persistReducer(persistConfig, rootReducer)