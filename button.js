import Modal from "./Modal"
import { useState } from "react"


///one ? the form has been sunmit suceesfuly
/// age => should be between 18 and 100 if is true =>       if is false =>age is not allowed
//phone 10 number  or 12 number  else is =>phone number format is incorrect 


///here is  the component that need to fix , i think using two component here will be good @khalid 


export default function Btn(prop){
let [displayBtn,setDisplayBtn]=useState(false)

function check(){
    if(displayBtn===true){
        return setDisplayBtn(false)
    }else{
        return setDisplayBtn(true)
    }
}
// console.log(NaN(0))
let checkAge;
let checkPhone;
let show ;

if(parseInt(prop.Age)>=18&&parseInt(prop.Age)<=100){
    checkAge=true
}else{
    checkAge=false

}

if((prop.Phone).length >=10 && (prop.Phone).length<=12){
    checkPhone=true

}else{
    checkPhone=false

}

if(prop.show===true){
    show=true
}else{
    show=false
}


        if(prop.Name!==""&&parseInt(prop.Age)>0&&prop.Employee===true&&prop.Salary!==""&&parseInt(prop.Phone)>0){



//check age input 

        if(checkAge===false){
            return(
                <div>
        <button style={Btnstyle} onClick={()=>{ check()}}>submit work {displayBtn===true?<Modal theme={"red"} >
            <h1>age is not allowed</h1>
        </Modal>:null} </button>
    </div>
            )
        }
//check phone number is between  10 number  or 12 number  

        if(checkPhone===false){
            return(
                <div>
                <button style={Btnstyle} onClick={()=>{ check()}}>submit work {displayBtn===true?<Modal theme={"red"} >
                    <h1>phone number format is incorrect </h1>
                </Modal>:null} </button>
            </div>
            )
        }


        // if(show===true){
        //     return(
        //         <div>
        //             <button style={Btnstyle} onClick={()=>{ check()}}>submit show </button>
        //         </div>
        //      )
        // }

 return(
    <div>
        <button style={Btnstyle} onClick={()=>{ check()}}>submit work {displayBtn===true?<Modal theme={"green"} >
            <h1> the form has been sunmit suceesfuly</h1>
        </Modal>:null} </button>
    </div>
 )







        }else{
            return(
            <div>
                <button style={{padding:"10px",backgroundColor:"rgb(217, 105, 105)",outline:"none",border:"none",borderRadius:"8px",color:"white"}} disabled>submit not work</button>
            </div>
            )
        }
  


}








let Btnstyle={padding:"10px",backgroundColor:"#B0B0B0",outline:"none",border:"none",borderRadius:"8px"}