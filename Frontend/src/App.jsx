import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ChatPage from './Pages/ChatPage'
import LoginSignupPage from './Pages/LoginSignupPage'
// import './App.css'

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
