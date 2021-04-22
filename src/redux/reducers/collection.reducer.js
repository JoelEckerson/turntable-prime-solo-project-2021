const collectionReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_COLLECTION':
            console.log('In collection() reducer payload = ', action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default collectionReducer;