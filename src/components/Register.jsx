import { useState } from "react";
import api from "../utils/api";

const Register = () => {
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

    if (formData.password !== formData.passwordRepeat) {
      console.log("Password no coinciden");
      return;
    }

    const userData = {
      email: formData.user,
      password: formData.password,
    };

    try {
      const data = await api.createUser(userData);
      console.log("Usuario creado", data);
    } catch (error) {
      console.error("Error de registro", error.message);
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
        <input
          value={formData.passwordRepeat}
          name="passwordRepeat"
          type="password"
          placeholder="password repeat"
          onChange={handleChange}
        />
        <button>SUBMIT</button>
      </form>
    </>
  );
};

export default Register;
