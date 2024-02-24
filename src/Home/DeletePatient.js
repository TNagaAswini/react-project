import axios from "axios"
import React from "react"
function DeletePatient(props){
    function deletePatient(){
        axios.delete(`https://doc-back.onrender.com/patients/${props.id}`)
            .then((res)=>{
                console.log(res)
                alert("Patient deleted successfully")
            })
    }
    return(
        <div>
            <button onClick={deletePatient}>Delete</button>
        </div>
    )
}
export default DeletePatient