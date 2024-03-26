import { useState } from "react"

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState()
  


  const postDetails = (pics) => {}


  const submitHandler = () => {}

  return (
    <div>
      <form className="card-body">
      <h2 className="text-2xl mb-2 mt-[-2rem] text-center">Create your account</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email: <sup className="text-[red] text-[1em]">*</sup></span>
            </label>
            <input type="email" placeholder="Enter your Email" className="input input-bordered input-info w- full max-w-xs" required
              onChange={(e) => setEmail(e.target.value)}
              />
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

        <div className="form-control mt-6">
          <button className="btn btn-primary"
            onClick={submitHandler}
          >Login</button>
        </div>
      </form>
    </div>
  )
  }

  export default Signup
