import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import authReducer from '../ducks/Auth';
import datasetsReducer from '../ducks/Datasets'

export default (history) => combineReducers({
   router: connectRouter(history),
   authReducer,
   datasetsReducer
});