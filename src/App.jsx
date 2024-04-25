import { Header } from "./components/Header"
import { InputField } from "./components/InputField"
import { TaskBoard } from "./components/TaskBoard"

import { useState } from 'react'

import './App.css'
import './global.css'

function App() {

  return (
    <div>
      <Header />

      <InputField />

      <TaskBoard />
    </div>
  )
}

export default App