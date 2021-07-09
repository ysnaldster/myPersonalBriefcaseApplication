import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import loadProyects from '../reducers/loadProyects'
import proyectActive from '../reducers/proyectActive'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    proyects: loadProyects,
    proyectActive: proyectActive
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);