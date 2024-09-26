import FormInput from "../../base/FormInput/index";
import FormButton from "../../base/FormButton/index";

type formProps={
    onSubmit:()=>void;
    onClick:()=>void;
    onChange?:()=>void;
}

const Form = ({onSubmit,onClick,onChange}: formProps) => {
  return (
    <form onSubmit={onSubmit} >
      <FormInput type="text" name="search" value="search" onChange={onChange} placeholder="Enter the task....." />
      <FormButton ButtonName="Add Task"onClick={onClick}/>
    </form>
  );
};

export default Form;