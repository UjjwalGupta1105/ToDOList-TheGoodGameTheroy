import {styled} from "styled-components" ;

type FormInputProps={
    type:string;
    placeholder:string;
    onChange?: () => void;
    name?:string;
    value?:string;
    autocomplete?:string;
}

const StyledInput=styled.input`
color:black;
outline:none;
width: 90%;
 height:60px;
 font-size:18px;
padding:30px 15px;
border:2px solid black;
border-radius: 10px;
 margin-bottom:10px;
 background-color:white;
 margin-bottom:17px
`;

const FormInput=({ type,placeholder ,...rest}:FormInputProps)=>{
   
   return (
      <StyledInput  autocomplete="off"  type={type} placeholder={placeholder} {...rest}/>
   )
}

export default FormInput