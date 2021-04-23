const wantlistReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_WANTLIST':
            console.log('In wantlist() reducer payload = ', action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default wantlistReducer;