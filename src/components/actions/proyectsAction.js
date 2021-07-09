import loadingProyects from "../helpers/loadingProyects";
import { types } from '../types/types'

export const proyectsLoad = () => {
    return async (dispatch) => {
        const proyects = await loadingProyects()
        dispatch(setProyects(proyects))
    }
}

export const setProyects = (proyects) => {
    return {
        type: types.uiProyectsLoad,
        payload: proyects
    }
}

export const proyectActive = (id, proyect) => ({
    type: types.proyectActive,
    payload: {
        id,
        ...proyect
    }
});