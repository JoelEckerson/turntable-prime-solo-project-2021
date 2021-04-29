const friendsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_FRIENDS':
            console.log('In friends() reducer payload = ', action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default friendsReducer;