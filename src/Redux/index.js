import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//my reducers
import {blogReducer} from './reducers/blogReducer';
import {userReducer} from './reducers/userReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  blog: blogReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['blog', 'user'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
