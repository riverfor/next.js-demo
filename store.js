import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import {rootSaga} from './rootSaga'
import createSagaMiddleware from 'redux-saga'


// Redux DevTools

const sagaMiddleware = createSagaMiddleware()

const initializeStore = (initialState) => {
  const store =  createStore(reducer, initialState, compose(
    applyMiddleware(
      sagaMiddleware
    )
  ))

  sagaMiddleware.run(rootSaga)

  return store
}


export { initializeStore }
