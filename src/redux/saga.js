import { all } from 'redux-saga/effects';
import { saga as authSaga } from '../ducks/Auth';

function* rootSaga() {
   yield all([
      authSaga()
   ])
}

export default rootSaga;