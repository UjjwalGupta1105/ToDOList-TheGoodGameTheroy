import axios from "axios"
import { useState, useContext,  createContext  } from "react"
import {jwtDecode} from "jwt-decode"
import Cookies from 'js-cookie';
import { useAlert } from 'react-alert'

type jwtPayload ={
    user_id: string;
    email: string;
}

type transferType={
    user: {email:string,userId:string} | null;
    signUp : (email: string, password: string) => void;
    logIn : (email: string, password: string) => void;
    logOut : () => void;
    isAuthenticated : () => boolean;
    start:()=>void;
}
type AuthContextProps={
    children : React.ReactNode
}

export const transfer=createContext<transferType>({
    user: null,
    signUp : () => {},
    logIn : () => {},
    logOut : () => {},
    isAuthenticated :() => false,
    start: () => {},
}
)

const api_key=`AIzaSyBN0_bWfpD75wsCyCtz8bzuHo7FT5HiV9I`

 const AuthContext=({children}: AuthContextProps)=>{
    const alert = useAlert()

    const [user , setUser] = useState({
        userId:"",
        email:""
    })

    const signUp = async (email : string, password : string) => {
        
        try {
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${api_key}`,{
                "email":email,
                "password":password,
                "returnSecureToken": true,
            })    
            console.log(response)

            const { idToken } = response.data
            const decodedToken : jwtPayload = jwtDecode(idToken)
            const userId = decodedToken.user_id
            
            Cookies.set("jwt_token",idToken,{
                expires:new Date(Date.now()+5*24*60*60*1000)
            })
            setUser({ email ,userId});
        

        } catch (error:any) {
                console.log(error.response.data.error.message)
                alert.error(error.response.data.error.message)
        }
    }

    const logIn = async (email : string, password : string) => {

        try {
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api_key}`,{
                "email" : email,
                "password" : password,
            })

            const {idToken} = response.data
            const decodedToken : jwtPayload= jwtDecode(idToken)
            const userId = decodedToken.user_id
            
            Cookies.set("jwt_token",idToken,{
                expires:new Date(Date.now()+5*24*60*60*1000)
            })
            setUser({email,userId})

        } catch (error:any) {
            console.log(error.response.data.error.message)
            alert.show(error.response.data.error.message)
        }
    }

    const logOut = () => {
        Cookies.remove("jwt_token");
        setUser({
            userId:"",
            email:""
        })
    }

    const start=()=>{
        const token = Cookies.get("jwt_token")

        if (token){
            try {
                const decodedToken: jwtPayload= jwtDecode(token)
                const userId = decodedToken.user_id
                const email = decodedToken.email
                setUser({email,userId})   
            } catch (error) {
                console.error("Login Failed",error)
                logOut()
            }
        }
    }

    const isAuthenticated = () => {
        if(user.userId && user.email)return true;
        else {return false};
    }

    return(
         <transfer.Provider value={{user, signUp, logIn, logOut, isAuthenticated,start}}>
            {children}
        </transfer.Provider>
    )
}

export default AuthContext

export const auth = () => {
    const context = useContext(transfer)

    if (!context){
        throw new Error("out of context")
    }
    
        return context 

    
}
