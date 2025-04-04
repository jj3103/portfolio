import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchChat = async (input) => {
  try {
    const response = await api.post(`/api/chat`, { input });
    return response.data.reply;
  } catch (error) {
    console.error("API Error:", error);
    return "Oops! Something went wrong.";
  }
};
