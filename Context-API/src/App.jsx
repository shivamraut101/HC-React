import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Hey Welcome to Chai aur Code</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
