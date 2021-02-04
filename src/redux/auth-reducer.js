const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    firsName: null,
    lastName: null,
    email: null,
    userName: null,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state

    }
}

export const setUserData = (id, email, userName) => ({type: SET_USER_DATA, data: {id, email, userName}})


export default authReducer;