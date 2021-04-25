const recordReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_RECORD':
            console.log('In record() reducer payload = ', action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default recordReducer;