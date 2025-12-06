import { useUsers } from "../hook/useUsers";
import { Link } from "react-router-dom";

function UserItem({ user , onDelete}) {
  const { deleteUser } = useUsers();

  return (
    <>
      <div>
        <legend>Perfil:</legend>
        <span>
          {user.name} <br></br>
          {user.email} <br></br>
          {user.password} <br></br>
        </span>
      </div>

      <div>
        <Link to={`/update/${user.id}`}>
          <button type="button">Modificar</button>
        </Link>

        <button
          type="button"
          onClick={() => {
            if (window.confirm(`¿Estás seguro de eliminar a ${user.name}?`)) {
              onDelete(user.id);
            }
          }}
        >
          Eliminar
        </button>
      </div>
    </>
  );
}

export default UserItem;
