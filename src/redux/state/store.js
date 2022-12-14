import { createStore, compose } from 'redux';
import rootReducer from '../reducers'

const enhancers = compose(
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(
	rootReducer,
	enhancers
)