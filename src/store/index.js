import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Promise middleware se encarga de trabajar con las promesas
//Retrasa la resolucion y una vez que tiene la resolucion de la promise, recien ahi concluye la accion
export const store = createStore(reducers, {}, 
    composeEnhancers(applyMiddleware(promiseMiddleware)));