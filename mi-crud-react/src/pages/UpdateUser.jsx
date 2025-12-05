import { useParams } from "react-router-dom";
import { useUsers } from "../hook/UserContext";
import { useState } from "react";


export default function UpdateUser() {
  const { id } = useParams();
  const { users, updateUser, loading } = useUsers();

  const user = users.find((u) => u.id == id);

  const [form, setForm] = useState(() => ({
    name: user?.name || "",
    email: user?.email || "",
    city: user?.city || "",
  }));

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user.id, { ...form, id: user.id });
  };

  if (!user) {
    return <p>Usuario no encontrado</p>;
  }

  return (
    <>
      
      <h2>Editar Usuario</h2>
      {loading ? (
        <p>Guardando cambios...</p>
      ) : (

        
        <form onSubmit={handleSubmit} className="flex flex-col bg-yellow-500 text-amber-200">
          <legend>Perfil:{users.id}</legend>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre"
            required
            className="bg-yellow-500 text-amber-200"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
             className="bg-yellow-500 text-amber-200"
          />
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Ciudad"
            required
             className="bg-yellow-500 text-amber-200"
          />

          <button type="submit"  className="bg-yellow-500 text-amber-200">Guardar cambios</button>
        </form>
      )}
    </>
  );
}
