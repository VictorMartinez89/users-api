import { useState, useEffect } from "react";

function UserForm({ user, onSubmit, loading, apiError }) {
  const [error, setError] = useState({});
  const [formulario, setFormulario] = useState({
    name: "",
    email: "",
    password: "",
  });

  

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        password: user.password || "", // No mostrar contraseña por seguridad
      });
    }
  }, [user]);

  const validateForm = () => {
    const newErrors = {};

    if (!formulario.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formulario.email) {
      newErrors.email = "El email es requerido";
    } else if (!emailRegex.test(formulario.email)) {
      newErrors.email = "Email inválido";
    }

    if (!user && !formulario.password) {
      newErrors.password = "La contraseña es requerida";
    } else if (!user && formulario.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
    if (error[e.target.name]) {
      setError((prev) => ({
        ...prev,
        [e.target.name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      
        const dataToSubmit =
        user && !formulario.password
          ? { name: formulario.name, email: formulario.email }
          : formulario;

      onSubmit(dataToSubmit);
    }
    //onSubmit(formulario);

    setFormulario({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">
        {user ? "Editar Usuario" : "Crear Nuevo Usuario"}
      </h2>

      {apiError && (
        <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong>Error:</strong> {apiError}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <legend>Perfil:</legend>
        <label htmlFor="">
          <input
            name="name"
            type="text"
            placeholder="Nombre"
            value={formulario.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${
              error.name ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {error.name && (
            <p className="text-red-500 text-xs mt-1">{error.name}</p>
          )}
        </label>
        <label htmlFor="">
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={formulario.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${
              error.email ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {error.email && (
            <p className="text-red-500 text-xs mt-1">{error.email}</p>
          )}
        </label>
        <label htmlFor="">
          {user
            ? "Nueva Contraseña (dejar en blanco para mantener)"
            : "Contraseña *"}

          <input
            name="password"
            type="text"
            placeholder={user ? "Nueva contraseña" : "Mínimo 6 caracteres"}
            value={formulario.password}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${
              error.password ? "border-red-500" : "border-gray-300"
            }`}
            required={!user}
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          {loading ? 'Guardando...' : (user ? 'Actualizar' : 'Crear')}
        </button>
      </form>
    </>
  );
}

export default UserForm;
