const collectionRecordReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_COLLECTION_RECORD':
            console.log('In setCollectionRecord() reducer payload = ', action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default collectionRecordReducer;