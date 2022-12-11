import axiosInstance from "../axios";

export const getNPMPackages = async (searchQuery = "") => {
  try {
    const endpoint = `search?q='${searchQuery}'`;
    const response = await axiosInstance.get(endpoint);
    return response?.data;
  } catch (error) {
    throw error;
  }
};
