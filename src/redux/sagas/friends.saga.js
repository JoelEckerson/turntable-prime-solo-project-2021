import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchFriends(action){
    try {
            console.log('In friendsSaga() saga generator.');
            const friends = yield axios.get('/api/user/users');
            console.log('In friendsSaga() saga generator. friends data = ', friends.data);
            yield put({ type: 'FETCH_FRIENDS', payload: friends.data });
    } catch {
        console.log('Error in friendsSaga() saga generator.');
    }
}

function* friendsSaga() {
    yield takeLatest('FETCH_FRIENDS_SAGA', fetchFriends);
}

export default fetchFriends