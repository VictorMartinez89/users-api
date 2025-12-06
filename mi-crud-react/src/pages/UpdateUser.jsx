import { useParams, useNavigate } from "react-router-dom";
import { useUsers } from "../hook/useUsers";
import UserForm from "../components/UserForm";
import { useEffect, useState } from "react";

export default function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, updateUser, loading, error, successMessage } = useUsers();
  const [user, setUser] = useState(null);
  const [localSuccess, setLocalSuccess] = useState("");

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

  useEffect(() => {
    if (successMessage) {
      setLocalSuccess(successMessage);
      // Redirigir después de mostrar mensaje de éxito
      const timer = setTimeout(() => {
        navigate("/users");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, navigate]);

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
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
    }
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[300px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando usuario...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Editar Usuario</h2>

        {localSuccess && (
          <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            ✅ {localSuccess}
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
