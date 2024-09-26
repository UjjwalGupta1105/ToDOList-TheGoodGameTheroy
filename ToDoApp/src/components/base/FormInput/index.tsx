import {styled} from "styled-components" ;

type FormInputProps={
    type:string;
    placeholder:string;
    onChange?: () => void;
    name?:string;
    value?:string;
}

const StyledInput=styled.input`
width: 70%;
padding: 10px;
border: 1px solid #ddd;
border-radius: 4px;
`;

const FormInput=({ type,placeholder ,...rest}:FormInputProps)=>{
   
   return (
      <StyledInput type={type} placeholder={placeholder} {...rest}/>
   )
}

export default FormInput