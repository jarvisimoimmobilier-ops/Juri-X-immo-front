import axios from "axios";
import Swal from "sweetalert2";

const BASE_URL = "http://localhost:5000/api/v1";

const handleLogout = (res) => {
  if (res.status === 500) {
    Swal.fire({
      title: "Logged out",
      text: "Probably your session has ended",
      icon: "error",
      confirmButtonText: "Log In",
    }).then(() => {
      // Redirect to the login page
      window.location.href = "/login";
    });
  }
};

export const apiService = {
  register: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, userData);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      // Handle or throw the Axios error as needed
      throw new Error(
        error.response.data.error || "Network error during registration"
      );
    }
  },

  login: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, userData);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      // Check if the error is an Axios error and has a response
      if (error.response) {
        // Throw the error message from the server, if available
        throw new Error(
          error.response.data.error || "Error occurred during login"
        );
      } else {
        // Handle non-Axios errors (like network issues)
        throw new Error("Network error occurred during login");
      }
    }
  },

  logOut: async () => {
    localStorage.clear();
  },

  post: async (path, data) => {
    const headers = { Authorization: localStorage.getItem("token") };
    try {
      const response = await axios.post(BASE_URL + path, data, { headers });
      return response;
    } catch (error) {
      console.log(error);
      handleLogout(error.response);
      throw new Error(
        error.response.data.error ||
          "Network error during creating a ressource "
      );
    }
  },

  get: async (path, id) => {
    const headers = { Authorization: localStorage.getItem("token") };
    console.log(headers);
    try {
      const response = await axios.get(
        BASE_URL + path + (id == undefined ? "" : "/" + id),
        { headers }
      );
      return response;
    } catch (error) {
      console.log(error);
      handleLogout(error.response);
      throw new Error(
        error.response.data.error || "Network error during getting ressources "
      );
    }
  },

  delete: async (path, id) => {
    const headers = { Authorization: localStorage.getItem("token") };
    try {
      const response = await axios.delete(BASE_URL + path + "/" + id, {
        headers,
      });
      return response;
    } catch (error) {
      console.log(error);
      handleLogout(error.response);
      throw new Error(
        error.response.data.error || "Network error during deleting ressources "
      );
    }
  },
  
  put: async (path, id, data) => {
    const headers = { Authorization: localStorage.getItem("token") };
    try {
      const response = await axios.put(BASE_URL + path + (id == undefined ? "" : "/" + id), data, {
        headers,
      });
      return response;
    } catch (error) {
      console.log(error);
      handleLogout(error.response);
      throw new Error(
        error.response.data.error || "Network error during updating ressources "
      );
    }
  },

  updateUser: async (path, data) => {
    const headers = { Authorization: localStorage.getItem("token") };
    try {
      const response = await axios.put(BASE_URL + path, data, {
        headers,
      });
      return response;
    } catch (error) {
      console.log(error);
      handleLogout(error.response);
      throw new Error(
        error.response.data.error || "Network error during updating ressources "
      );
    }
  },
};
