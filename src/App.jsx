import "./App.css";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Protegido from "./components/Header/Protegido";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/protegido"
          element={
            <ProtectedRoute>
              <Protegido />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
