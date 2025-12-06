import { useState, useCallback } from "react";
import _users from "../assets/users.json";
import { getUsers, createUser, updateUser, deleteUser } from "../service/api";


 export const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  
  const fetchUser = useCallback( async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError(error.message || " Error fetching users");
    } finally {
      setLoading(false);
    }
  }, []);

//  useEffect(() => {
//    fetchUser();
//  }, []);

  const fakeDelay = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage("");
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
  };

  const createUser = async (user) => {
    await fakeDelay();
    //setUsers([...users, {...user, id: Date.now()}]);
    setLoading(true);
    setError(null);
    setSuccessMessage("");
    try {
      const newUser = await createUser(user);
      setUsers((prev) => [...user, newUser]);
      setSuccessMessage("Usuario creado exitosamente");
      alert("Usuarios ha creado ");
      return newUser;
    } catch (err) {
      setError(err.message || "Error al crear usuario");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (id, updateUser) => {
    await fakeDelay();
    //setUsers(users.map((user)=>(user.id===id? updateUser : user)));
    setLoading(true);
    setError(null);
    setSuccessMessage("");
    try {
      const updatedUser = await updateUser(id, updateUser);
      setUsers((prev) =>
        prev.map((user) => (user.id === id ? updatedUser : user))
      );
      setSuccessMessage("Usuario actualizado exitosamente");
      alert("Modificado correcto!");
      return updatedUser;
    } catch (err) {
      setError(err.message || "Error al actualizar usuario");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    await fakeDelay();
    //setUsers(users.filter((user) => user.id !== id));
    setLoading(true);
    setError(null);
    setSuccessMessage("");
    try {
      await deleteUser(id);
      setUsers((prev) => prev.filter((user) => user.id !== id));
      setSuccessMessage("Usuario eliminado exitosamente");
      alert("Usuario ha eliminado");
    } catch (err) {
      setError(err.message || "Error al eliminar usuario");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
        users,
        fetchUser,
        createUser,
        updateUser,
        deleteUser,
        loading,
        error,
        successMessage,
        setError,
        setSuccessMessage,
      };
}
