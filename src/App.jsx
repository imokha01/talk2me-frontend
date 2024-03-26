import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage.jsx"
import ChatPage from './pages/Chatpage.jsx'


function App() {
  
  
  return (
    <div className="apps" >
      <Routes> 
        <Route path="/" element={<Homepage />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  )
}

export default App
