import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg"
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";


const Login = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    username:"",
    password: "",
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
      const { password, username } = values;
        const { data } = await axios.post(loginRoute, {
          username,
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
    const { password, username } = values;

    if(password == "") {
      toast.error("Email and password is required", 
      toastOptions
      );
      return false
  } else if(username.length === "" ){
    toast.error(
        "Email and password is required",
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
            min= "3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          
          <button type="submit">Login </button>
          <span>
            Don't have an account ? <Link to="/register">Register</Link>{" "}
          </span>
        </form>
      <ToastContainer />
    </div>
  );
};



export default Login;
