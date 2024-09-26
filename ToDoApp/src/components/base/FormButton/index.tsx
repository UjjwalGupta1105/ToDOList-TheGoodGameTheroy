import {styled} from "styled-components" ;

type FormButtonProps={
    type?: 'submit' | 'button';
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick: () => void;
    ButtonName:string;
}

const StyledButton=styled.button`
  width: 80%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    color: white;
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