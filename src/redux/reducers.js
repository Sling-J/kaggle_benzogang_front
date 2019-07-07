import { combineReducers } from 'redux';

import authReducer from '../ducks/Auth';
import datasetsReducer from '../ducks/Datasets'

export default combineReducers({
   authReducer,
   datasetsReducer
});