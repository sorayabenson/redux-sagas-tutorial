import { Types } from '../actions/users';
// imports types from actions

const INITIAL_STATE = {
    users: []
}

export default function users(state = INITIAL_STATE, action){
    switch(action.type) {
        case Types.GET_USERS_SUCCESS: {
            return {
                users: action.payload.users
            }
        }
        default: {
            return state;
        }
    }
}
