import HomeView from "../../views/HomeView";
import { useState,useEffect } from "react";

const HomeContainer=()=>{

  const [data,newData]=useState({
    name:"",
    done:false,
  });

  // To get Data from Local Storage
  function getList(){
    const Data= localStorage.getItem("ToDoList")
    const list=Data ? JSON.parse(Data) : [] 
 
    if(list){
     return list
    }
    else{
     return []
    }

   }

  //  Creating all state variables
  const [List,newList]=useState(getList())
  

//  Updating or Adding Data in the Local Storage if any change occurs in the List...
  useEffect(()=>{
    localStorage.setItem("ToDoList",JSON.stringify(List))
  },[List])


  const handleChange=(e:any)=>{
      newData({...data,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e:any)=>{
    e.preventdefault();
  }

  // Adding a Task(ToDo)...
const handleClick=()=>{
      newList((olditems?:any)=>{
      return([
          ...olditems,
          {id:new Date().getTime().toString(),input:data}
      ])

  })
  newData({
    name:"",
    done:false
  })
}

// Deleting a Task
const handleCancel=(id?:string)=>{
  console.log(id)
  newList((olditems?:any)=>{
      return(
          olditems.filter((elemnt:any)=>{
             return elemnt.id!==id
          })
      )
  })
}


// Checkbox Handling
const setCheck=(id:any)=>{
  newList((olditems:any)=>{

    return(
    olditems.map((item:any)=>{
      if(item.id==id){
        item.input.done=(!item.input.done)
        console.log(item)
      }
      return item
    })
  )
})
}


    return <HomeView
     List={List} 
     onClickDelete={(id)=>handleCancel(id)}
     onSubmit={handleSubmit}
     onClickAdd={handleClick}
     onChange={handleChange}
     onChangeCheckBox={(id)=>setCheck(id)}
     inputValue={data.name}
    />
}

export default HomeContainer