import { createStore, compose, applyMiddleware, Action } from 'redux'
import thunk from 'redux-thunk'
import rootApp from './store/root'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any
  }
}

const configureStore = () => {
  const store = createStore(
    rootApp,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
        : (f: any) => f
    )
  )

  return store
}

export default configureStore