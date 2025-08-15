import './App.css'
import Navbar from './components/Navbar'
import Inputform from './components/Inputform'
import About from './components/About'
import { useState } from 'react'
import Alerts from './components/Alerts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
  console.log("hello im start")

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = (modeVar) => {
    if (modeVar === mode) {
      setMode('light')
      document.body.style.backgroundColor = "white"
      document.title = "TextUtils-LightMode"
      showAlert("Successfully obtained light mode", "Success")
    }
    else if (modeVar === "dark") {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      document.title = "TextUtils-DarkMode"
      showAlert("Enabled dark mode", "Success")
    }
    else if (modeVar === "green") {
      setMode('green')
      document.body.style.backgroundColor = "#2c3e2aff"
      document.title = "TextUtils-GreenMode"
      showAlert("Enabled green mode", "Success")
    }
  }

  return (
        <>
          <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode} />
          <Alerts alert={alert} />
          <div className='container my-3'>
            <Inputform showAlert={showAlert} heading={"Enter Your Text"} mode={mode} />
          </div>
        </>
      )
    
     
}

export default App
