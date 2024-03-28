import { Routes, Route } from 'react-router-dom'
import Register from "./pages/Register.jsx"
import Chat from './pages/Chat.jsx'
import Login from './pages/Login.jsx'
import SetAvatar from './pages/SetAvatar.jsx'



function App() {
  
  
  return (
    <div className="apps" >
      <Routes> 
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App
