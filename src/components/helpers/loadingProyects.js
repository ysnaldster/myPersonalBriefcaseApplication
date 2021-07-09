import { db } from "../firebase/firebase-config"

const loadingProyects = async () => {
    const getProyects = await db.collection(`/proyects/`).get();
    const proyects = [];

    getProyects.forEach(p => {
        proyects.push({
            id: p.id,
            ...p.data()
        })
    })

    return proyects;
}

export default loadingProyects