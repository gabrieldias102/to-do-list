import { Header } from "./components/Header"
import { InputField } from "./components/InputField"
import { TaskBoard } from "./components/TaskBoard"

import { useState } from 'react'

import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.centralDiv}>
        <InputField />

        <TaskBoard />
      </div>
      
    </div>
  )
}

export default App