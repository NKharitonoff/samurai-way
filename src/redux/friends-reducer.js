const SET_FRIENDS = "SET-FRIENDS";

let initialState = {friends: []};

const friendsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FRIENDS:
            return {
                ...state,
                friends: [...state.friends, ...action.friends]
            }
        default:
            return state;
    }
}

export const setFriendsAC = (friends) =>({type:SET_FRIENDS, friends})

export default friendsReducer;