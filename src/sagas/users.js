// sagas describe the flow of how side effects are called

import * as actions from '../actions/users';
import * as api from '../api/users'
import { takeEvery, call, fork, put } from 'redux-saga/effects';
// takeEvery takes every dispatched action that we specify. it is a helper that reacts to dispatched actions. it is running a while(true) loop.

// fork creates child processes.  

// '*' defines a generator function
// worker saga
function* getUsers() {
    try {
        const res = yield call(api.getUsers);

        console.log(res.data.data)

        yield put(actions.getUsersSuccess({
            users: res.data.data
        }));
    } catch(e) {
        console.log("yikes bebe", e)
    }
}

// watcher saga, it looks when a redux action has been dispatched. it acts on that action by calling a worker saga
function* watchGetUsersRequest() {
    console.log("hell")
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const usersSagas = [
    fork(watchGetUsersRequest)
];

export default usersSagas;