import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {MDBRow, MDBCol } from 'mdb-react-ui-kit';
import DocReview from './DocReview'
function ViewDoc() {
    const [docDetails,setDocDetails] = useState({})
    const {id} = useParams()
    const base_url='https://doctor-booking-backend-0x39.onrender.com/doctors'
    const fetchDetails = async()=>{
        const result = await axios.get(`${base_url}/${id}`)
        setDocDetails(result.data)
    }
    useEffect(()=>{
        fetchDetails()
    },[])
  return (
    <div style={{width:'100%'}}>
        <MDBRow style={{width:'100%'}} className='px-5 py-4'>
            <MDBCol id='col1' className='ms-5'>
                <img width={'75%'} src={docDetails.image} alt="" />
            </MDBCol>
            <MDBCol style={{boxShadow:'1px 1px 5px grey'}} className='my-3'>
                <div style={{backgroundColor:'rgb(46, 139, 87,0.5)'}} className="row px-3 pt-4">
                <h3 className='mb-2'>{docDetails.name}</h3>
                <h4 className='mb-3'>{docDetails.specialty}</h4>
                <h5 className='mb-4'>{docDetails.hospital}</h5>
                </div>
                <div className="row  pt-4 px-3">
                <h6 className='mb-3'><i class='fas fa-map-marker-alt me-3'></i>{docDetails.address}</h6>
                <h6 className='mb-3'><i class='fas fa-phone me-3'></i>{docDetails.phone}</h6>
                <h6 className='mb-3'><i class="fa fa-envelope me-3"></i>{docDetails.email}</h6>
                </div>
                <MDBRow className='ps-3 mb-3'>
                    <MDBCol>
                    <div className="row">
                <p className='text-primary fs-6'>
                <i class='fas fa-calendar-alt me-3'></i>{docDetails.available_days?.map(item=>(item+' '))} <br />
                <i class='far fa-clock me-3'></i>{docDetails.available_hours}
                </p>
                </div>
                    </MDBCol>
                    <MDBCol className='ms-5'>
                    <div className="row ms-5">
                    <h6 className='text-primary mb-3'>Rating: {docDetails.rating} <i style={{color:'gold'}} className='fa-solid fa-star'></i></h6>
                    <DocReview rev={docDetails.reviews}/>
                    </div>
                    </MDBCol>
                </MDBRow>
            </MDBCol>
        </MDBRow>
    </div>
  )
}

export default ViewDoc