import { put, takeLatest } from 'redux-saga/effects';
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
            console.log('In setCollectionRecord() saga generator.  id = ', action.payload.userId);
            const collection = yield axios.post('/api/collection/', action.payload );
            console.log('In setCollectionRecord() saga generator. collection data = ', collection.data);
            yield put({ type: 'SET_COLLECTION_RECORD_SAGA', payload: collection.data });
    } catch {
        console.log('Error in setCollectionRecord() saga generator.');
    }
}

function* collectionSaga() {
    yield takeLatest('FETCH_COLLECTION_SAGA', fetchCollection);
    yield takeLatest('SET_COLLECTION_RECORD_SAGA', setCollectionRecord);
}

export default collectionSaga;