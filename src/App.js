import React from "react"
import "./App.css"
import Login from "./lib/components/Login"

function App() {
  const Header = "Welkom bij de login pagina van..."
  const subText = "Sub tekst mbt de applicatie etc."
  return (
    <div className="App">
      <Login onClick={() => console.log(`clicked!`)} Header={Header} subText={subText}/>
    </div>
  )
}

export default App
