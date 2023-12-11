import api from "./api.js";

const PickAPI = {
  getAllServices: async () => {
    try {
      const response = await api.get("/api/Pick");
      return response.data;
    } catch (error) {
      console.error("Error fetching services:", error);
      throw error;
    }
  },

  // Add other service-related API functions here
};

export default PickAPI;
