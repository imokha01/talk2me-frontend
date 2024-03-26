import Login from "../components/Chat/Authentication/Login"
import Signup from "../components/Chat/Authentication/Signup"

const Homepage = () => {
    return (
        <div>
            <div className="hero app min-h-screen bg-base-200">
                <div className="hero-content flex-col bg-[#2b2d42] w-[30rem]">
                    <div className="text-center lg:text-center lg:flex-row-reverse ">
                        <h1 className="text-5xl font-bold mb-5 text-center">Talk2me</h1>
                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    </div>

                    <div role="tablist" className="tabs tabs-lifted ">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl w-[50%]  bg-rgb(100, 110, 228) [--tab-border-color:orange]  text-white" aria-label="Log In" checked />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                                <Login />
                            </div>

                            <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl w-50% bg-[rgb(100, 110, 228)] [--tab-border-color:orange]  text-white" aria-label="Sign Up" checked />
                            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                                <Signup />
                            </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Homepage
