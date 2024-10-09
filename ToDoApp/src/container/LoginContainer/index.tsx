import LoginView from "../../views/LoginView"
import { useState , useEffect} from "react"
import {auth} from "../../contexts/AuthsContext.tsx"
import { useNavigate } from "react-router-dom"

const LoginContainer=()=>{
    const navigate=useNavigate()
    const {logIn,isAuthenticated,start}=auth()

    const [loginform, setLoginFrom] = useState({
        email:"",
        password:""
    })

    const handelSubmit=()=>{
        let email=loginform.email;
        let password=loginform.password;
         logIn(email,password);
    }

    const handleChange=(e?:any)=>{
        setLoginFrom({
            ...loginform,
            [e.target.name]:e.target.value
        })
    }

    if(isAuthenticated()){
        navigate("/home-page")
    }

    useEffect(()=>{
        start()
    },[])

    return(
        <>
         <LoginView email={loginform.email} password={loginform.password} handelChange={(e?:any)=>handleChange(e)} onClick={handelSubmit}/>
        </>
    )
}

export default LoginContainer