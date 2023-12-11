import api from "./api.js";

const userAPI = {
  getAllUsers: async () => {
    try {
      const response = await api.get("/api/User");
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  },

  // Add other user-related API functions here
};

export default userAPI;
