import {types} from '../types/types'

const proyectActive = (state = {}, action) => {
    switch (action.type) {
        case types.proyectActive:
            return {
                ...state,
                active: {...action.payload}
            }
        default:
        return state;
    }
}

export default proyectActive