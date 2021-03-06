import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import collection from './collection.reducer';
import wantlist from './wantlist.reducer';
import search from './search.reducer';
import record from './record.reducer';
import collectionPost from './collectionpost.reducer';
import friends from './friends.reducer';
import friend from './friend.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  collection, // will display the users collection
  wantlist, // will display the users wantlist
  search, // will display search results
  record, // will fire when clicking into record
  collectionPost, // will fire post to collection
  friends, // will get all of other user's data
  friend, // will get all of a friend's data
});

export default rootReducer;
