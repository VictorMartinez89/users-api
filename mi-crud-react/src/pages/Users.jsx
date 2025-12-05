import {useUsers} from "../hook/UserContext";
import UserList from "../components/UserList";


function User() {

  const {users, loading} = useUsers();


  return (
    <div>
      {" "}
      <h2>Nuestros Usuarios</h2>
    {loading && <p> Loading ...</p> }
    <UserList users={users}/>
    </div>
  );
}
export default User;
