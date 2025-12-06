import { useUsers } from "../hook/useUsers";
import UserList from "../components/UserList";
import { useEffect, useState } from "react";

function User() {
  const { users, loading, error, fetchUser, deleteUser, successMessage } =
    useUsers();
  const [localSuccess, setLocalSuccess] = useState("");

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (successMessage) {
      setLocalSuccess(successMessage);
      // Limpiar mensaje después de 3 segundos
      const timer = setTimeout(() => {
        setLocalSuccess("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      // Recargar lista después de eliminar
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  return (
    <div>
      {" "}
      <h2>Nuestros Usuarios</h2>
      {localSuccess && (
        <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          ✅ {localSuccess}
        </div>
      )}
      {error && (
        <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          ⚠️ <strong>Error:</strong> {error}
        </div>
      )}
      {loading && <p className="text-gray-600">Cargando usuarios...</p>}
      {!loading && !error && users.length === 0 && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
          No hay usuarios registrados
        </div>
      )}
      {!loading && !error && users.length > 0 && (
        <UserList users={users} onDelete={handleDelete} />
      )}
    </div>
  );
}
export default User;
