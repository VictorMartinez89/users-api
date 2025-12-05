// src/services/api.js
import axios from "axios";

const API_URL = 'http://localhost:8080/api/users';

export async function getUsers() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function createUser(user) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  return res.json();
}

export async function updateUser(id, user) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  return res.json();
}

export async function deleteUser(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}











/*

await fetch("http://localhost:8080/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Juan",
    email: "juan@example.com",
    password: "123456",
  }),
});*/
/*
// Configuración base de Axios
const api = axios.create({
  baseURL: "http://localhost:8080/api", // Ajusta según tu backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para añadir token de autenticación si existe
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Servicio para operaciones CRUD de usuarios
const userService = {
  // CREATE - Crear usuario
  createUser: async (userData) => {
    try {
      // const response = await api.post('/users', userData);
      // return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // READ - Obtener todos los usuarios
  getAllUsers: async (params = {}) => {
    try {
      const response = await api.get("/users", { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // READ - Obtener usuario por ID
  getUserById: async (id) => {
    try {
      const response = await api.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // UPDATE - Actualizar usuario
  updateUser: async (id, userData) => {
    try {
      const response = await api.put(`/users/${id}`, userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // DELETE - Eliminar usuario
  deleteUser: async (id) => {
    try {
      const response = await api.delete(`/users/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Opcional: Búsqueda o filtros
  searchUsers: async (searchTerm) => {
    try {
      const response = await api.get("/users/search", {
        params: { q: searchTerm },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};
*/
