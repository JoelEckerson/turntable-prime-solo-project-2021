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
            console.log('In setCollectionRecord() saga generator.', action.payload );
            const collection = yield axios.post('/api/collection/', action.payload );
            console.log('In setCollectionRecord() saga generator. collection data = ', collection.data);
            // yield put({ type: 'FETCH_RECORD', payload: collection.data });
    } catch {
        console.log('Error in setCollectionRecord() saga generator.');
    }
}

function* deleteCollectionRecord(action){
    try {
            console.log('In deleteCollectionRecord() saga generator.', action.payload );
            const collection = yield axios.delete('/api/collection/', action.payload );
            console.log('In deleteCollectionRecord() saga generator. collection data = ', collection.data);
            // yield put({ type: 'FETCH_RECORD', payload: collection.data });
    } catch {
        console.log('Error in deleteCollectionRecord() saga generator.');
    }
}

function* collectionSaga() {
    yield takeLatest('FETCH_COLLECTION_SAGA', fetchCollection);
    yield takeLatest('SET_COLLECTION_RECORD_SAGA', setCollectionRecord);
    yield takeLatest('DELETE_COLLECTION_RECORD_SAGA', deleteCollectionRecord);
}

export default collectionSaga;