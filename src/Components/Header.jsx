import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
        <MDBNavbar light style={{backgroundColor:'rgb(46, 139, 87,0.7)'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand style={{color:'white'}} href='#'>
          <i class="fa-solid fa-stethoscope me-2"></i>
            DocHere
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header