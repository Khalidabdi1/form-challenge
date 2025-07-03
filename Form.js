import {useState} from "react"
import Btn from "./button"
export default function Form({show,title}){

let [Input,setInput]=useState(
    { Name:"",phone:0,age:0,employee:false,salary:""}

)


    


    return(
        <div style={{display:"flex",alignItems:"center",flexDirection:"column",width:"50%",height:"80%",backgroundColor:"#444444",overflow:"hidden",borderRadius:"8px",padding:"10px"}}>
            {/* <h1 style={{color:"white"}}>{title}</h1> */}
            <h1 >Requesting a Loan </h1>
            <hr style={{borderWidth:"1px",width:"90%",height:"0px",marginBottom:"40px"}}></hr>
               {/* here is div for inputs*/}     

                <div style={styleDiv}>
                    <label style={{marginRight:"20px"}}>Name : </label>
                    <input type={"text"} style={inputStyle} value={Input.Name} onChange={(e)=>{
                        // title =e.target.value
                        setInput({...Input,Name:e.target.value})}}></input>
               </div>  

               <div style={styleDiv}>
                    <label>Phone number : </label>
                    <input type={"text"} style={inputStyle} value={Input.phone} onChange={(e)=>{setInput({...Input,phone:e.target.value})}}></input>
               </div>   

               <div style={styleDiv}>
                    <label>age : </label>
                    <input type={"text"} style={inputStyle} value={Input.age} onChange={(e)=>{setInput({...Input,age:e.target.value})}}></input>
               </div>       

               <div style={styleDiv}>
                    <label>Are you an employee : </label>
                    <input type={"checkbox"} value={Input.employee} onChange={(e)=>{setInput({...Input,employee:e.target.checked})}}></input>
               </div>   

               <div style={styleDiv}> 
                    <label>Salary : </label>
                    <select style={inputStyle} value={""} onChange={(e)=>{setInput({...Input,salary:e.target.value})}}>
                        <option>less than 500$</option>
                        <option>between 500$ and 2000$</option>
                        <option>above 2000$</option>

                        
                    </select>
               </div>    


               {/* here is button*/}     
                              {/* i stop here today , tommorw continu with prop to commponent*/}     

               <div >
                <Btn Name={Input.Name} Age={Input.age} Phone={Input.phone} Employee={Input.employee} Salary={Input.salary} show={show} />
               </div>
        </div>
    )
}


let styleDiv={display:"flex",alignItems:"center" ,justifyContent:"flex-start",width:"100%",marginBottom:"15px",flexDirection:"column"}

let inputStyle={width:"70%",borderRadius:"8px",padding:"5px",outline:"none",border:"none",marginLeft:"5px"}