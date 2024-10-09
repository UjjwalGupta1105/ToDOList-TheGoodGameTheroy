import FormButton from "../../components/base/FormButton";
import FormInput from "../../components/base/FormInput";

type SignUpProps={
    email:string,
    password:string,
    onClick: () => void;
    handelChange:(e?:any)=>void,
}
const SignUpView = ({email, password, handelChange, onClick} : SignUpProps) => {
    return (
      <div style={{border:"2px solid grey",padding:"40px", borderRadius:"10px"}}>
         <h2 style={{fontSize:"35px",color:"black",margin:"25px",fontWeight:"650",marginBottom:"40px"}}>SignUp</h2>
         <FormInput type="text" name="email" value={email} onChange={(e?:any)=>handelChange(e)} placeholder="Email" />
         <FormInput type="password" name="password" value={password} onChange={(e?:any)=>handelChange(e)} placeholder="Password" />
          <FormButton ButtonName="SignUp" onClick={onClick}/>
          <div><a href="/login">already have an account?</a></div>
      </div>
    )
  }
  
  export default SignUpView 