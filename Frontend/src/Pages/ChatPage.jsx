import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ChatPage = () => {
  const [chats, setChats] = useState('')

  const fetchChats = async() => {
    const data = await axios.get('/api/chat')
    console.log(data)
    setChats(data.data.message)
  }
  useEffect(()=>{
    fetchChats()
  },[])

  return (
    <>
      <div>ChatPage</div>
      <h1>{chats}</h1>
    </>
  )
}

export default ChatPage