export default function Modal({children,theme}){
    console.log(theme)
    return(
        <div style={{position:'absolute', backgroundColor:`${theme}`,width:"100%",display:"flex",alignItems:"center",justifyContent:"center",right:"0px",top:"40%",opacity:"0.6",color:"black"} }>
           {children}
        </div>
    )
}