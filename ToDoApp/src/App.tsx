import './App.css'
import HomePage from  "../src/pages/HomePage"
import LoginPage from  "../src/pages/LoginInPage"
import SignUpPage from  "../src/pages/SignUpPage"
import { Route, Routes,BrowserRouter } from "react-router-dom"


function App() {
  return (
    <>
    <BrowserRouter >
         <Routes>
            <Route  path="/" element={<SignUpPage/>}/>
            <Route  path="/login" element={<LoginPage/>}/>
            <Route path="/home-page" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
