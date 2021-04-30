import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCollection(action){
    try {
            console.log('In collectionSaga() saga generator.  id = ', action.payload.userId);
            const collection = yield axios.get('/api/collection/' + action.payload.userId );
            console.log('In collectionSaga() saga generator. collection data = ', collection.data);
            yield put({ type: 'FETCH_COLLECTION', payload: collection.data });
    } catch {
        console.log('Error in collectionSaga() saga generator.');
    }
}

function* setCollectionRecord(action){
    try {
            console.log('In setCollectionRecord() saga generator.', action.payload );
            const collection = yield axios.post('/api/collection/', action.payload );
            console.log('In setCollectionRecord() saga generator. collection data = ', collection.data);
            // yield put({ type: 'FETCH_COLLECTION_SAGA', payload: action.payload });
    } catch(err) {
        console.log('Error in setCollectionRecord() saga generator.', err);
    }
}

function* deleteCollectionRecord(action){
    try {
            console.log('In deleteCollectionRecord() saga generator.', action.payload );
            const collection = yield axios.delete('/api/collection/' + action.payload.album_id + '/' + action.payload.user_id);
            console.log('In deleteCollectionRecord() saga generator. collection data = ', collection.data);
            //  yield put({ type: 'FETCH_COLLECTION_SAGA', payload: action.payload });
   } catch(err) {
        console.log('Error in deleteCollectionRecord() saga generator.', err);
    }
}

function* updateCollectionRecord(action){
    try {
            console.log('In updateCollectionRecord() saga generator.', action.payload );
            const collection = yield axios.put('/api/collection/' + action.payload.rating + '/' + action.payload.album_id + '/' + action.payload.user_id);
            console.log('In updateCollectionRecord() saga generator. collection data = ', collection.data);
            //  yield put({ type: 'FETCH_COLLECTION_SAGA', payload: action.payload });
   } catch(err) {
        console.log('Error in updateCollectionRecord() saga generator.', err);
    }
}

function* collectionSaga() {
    yield takeLatest('FETCH_COLLECTION_SAGA', fetchCollection);
    yield call('SET_COLLECTION_RECORD_SAGA', setCollectionRecord);
    yield call('DELETE_COLLECTION_RECORD_SAGA', deleteCollectionRecord);
    yield takeLatest('UPDATE_COLLECTION_RECORD_SAGA', updateCollectionRecord);
}

export default collectionSaga;