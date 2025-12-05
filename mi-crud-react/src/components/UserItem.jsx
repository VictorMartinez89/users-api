
import {useUsers} from '../hook/UserContext';
import { Link } from 'react-router-dom';

function UserItem({user}) {
    
    const {deleteUser} = useUsers();

    return(
        <>
        <div>
            <legend>Perfil:</legend>
            <span>
                {user.name} <br></br> 
                {user.email} <br></br>
                {user.city} <br></br>
            </span>

        </div>

        <div>
            <Link to={`/update/${user.id}`}>
            <button type="button">Modificar</button>
            </Link>

            <button type="button" onClick={()=> deleteUser(user.id)}>Eliminar</button>
        </div>

        </>


    );

}

export default UserItem;