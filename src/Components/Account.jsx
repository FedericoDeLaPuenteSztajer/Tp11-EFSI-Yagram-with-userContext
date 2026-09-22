import { useContext } from 'react';

import SmallPost from './SmallPost.jsx'
import ViewingUserContext from "../Context/ViewingUserContext.jsx"

function Account(props) {

    const account = useContext(ViewingUserContext);

    return (
         <>
            {account == null && <p>Cargando...</p>}
            {account != null &&<div className='Account'>
                <h2>{account.name}</h2>
                <img src={account.img} id='accImg' />
                <p>{account.desc}</p>

                {props.userAccount==account && <button>Editar</button>} 

                <ul>
                    <li>Cantidad de Publicaciones: {account.cantPosts}</li>
                    <li>Cantidad de Seguidores: {account.cantFollowers}</li>
                    <li>Cantidad de Seguidos: {account.cantFollows}</li>
                </ul>

                {/** Simulador de posts */}
                <SmallPost ViewPost={props.ViewPost} />
            </div>}
        </>
    )
}

export default Account;
