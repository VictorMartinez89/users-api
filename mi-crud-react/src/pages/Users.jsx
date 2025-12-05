import { useUsers } from "../hook/UserContext";
import UserList from "../components/UserList";
import { useEffect } from "react";

function User() {
  const { users, loading, error, fetchUser, deleteUser, successMessage } =
    useUsers();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      // Recargar lista después de eliminar
      await fetchUser();
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  return (
    <div>
      {" "}
      <h2>Nuestros Usuarios</h2>
      {successMessage && (
        <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          ✅ {successMessage}
        </div>
      )}
      {error && (
        <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          ⚠️ <strong>Error:</strong> {error}
        </div>
      )}
      {loading && <p className="text-gray-600">Cargando usuarios...</p>}
      <UserList users={users} onDelete={handleDelete} />
    </div>
  );
}
export default User;
