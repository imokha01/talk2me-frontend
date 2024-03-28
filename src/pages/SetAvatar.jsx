import { useNavigate } from "react-router-dom";
import loader from "../assets/loader.gif"
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";
import { Buffer } from "buffer";
import { avatar } from "../assets/avatar/avatar.js";
import { setAvatarRoute } from "../utils/APIRoutes.js";

const SetAvatar = () => {

    // const api = 'https://api.multiavatar.com/45678945/4';
    const navigate = useNavigate();
    const [avatars, setAvatars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedAvatar, setSelectedAvatars] = useState(undefined);

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    }

    useEffect(() => {
        if(!localStorage.getItem("chat-app-user")){
            navigate("/login");
        }
        setAvatars(avatar);
        setIsLoading(false)
    }, [])

    const setProfilePicture = async () => {
        if (selectedAvatar === undefined) {
            toast.error("Please select an avatar", toastOptions)
        } else {
            const user = await JSON.parse(localStorage.getItem("chat-ap-user"));
            const {data} = await axios.post(`${setAvatarRoute}/${user._id}`, {
                image: avatars[selectedAvatar],
            })
            if(data.isSet){
                user.isAvatarImageSet = true;
                user.avatarImage = data.image;
                localStorage.setItem("chat-ap-user", JSON.stringify(user));
                navigate("/");
            } else(
                toast.error("Error setting avatar, Please try again", toastOptions)
            )
        }
    };



    return (
        <div className="main">
            <div className="container">
                <div className="title-container">
                    <h1>Pick an avatar as your profile picture</h1>
                </div>
                <div className="avatars" >
                    {avatars.map((avatar, index) => {
                        return (
                            <div className={`avatar ${selectedAvatar === index ? "selected" : ""}`} key={index} >
                                <img src={avatar.image} alt="avatar" onClick={() => setSelectedAvatars(index)} />

                            </div>
                        )
                    })}
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary" onClick={setProfilePicture} disabled={selectedAvatar === undefined}>Set profile picture</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}

export default SetAvatar
