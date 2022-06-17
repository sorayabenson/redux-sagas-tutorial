import { all } from 'redux-saga/effects';
// like promise.resolveAll, it only acts when everything is resolved using forked processes
import usersSagas from './users';

export default function* rootSaga() {
    yield all([
        ...usersSagas,
    ]);
}