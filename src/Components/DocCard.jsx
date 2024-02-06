import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function DocCard({doc}) {
    console.log(doc);
  return (
    <div>
        <MDBCard className='text-center p-3'>
      <MDBCardBody>
        <MDBCardTitle>{doc.name}</MDBCardTitle>
        <MDBCardText className='text-primary'>{doc.specialty}</MDBCardText>
        <MDBCardText>{doc.hospital}</MDBCardText>
        <MDBCardText>{doc.rating}<i style={{color:'gold'}} className='fa-solid fa-star ms-2'></i></MDBCardText>
        <Link to={`view/${doc.id}`}><MDBBtn>Details</MDBBtn></Link>
      </MDBCardBody>
    </MDBCard>
    </div>
  )
}

export default DocCard