import axios from "axios";
import { useEffect, useState } from "react";

const Chatpage = () => {
  const [chats, setChats] = useState([])

  const fetchChats = async () => {
    try {
      const res = await axios.get("http://localhost:4040/api/chat");
      console.log(res.data)
      setChats(res.data); // Set only the data part of the response
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };
  
  useEffect(() => {
    fetchChats()
  },[]);
  
  return (
    <div>
      <button className="btn btn-secondary">Secondary</button>
    </div>
  )
}

export default Chatpage
