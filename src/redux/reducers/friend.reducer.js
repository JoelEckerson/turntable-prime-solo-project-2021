const friendReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_FRIEND':
            console.log('In friend() reducer payload = ', action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default friendReducer;