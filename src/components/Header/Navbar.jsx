import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="nav">
      <NavLink to="/">DASHBOARD</NavLink>
      <NavLink to="/login">LOGIN</NavLink>
      <NavLink to="register">REGISTER</NavLink>
      <NavLink to="/protegido">PROTEGIDO</NavLink>

      <button onClick={handleLogout}>LOGOUT</button>
    </nav>
  );
};

export default Navbar;
