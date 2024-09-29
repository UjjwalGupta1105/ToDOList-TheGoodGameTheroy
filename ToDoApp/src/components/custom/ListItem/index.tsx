import {styled} from "styled-components" ;
import FormButton from "../../base/FormButton";
import Checkbox from '@mui/material/Checkbox';

type FormInputProps={
  onClickDelete:(item?:string)=>void;
    onChangeCheckBox:(item?:string)=>void;
    data:{
      id:string;
      input:{
      name:string;
      done:boolean;
      }
    }
}

const StyledItem=styled.div`
color:black;
font-size:23px;
font-weight:600;
width: 100%;
display:flex;
flex-direction:row;
justify-content:space-between;
padding: 0px;
border-radius: 4px;
border:3px solid black;
border-radius:15px;
margin:14px 5px ;
`;

const Listitem=({onClickDelete,onChangeCheckBox,data}:FormInputProps)=>{
  return(
    <>
       <StyledItem>
            <p style={{margin:"auto"}} className="taskName">{data.input.name}</p>
            <div style={{margin:"10px",width:"50%"}}>
            <Checkbox className='checkBox' checked={data.input.done} name="done" onChange={()=>onChangeCheckBox(data.id)} />
            <FormButton ButtonName="Delete" onClick={()=>onClickDelete(data.id)}/>
            </div>
        </StyledItem>
    </>
  )
}

export default Listitem