import HomePage from "../../views/HomePage";
import { useState,useEffect } from "react";



const HomePageContainer=()=>{

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


  const changed=(e:any)=>{
      newData({...data,[e.target.name]:e.target.value})
  }
  const submit=(e:any)=>{
    e.preventdefault();
  }

  // Adding a Task(ToDo)...
const clicked=()=>{
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
const cancel=(id?:string)=>{
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
const setData=(id:any)=>{
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


    return <HomePage
     List={List} 
     onClickDelete={(id)=>cancel(id)}
     onSubmit={submit}
     onClickAdd={clicked}
     onChange={changed}
     onChangeCheckBox={(id)=>setData(id)}
     inputValue={data.name}
    />
}

export default HomePageContainer