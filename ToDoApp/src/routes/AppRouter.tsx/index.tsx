import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignUpPage from '../../pages/SignUpPage';
import LoginPage from '../../pages/LogininPage'
import HomePage from '../../pages/HomePage'
import { auth } from "../../contexts/AuthContext.tsx/index.tsx";
import { useEffect } from 'react';


const AppRouter=()=>{
    const {isAuthenticated, start } = auth();

    useEffect(()=>{
        start()
    },[])
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          {isAuthenticated() && <Route path="/home-page" element={<HomePage />} />}
        </Routes>
      </BrowserRouter>
    )
}

export default AppRouter;
