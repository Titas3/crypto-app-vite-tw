import { BrowserRouter, Route, Routes } from "react-router-dom"

import CryptoHome from "./pages/CryptoHome"
import CryptoDetail from "./pages/CryptoDetail"
import Navbar from "./components/Navbar"

function App() {


  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<CryptoHome/>}/>

      <Route path="/coin/:id" relement ={<CryptoDetail/>}/>
    </Routes>
    <div className="App">
     <h1 className="text-center">App</h1>
      
    </div>
    </BrowserRouter>
  )
}

export default App
