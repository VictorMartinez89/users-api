import {useUsers}  from "../hook/useUsers";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";

import { useEffect, useState } from "react";

function CreateUser() {
  const navigate = useNavigate();
  const { createUser, loading, error, successMessage } = useUsers();
  const [localSuccess, setLocalSuccess] = useState("");

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

  const handleSubmit = async (userData) => {
    try {
      await createUser(userData);
      // Redirigir después de 2 segundos
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  };

  return (
    <>
      <h2 className="bg-emerald-700">Crear Nuevo Usuario</h2>

      {localSuccess && (
        <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          ✅ {localSuccess}
        </div>
      )}

      <UserForm onSubmit={handleSubmit} loading={loading} apiError={error} />
    </>
  );
}
export default CreateUser;
