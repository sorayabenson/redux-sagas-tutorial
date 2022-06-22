// sagas describe the flow of how side effects are called

import * as actions from '../actions/users';
import * as api from '../api/users'
import { takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects';
// takeEvery takes every dispatched action that we specify. it is a helper that reacts to dispatched actions. it is running a while(true) loop.

// takeLatest works similar to takeEvery. it keeps up with the user, if you update the data, switch tabs, whatever, it stops the current call and uses the newest information.

// fork creates child processes.  

// '*' defines a generator function
// worker saga
function* getUsers() {
    try {
        const res = yield call(api.getUsers);
        
        yield put(actions.getUsersSuccess({
            users: res.data.data
        }));
    } catch(e) {
        
    }
}

function* createUser(action) {
    // extracting properties from the redux action that was dispatched
    try {
        const res = yield call(api.createUser, { firstName: action.payload.firstName , lastName: action.payload.lastName});
        console.log("HEY", res)
        yield call(getUsers);
    } catch (e) {

    }
}

// watcher saga, it looks when a redux action has been dispatched. it acts on that action by calling a worker saga
function* watchGetUsersRequest() {
    console.log("hell")
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* watchCreateUserRequest() {
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser)
}

const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest)
];

export default usersSagas;