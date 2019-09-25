import { put, takeEvery } from 'redux-saga/effects';

function* dataHandler({ payload }) {
  yield put({type: 'SEND_CART_TO_SERVER_SUCCESS', payload});
}

function* mySaga() {
  yield takeEvery('SEND_CART_TO_SERVER_REQUEST', dataHandler);
}

export default mySaga;