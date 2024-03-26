import { useState } from "react"
import axios from "axios"; 
import {useHistory} from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();
  const [name, setName] = useState()
  const [loading, setLoading] = useState(false);
  const history = useHistory()


  const postDetails = (pics) => {
    setLoading(true);

    if(pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "talk2me");
      data.append("cloud_name", "dzgplbgdi");
      fetch("http://api.cloudinary.com/v1/dzgplbgdi/image/upload", {
        method: "post",
        body: data,
      }).then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
      return (
        <div className="toast toast-end">
          <div className="alert alert-info">
            <span>Warning</span>
          </div>
        </div>
      );
    }
  }


  const submitHandler = async () => { 
    setLoading(true)
    if(!name || !email || !password || !confirmpassword) {
      return (
        <div className="toast toast-end">
          <div className="alert alert-info">
            <span>Please Fill all the Field</span>
          </div>
        </div>
      );
    }

    if(password !== confirmpassword) {
      return (
        <div className="toast toast-end">
          <div className="alert alert-info">
            <span>Passwords Do Not Match</span>
          </div>
        </div>
      )
    }
    try {
        const config = {
          header: {
            "content-type": "application/json",

          },
        };

        const {data} = await axios.post("/api/user", 
                      {name, email, password, pic}, 
                        config
      );
      return (
        <div className="toast toast-end">
          <div className="alert alert-success">
            <span>User Created Successfully</span>
          </div>
        </div>
      ),
       localStorage.setItem("userInfo", JSON.stringify(data));
       history.push("/chats")
      } catch (err) {
        return (
          <div className="toast toast-end">
          <div className="alert alert-success">
            <span>Error Occurred please try again</span>
          </div>
        </div>
        )
        setLoading(false)
      }
  }

  

  return (
    <div>
      <form className="card-body">
        <h2 className="text-2xl mb-2 mt-[-2rem] text-center">Create your account</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name:<sup className="text-[red] text-[1em]">*</sup></span>
          </label>
          <input type="text" placeholder="Enter Your Name" className="input input-bordered input-info w- full max-w-xs" required
            onChange={(e) => setName(e.target.value)}
          />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email: <sup className="text-[red] text-[1em]">*</sup></span>
            </label>
            <input type="email" placeholder="Enter your Email" className="input input-bordered input-info w- full max-w-xs" required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password: <sup className="text-[red] text-[1em]"
              onChange={(e) => setPassword(e.target.value)}
            >*</sup></span>
          </label>
          <input
            placeholder="Enter your password"
            className="input input-bordered input-info w- full max-w-xs" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password:<sup className="text-[red] text-[1em]">*</sup></span>
          </label>
          <input
            placeholder="Confirm password"
            className="input input-bordered input-info w- full max-w-xs" required />
          <label className="label">
            <a href="#" className="label-text-alt text-red link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload your Picture:</span>
          </label>
          <input
            type="file"
            placeholder="Upload your profile picture"
            accept="image/*"
            className="input input-bordered input-info w-full  max-w-xs" required
            onChange={(e) => postDetails(e.target.files[0])}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary"
            onClick={submitHandler}
            isloading={loading}
          >Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default Signup