
import { Route, Routes } from 'react-router-dom'
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import HomePage from './Pages/HomePage'
import ChatPage from './Pages/ChatPage'
import LoginSignupPage from './Pages/LoginSignupPage'
// import './App.css'

import { AuthProvider } from "./Context/context";
import ProtectedRoute from "./Protect/Protected"; 

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/Home' element={<HomePage />} />
      <Route path='/Chats' element={<ChatPage />} />
      <Route path='/'element={<LoginSignupPage />} />
    </Routes>
    </>
  )
}

export default App
