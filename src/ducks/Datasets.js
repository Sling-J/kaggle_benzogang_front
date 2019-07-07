import { all, call, put, takeEvery } from 'redux-saga/effects'
import { Datasets } from '../service';

export const DATASETS_FETCH_REQUEST = `DATASETS_REQUEST`;
export const DATASETS_FETCH_SUCCESS = `DATASETS_SUCCESS`;
export const DATASETS_FETCH_ERROR = `DATASETS_FETCH_ERROR`;

export const DATASETS_CREATE_REQUEST = `DATASETS_CREATE_REQUEST`;
export const DATASETS_CREATE_SUCCESS = `DATASETS_CREATE_SUCCESS`;
export const DATASETS_CREATE_ERROR = `DATASETS_CREATE_ERROR`;

const initialState = {
   loadingOfData: false,
   errorMessage: null,
   datasets: null,
   createdDataset: null
}

/**
 * Reducer
 */
export default (state = initialState, action) => {
   switch (action.type) {
      case DATASETS_FETCH_REQUEST:
      case DATASETS_CREATE_REQUEST:
         return {
            ...state,
            loadingOfData: true
         }

      case DATASETS_CREATE_SUCCESS:
         return {
            ...state,
            loadingOfData: false,
            errorMessage: false,
            createdDataset: action.payload
         }                  

      case DATASETS_FETCH_SUCCESS:
         return {
            ...state,
            loadingOfData: false,
            errorMessage: null,
            datasets: action.payload
         }

      case DATASETS_FETCH_ERROR:
      case DATASETS_CREATE_ERROR:
         return {
            ...state,
            loadingOfData: false,
            errorMessage: action.payload
         }

      default:
         return state
   }
}

/**
 * Action Creators
 */

export const fetchDatasets = () => ({
   type: DATASETS_FETCH_REQUEST
})

export const createDatsets = (data) => ({
   type: DATASETS_CREATE_REQUEST,
   payload: data
})

/**
 * Sagas
 */

function* fetchDatasetsSaga() {
   try {
      const response = yield call(Datasets.datasetsList);

      if (response.status === 200) {
         console.log(response);

         yield put({
            type: DATASETS_FETCH_SUCCESS
         })
      }
   } catch (error) {
      console.log(error)

      yield put({ type: DATASETS_FETCH_ERROR })
   }
}

function* createDatasets(action) {
   try {
      const response = yield call(Datasets.datasetsCreate, action.type)

      console.log(response);
   } catch (error) {
      console.log(error.response);

      yield put({ type: DATASETS_CREATE_ERROR })
   }
}

export const saga = function* () {
   yield all([
      takeEvery(DATASETS_FETCH_REQUEST, fetchDatasetsSaga),
      takeEvery(DATASETS_CREATE_REQUEST, createDatasets)
   ])
}