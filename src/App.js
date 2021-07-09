import React, { useEffect} from "react";
import Home from './containers/Home.jsx';
import ProyectsPerfomance from './containers/ProyectsPerfomance.jsx';
import { useDispatch } from 'react-redux'
import { proyectsLoad } from './components/actions/proyectsAction'

function App() {

    // const [checking, setChecking] = useState(true)
    // const [isLoogedIn, setsIsLoogedIn] = useState(false)
    const dispatch = useDispatch();

    // Se inspecciona para saber si esta autenticado el usuario
    useEffect(() => {
        // firebase.auth().onAuthStateChanged(async (user) => {
        //     console.log(user);
        //     if (user?.uid) {
        //         dispatch(login(user.uid, user.displayName, user.email, user.photoURL))
        //         setsIsLoogedIn(true)
        //         dispatch(startLoadingUser(user.uid))

        //         dispatch(startGetContent())

        //     } else {
        //         setsIsLoogedIn(false)
        //     }

        //     setChecking(false)
        // })
        // const data = (nombre) => {
        //     dispatch(proyectosLoad(nombre))
        // }

        dispatch(proyectsLoad());

    }, [dispatch])
    // if (checking) {
    //     return (

    //         <h1>Cargando....</h1>
    //     )
    // }

    return (
        <div>
            <Home hello='¡Hola a todos!'
                name=' Soy Ysnaldo López'
                description='Developer que le encanta el desarrolo de diseños que se adaptan a las necesidades y requerimientos exigidos de las personas.'
                direction = 'https://i.ibb.co/b2JX0qr/Imagen-Oficial.jpg' />
            <ProyectsPerfomance
                title = 'Parece magia, funciona con código'
                description = 'A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles'
            />
        </div>
    );
}

export default App;
