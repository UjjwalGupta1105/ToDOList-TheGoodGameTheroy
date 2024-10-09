import Form from "../../components/custom/Form/index"
import Listitem from "../../components/custom/ListItem"
import {styled} from "styled-components" ;

const Home=styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  width: 370px;
  margin: 0 auto;
  padding: 15px 15px;
  padding-top:30px;
  padding-right:25px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px black,-1.5px -1.5px 8px black;
  min-height:400px;

`
const Heading=styled.h2`
font-family: 'Arial', sans-serif;
  text-align:center;
  color:black;
  font-size:35px;
  font-weight:600;
  margin-bottom:20px
`

type HomePageProps={
    List:[{
        id:string;
        input:{
        name:string;
        done:boolean;
        }
    }];
    inputValue:string;
    onClickDelete:(item?:string)=>void;
    onSubmit:(e?:any)=>void;
    onClickAdd:()=>void;
    onChange:(e?:any)=>void;
    onChangeCheckBox:(item?:string)=>void;
    logOut:()=>void
}

const HomeView=({List,onClickDelete,onSubmit,onClickAdd,onChange,onChangeCheckBox,inputValue,logOut}:HomePageProps)=>{
    return(
        <>
            <Home>
                <button onClick={logOut} style={{position:"absolute",right:"20px",top:"20px",fontSize:"20px"}}>LogOut</button>
                <Heading>To Do List</Heading>
                <div>
                    <Form onSubmit={onSubmit} onClickAdd={onClickAdd} onChange={onChange} inputValue={inputValue}/>
                </div>
                <div>
                    <li>
                        {List && List.map((item)=>{
                            return <Listitem data={item} onClickDelete={(id)=>onClickDelete(id)} onChangeCheckBox={(id)=>onChangeCheckBox(id)} />
                        })}
                    </li>
                </div>
            </Home>

        </>
    )
}

export default HomeView;