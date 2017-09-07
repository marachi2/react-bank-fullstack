import axios from 'axios';

// SET Inital STATE//
const initalState = {
    user: {}
}

const GET_USER_INFO = 'GET_USER_INFO';

//ACTION CREATORS
export function getUserInfo() {
    const userInfo = axios.get('/auth/me').then(res => {
        console.log(res.data)
        return res.data
    })
   
    return {
        type: GET_USER_INFO,
        payload: userInfo
    }
}


//REDUCER FUNCTION
export default function reducer(state = initalState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload});
        default:
            return state;
    }
}