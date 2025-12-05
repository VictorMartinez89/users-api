import {useUsers} from "../hook/UserContext"
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";

function CreateUser() {
   const navigate = useNavigate();
  const {createUser, loading, error, successMessage} =useUsers();

    const handleSubmit = async (userData) => {
    try {
      await createUser(userData);
      // Redirigir después de 2 segundos
      setTimeout(() => {
        navigate('/users');
      }, 2000);
    } catch (error) {
      console.error('Error al crear usuario:', error);
    }
  };


  return(
    <>
      <h2 className="bg-emerald-700">Crear Nuevo Usuario</h2>
      
      {successMessage && (
        <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          ✅ {successMessage}
        </div>
      )}
      
      <UserForm 
        onSubmit={handleSubmit} 
        loading={loading}
        apiError={error}
      />
    </>
  )
    
}
export default CreateUser;