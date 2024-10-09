import SignUpView from "../../views/SignUpView"
import { useState,useEffect} from "react"
import {auth} from "../../contexts/AuthsContext.tsx"
import { useNavigate } from "react-router-dom"


const SignUpContainer=()=>{
    const navigate=useNavigate()
 
    const {signUp,isAuthenticated,start}=auth()

    const [signUpForm, setSignUpForm] = useState({
        email:"",
        password:""
    })

    const handelSubmit=()=>{
       let email=signUpForm.email;
       let password=signUpForm.password;
        signUp(email,password);
       
    }

    const handleChange=(e?:any)=>{
        setSignUpForm({
            ...signUpForm,
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
         <SignUpView email={signUpForm.email} password={signUpForm.password} handelChange={(e?:any)=>handleChange(e)} onClick={handelSubmit}/>
        </>
    )
}

export default SignUpContainer