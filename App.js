import Form from "./component/Form.js"
import { useState } from "react"
export default function App() {
  let title ="Loan Project "

  let[show,setShow]=useState(false)
  function change(){
    if(show===false){
      setShow(true)
    }else{
      setShow(false)
    }
  }
return(
  <div style={{width:"100vw",height:"100vh",backgroundColor:"#121212",color:" #E0E0E0",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"} } 
  onClick={()=>{
    change()
  }}
  >
    <Form show={show} title={title}> </Form>
  </div>
)
  
}



