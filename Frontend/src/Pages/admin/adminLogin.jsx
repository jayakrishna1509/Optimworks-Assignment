import { TextField, Button } from "@mui/material";
import "../../Styles/client/login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [state, setAdminState] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const submitAdminForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let data = await fetch("https://consulto.onrender.com/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: state.email,
          password: state.password,
        }),
      });

      let response = await data.json();

      if (!response.success) {
        throw new Error(response.message || "Login failed");
      }

      toast.success(response.message || "Login Successful");
      const admin = {
        adminToken: response.token,
        email: response.email,
      };
      localStorage.setItem("Admin", JSON.stringify(admin));
      setTimeout(() => {
        navigate("/admin");
      }, 1500);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Invalid admin credentials");
    } finally {
      setIsLoading(false);
      setAdminState({ email: "", password: "" });
    }
  };

  const handleChange = (e) => {
    setAdminState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className="admin">
      <div className="top-buttons">
        <Button variant="outlined" className="top-btn">
          <Link className="link" to="/doctorlogin">
            Doc Login
          </Link>
        </Button>
        <Button variant="outlined" className="top-btn">
          <Link className="link" to="/">
            Back to User
          </Link>
        </Button>
      </div>
      <div className="mainContainer">
        <h1>WELCOME BACK, ADMIN</h1>
        <div className="authWrapper">
          <div className="logo">
            <img
              src="/Consulto_Logo.png"
              className="Image"
              alt="Consulto Logo"
            />
          </div>
          <div className="loginContainer">
            <form id="loginForm" onSubmit={submitAdminForm}>
              <TextField
                required
                label="Email"
                type="email"
                name="email"
                onChange={handleChange}
              />
              <TextField
                required
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
              />
              <Button variant="contained" type="submit" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login Now"}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
