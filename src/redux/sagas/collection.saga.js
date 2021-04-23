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

function* collectionSaga() {
    yield takeLatest('FETCH_COLLECTION_SAGA', fetchCollection);
}

export default collectionSaga;