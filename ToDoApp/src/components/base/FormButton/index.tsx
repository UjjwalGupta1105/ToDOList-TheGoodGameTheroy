import {styled} from "styled-components" ;

type FormButtonProps={
    type?: 'submit' | 'button';
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick: () => void;
    ButtonName:string;
}

const StyledButton=styled.button`
  width: 60%;
  height:41px;
  padding: 2px;
  border: none;
  border-radius: 10px;
  background-color: #007bff;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s;
  margin-top:5px;
  margin:2px;
  outline:none;
  &:hover {
    box-shadow: 5px 5px 10px black;
  }
`;

const FormButton=({ onClick ,ButtonName,...rest}:FormButtonProps)=>{
   
   return (
      <StyledButton onClick={onClick} {...rest}>
        {ButtonName}
      </StyledButton>
   )
}

export default FormButton