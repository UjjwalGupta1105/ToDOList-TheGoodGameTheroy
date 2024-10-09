import FormButton from "../../components/base/FormButton";
import FormInput from "../../components/base/FormInput";

type LoginProps={
    email:string,
    password:string,
    onClick: () => void;
    handelChange:(e?:any)=>void,
}
const LogInView = ({email, password, handelChange, onClick} : LoginProps) => {
    return (
      <div style={{border:"2px solid grey",padding:"40px", borderRadius:"10px"}}>
         <h2 style={{fontSize:"35px",color:"black",margin:"25px",fontWeight:"650",marginBottom:"40px"}}>LogIn</h2>
         <FormInput type="text" name="email" value={email} onChange={handelChange} placeholder="Email" />
         <FormInput type="password" name="password" value={password} onChange={handelChange} placeholder="Password" />
          <FormButton ButtonName="LogIn" onClick={onClick}/>
      </div>
    )
  }
  
  export default LogInView 