// src/services/api.js
import axios from 'axios';

// Configuración base de Axios
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Ajusta según tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para añadir token de autenticación si existe
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
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
      const response = await api.post('/users', userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // READ - Obtener todos los usuarios
  getAllUsers: async (params = {}) => {
    try {
      const response = await api.get('/users', { params });
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
      const response = await api.get('/users/search', {
        params: { q: searchTerm }
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};

export default userService;