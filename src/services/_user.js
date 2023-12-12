import api from "./api.js";

const userAPI = {
  getAllUsers: async () => {
    try {
      const response = await api.get("/User");
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  },

  getUserById: async (id) => {
    try {
      const response = await api.get(`/User/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  },

  createUser: async (user) => {
    try {
      const response = await api.post("/User/register", user);
      return response.data;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },

  updateUser: async (id, user) => {
    try {
      const response = await api.put(`/User/${id}`, user);
      return response.data;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  },

  deleteUser: async (id) => {
    try {
      const response = await api.delete(`/User/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  },

  login: async (user) => {
    try {
      const response = await api.post("/User/login", user);
      return response.data;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  },
};

export default userAPI;
