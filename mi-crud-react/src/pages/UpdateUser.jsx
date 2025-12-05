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
    password: user?.password || ""
  }));

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    //onSubmit(form)
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
            className="bg-white text-amber-200"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
             className="bg-white text-amber-200"
          />
          <input
            name="password"
            value={form.password}
            type="password"
            onChange={handleChange}
            placeholder="Contrasena"
            required
             className="bg-white text-amber-200"
          />

          <button type="submit"  className="bg-yellow-500 text-amber-200">Guardar cambios</button>
        </form>
      )}
    </>
  );
}
