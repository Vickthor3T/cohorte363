class Api {
  constructor(baseURL) {
    this._baseUrl = baseURL;
  }

  async createUser(userData) {
    try {
      const response = await fetch(`${this._baseUrl}auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      return data;
    } catch (error) {
      console.error("API ERROR", error.message);
    }
  }

  async loginUser(userData) {
    try {
      const response = await fetch(`${this._baseUrl}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      return data;
    } catch (error) {
      console.error("API ERROR", error.message);
    }
  }
}

const api = new Api("http://localhost:3001/api/");

export default api;
