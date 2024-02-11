import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DocCard from './DocCard';
function AllDoc() {
  const base_url='https://doctor-booking-backend-0x39.onrender.com/doctors'
  const [allDocData,setAllDocData]=useState([])
  const fetchData=async()=>{
    const result = await axios.get(base_url)
    console.log(result.data);
    setAllDocData(result.data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div style={{width:'100%'}}>
        <div style={{width:'100%'}} className="row px-5">
          <div className="col m-5">
            <h3 className='my-5'>Your Health, Your Time – Doctor Booking at Your Fingertips!</h3>
            <p>Experience healthcare without the hassle! DocHere makes booking top-notch doctor appointments easy. 
              Say goodbye to long waits and phone calls – schedule routine checkups, specialist consultations, or emergency care effortlessly. 
              Your health, simplified.</p>
          </div>
          <div id='col1' className="col">
            <img width={'480px'} src="https://i.pinimg.com/564x/46/35/28/463528b0579d6efdd15da61330cdc541.jpg" alt="" />
          </div>
        </div>
        <div style={{width:'100%'}} className="row">
          <h3 className='text-center my-4 text-primary'>Our Doctors</h3>
        </div>
        <div style={{width:'100%'}} className="row">
        {
          allDocData.map(item=>(
            <div style={{width:'298px'}} className="column my-3 ms-3" sm={12} md={6} lg={4} xl={3}>
              <DocCard doc={item}/>
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default AllDoc