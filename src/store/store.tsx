import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  ))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
 
export default store