import {useUsers} from "../hook/UserContext"
import UserForm from "../components/UserForm";

function CreateUser() {

  const {createUser, loading} =useUsers();

  return(
    <>
      <h2 className="bg-emerald-700">Crear Nuevo Usuario</h2>
      {loading ? <p> Creando usuario</p> : <UserForm onSubmit={createUser}/>}
    </>
  )
    
}
export default CreateUser;