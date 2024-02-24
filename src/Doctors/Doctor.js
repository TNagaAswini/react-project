import React,{useState,useEffect} from 'react'
import axios from 'axios'


export default function Doctor() {
  const [doctor,setDoctor]=useState()
  useEffect(()=>{
    axios.get("https://doc-back.onrender.com/doctors")
    .then((res)=>{
      console.log(res)
      setDoctor(res.data)
    })
  },[])


  return doctor?(
    <div className='list'>
      {
        doctor.map((doctor)=>(
          <div className='doctors' key={doctor.id}>
            <p>Name:{doctor.name}</p>
            <p>Age:{doctor.age}</p>
            <p>Gender:{doctor.gender}</p>
            <p>Specialization:{doctor.specialization}</p>
            <p>Salary:{doctor.salary}</p>
            <p>Id:{doctor.id}</p>
          </div>
        ))
      }
    </div>
  ):"loading...."
}
