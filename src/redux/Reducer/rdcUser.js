import actUser from "../Action/actUser";

const initialState = {
    lsUser: [1, 2]
}

const rdcUser = (state = initialState, { type, payload }) => {
    switch (type) {
        case actUser.GET_USER:
            return {
                ...state,
                lsUser: [1, 2, 3, 4, 5, 6]
            }
        case actUser.SET_USER:
            return {
                ...state,
                lsUser: payload
            }
        default:
            return state;
    }
}

export default rdcUser;