import { useState } from "react";
import api from "../utils/api";

const Login = () => {
  const [formData, setFormData] = useState({
    user: "",
    password: "",
    passwordRepeat: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData, //profundizaremos en esto
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password != formData.passwordRepeat) {
      console.log("Los Passwords No coinciden");
      return;
    }

    const userData = {
      email: formData.user,
      password: formData.password,
    };

    try {
      const data = await api.loginUser(userData);
      localStorage.setItem("token", data.token);
      console.log("Usuario Autenticado", data);
    } catch (error) {
      console.error("Error de Autenticación", error.message);
    }
  };

  return (
    <>
      <form className="login-form" action="" onSubmit={handleSubmit}>
        <input
          name="user"
          value={formData.user}
          type="text"
          placeholder="user"
          onChange={handleChange}
        />
        <input
          name="password"
          value={formData.password}
          type="password"
          placeholder="password"
          onChange={handleChange}
        />

        <button>LOGIN!!!</button>
      </form>
    </>
  );
};

export default Login;
