import { all } from 'redux-saga/effects';
import { saga as authSaga } from '../ducks/Auth';
import { saga as datasetsSaga } from '../ducks/Datasets'

function* rootSaga() {
   yield all([
      authSaga(),
      datasetsSaga()
   ])
}

export default rootSaga;