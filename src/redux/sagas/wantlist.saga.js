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

function* setWantlistRecord(action){
    try {
            console.log('In setWantlistRecord() saga generator.', action.payload );
            const wantlist = yield axios.post('/api/wantlist/', action.payload );
            console.log('In setWantlistRecord() saga generator. wantlist data = ', wantlist.data);
            // yield put({ type: 'SET_WANTLIST_RECORD_SAGA', payload: wantlist.data });
    } catch(err) {
        console.log('Error in setWantlistRecord() saga generator.', err);
    }
}

function* deleteWantlistRecord(action){
    try {
            console.log('In deleteWantlistRecord() saga generator.', action.payload );
            const wantlist = yield axios.delete('/api/wantlist/' + action.payload.album_id + '/' + action.payload.user_id);
            console.log('In deleteWantlistRecord() saga generator. wantlist data = ', wantlist.data);
            // yield put({ type: 'FETCH_RECORD', payload: wantlist.data });
    } catch(err) {
        console.log('Error in deleteWantlistRecord() saga generator.', err);
    }
}

function* updateWantlistRecord(action){
    try {
            console.log('In updateWantlistRecord() saga generator.', action.payload );
            const wantlist = yield axios.put('/api/wantlist/' + action.payload.rating + '/' + action.payload.album_id + '/' + action.payload.user_id);
            console.log('In updateWantlistRecord() saga generator. wantlist data = ', wantlist.data);
            //  yield put({ type: 'FETCH_COLLECTION_SAGA', payload: action.payload });
   } catch(err) {
        console.log('Error in updateWantlistRecord() saga generator.', err);
    }
}

function* wantlistSaga() {
    yield takeLatest('FETCH_WANTLIST_SAGA', fetchWantlist);
    yield takeLatest('SET_WANTLIST_RECORD_SAGA', setWantlistRecord);
    yield takeLatest('DELETE_WANTLIST_RECORD_SAGA', deleteWantlistRecord);
    yield takeLatest('UPDATE_WANTLIST_RECORD_SAGA', updateWantlistRecord);
}

export default wantlistSaga;