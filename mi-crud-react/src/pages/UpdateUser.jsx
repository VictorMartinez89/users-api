import { useParams, useNavigate } from "react-router-dom";
import { useUsers } from "../hook/UserContext";
import UserForm from "../components/UserForm";
import { useEffect, useState } from "react";

export default function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, updateUser, loading, error, successMessage, fetchUsers } =
    useUsers();
  const [user, setUser] = useState(null);

  //const user = users.find((u) => u.id == id);
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    if (users.length > 0) {
      const foundUser = users.find((u) => u.id === parseInt(id));
      if (foundUser) {
        setUser(foundUser);
      }
    }
  }, [users, id]);

  /*const [form, setForm] = useState(() => ({
    name: user?.name || "",
    email: user?.email || "",
    password: user?.password || ""
  }));
*/
  /*
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    //onSubmit(form)
    updateUser(user.id, { ...form, id: user.id });
  };

  */

  const handleSubmit = async (userData) => {
    try {
      await updateUser(id, userData);
      // Redirigir después de 2 segundos
      setTimeout(() => {
        navigate("/users");
      }, 4000);
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
    }
  };


    return (
      <>
         <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Editar Usuario</h2>
      
      {successMessage && (
        <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          ✅ {successMessage}
        </div>
      )}
      
          <UserForm
            user={user}
            onSubmit={handleSubmit}
            loading={loading}
            apiError={error} // Cambiado de 'error' a 'apiError'
          />
          </div>
      
      </>
    );
  
}
