import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg"
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";
import { registerRoute } from "../utils/APIRoutes";


const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    username:"",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  }

  useEffect(() => {
    if(localStorage.getItem("chat-app-user")) {
      navigate("/")
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(handleValidation()){
      const { password, username, email } = values;
        const { data } = await axios.post(registerRoute, {
          username,
          email,
          password,
        });
      if(data.status === false) {
        toast.error(data.message, toastOptions);
      }
       if(data.status === true) {
        localStorage.setItem('chat-ap-user', JSON.stringify(data.user));
        navigate("/")
    }}
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;

    if(password !== confirmPassword) {
      toast.error("password and confirm password should be the same", 
      toastOptions
      );
      return false
  } else if(username.length < 3){
    toast.error(
        "username should be greater than three (3) characters",
        toastOptions
    );
    return false;
  } else if(password.length < 8){
    toast.error(
        "Password should be equal or greater than eight (8) characters",
        toastOptions
    );
    return false;
  } else if(email === ""){
    toast.error(
        "Please enter your email",
        toastOptions
    );
    return false;
  }
    return true;
 };
  const handleChange = (event) => {
    event.preventDefault();
    setValues({
     ...values,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="register">
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>Talk<span className="red">2</span>me</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User </button>
          <span>
            Already have an account ? <Link to="/login">Login</Link>{" "}
          </span>
        </form>
      <ToastContainer />
    </div>
  );
};



export default Register;
