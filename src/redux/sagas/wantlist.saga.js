import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchWantlist(action){
    try {
            console.log('In wantlistSaga() saga generator.  id = ', action.payload.userId);
            const wantlist = yield axios.get('/api/wantlist/' + action.payload.userId );
            console.log('In wantlistSaga() saga generator. wantlist data = ', wantlist.data);
            yield put({ type: 'FETCH_WANTLIST', payload: wantlist.data });
    } catch {
        console.log('Error in wantlistSaga() saga generator.');
    }
}

function* wantlistSaga() {
    yield takeLatest('FETCH_WANTLIST_SAGA', fetchWantlist);
}

export default wantlistSaga;