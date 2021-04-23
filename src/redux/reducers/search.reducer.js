const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SEARCH':
            console.log('In search() reducer payload = ', action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default searchReducer;