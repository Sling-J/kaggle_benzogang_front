import { all, call, put, takeEvery, take } from 'redux-saga/effects'
import { Auth } from '../service';

const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

const REGISTER_REQUEST = `REGISTER_REQUEST`;
const REGISTER_SUCCESS = `REGISTER_SUCCESS`;
const REGISTER_ERROR = `REGISTER_ERROR`;

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
      case LOGIN_REQUEST:
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

      case LOGIN_SUCCESS:
         return {
            ...state,
            loadingOfForm: false,
            errorMessage: null,
            loginUserData: action.payload
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

export const login = dataOfForm => ({
   type: LOGIN_REQUEST,
   payload: dataOfForm
})

export const registerUser = dataOfForm => ({
   type: REGISTER_REQUEST,
   payload: dataOfForm
})

/**
 * Sagas
 */


function* loginSaga() {
   while (true) {
      const action = yield take(LOGIN_REQUEST);

      try {
         const response = yield call(Auth.login, action.payload)

         yield console.log(response);
      } catch (error) {
         console.log(error);
         
         if (error.response.data.non_field_errors) {
            yield put({
               type: LOGIN_ERROR,
               payload: error.response.data.non_field_errors[0]
            })
         }
      }
   }
}

function* registerUserSaga(action) {
   try {
      const response = yield call(Auth.registerUser, action.payload)
      
      if (response.status === 201 || response.status === 200) {
         yield put({
            type: REGISTER_SUCCESS,
            payload: response.data
         })
      }
   } catch (error) {
      console.log(error)

      if (error.response.data.password[0]) {
         yield put({
            type: REGISTER_ERROR,
            payload: error.response.data.password[0]
         })
      }
   }
}

export const saga = function* () {
   yield all([
      loginSaga(),
      takeEvery(REGISTER_REQUEST, registerUserSaga)
   ])
}