import { all, call, put, takeEvery } from 'redux-saga/effects'
import { Auth } from '../service';

export const REGISTER_REQUEST = `REGISTER_REQUEST`;
export const REGISTER_SUCCESS = `REGISTER_SUCCESS`;
export const REGISTER_ERROR = `REGISTER_ERROR`;

const initialState = {
   loadingOfForm: false,
   errorMessage: null,
   userData: null
}

/**
 * Reducer
 */
export default (state = initialState, action) => {
   switch (action.type) {
      case REGISTER_REQUEST:
         return {
            ...state,
            loadingOfForm: true
         }

      case REGISTER_SUCCESS:
         return {
            ...state,
            loadingOfForm: false,
            errorMessage: null,
            userData: action.payload
         }

      case REGISTER_ERROR:
         return {
            ...state,
            loadingOfForm: false,
            errorMessage: action.payload
         }

      default:
         return state
   }
}

/**
 * Action Creators
 */

export const registerUser = dataOfForm => ({
   type: REGISTER_REQUEST,
   payload: dataOfForm
})

/**
 * Sagas
 */

function* registerUserSaga(action) {
   try {
      const response = yield call(Auth.registerUser, action.payload);
      
      if (response.status === 201) {
         yield put({
            type: REGISTER_SUCCESS,
            payload: response.data
         })
      }
   } catch (error) {
      console.log(error)

      yield put({
         type: REGISTER_ERROR,
         payload: error.response.data.password[0]
      })
   }
}

export const saga = function* () {
   yield all([
      takeEvery(REGISTER_REQUEST, registerUserSaga)
   ])
}