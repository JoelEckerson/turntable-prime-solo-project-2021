import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchSearch(action){
    try {
            console.log('In searchSaga() saga generator.  id = ', action.payload);
            const search = yield axios.get('/api/search/' + action.payload );
            console.log('In searchSaga() saga generator. search data = ', search.data);
            yield put({ type: 'FETCH_SEARCH', payload: search.data });
    } catch(err) {
        console.log('Error in searchSaga() saga generator: ', err);
    }
}

function* searchSaga() {
    yield takeLatest('FETCH_SEARCH_SAGA', fetchSearch);
}

export default searchSaga;