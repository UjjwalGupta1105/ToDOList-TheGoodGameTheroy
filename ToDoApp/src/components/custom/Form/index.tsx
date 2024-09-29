import FormInput from "../../base/FormInput/index";
import FormButton from "../../base/FormButton/index";
import {styled} from "styled-components" ;

const StyledForm=styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`

type formProps={
    onSubmit:()=>void;
    onClickAdd:()=>void;
    onChange?:()=>void;
    inputValue:string
}

const Form = ({onSubmit,onClickAdd,onChange,inputValue}: formProps) => {
  return (
    <form onSubmit={()=>onSubmit()} >
      <StyledForm>
        <FormInput type="text" name="name" value={inputValue} onChange={onChange} placeholder="Enter the task....." />
        <FormButton ButtonName="Add Task" onClick={onClickAdd}/>
      </StyledForm>
    </form>
  );
};

export default Form;