import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  //to access data inside a store :  useSelector hook
  const WishlistArray = useSelector((state)=>state.wishlistReducer)
  const  cartlist = useSelector((state)=>state.cartReducer)
  
  return (
    <>
       <Navbar expand="lg" className="bg-primary position-fixed  top-0 w-100" style={{zIndex:'1'}}>
      <Container>
        <Link to={'/'}>
        <Navbar.Brand href="#home">
         <img  height={'30px'}
         className='me-3'
         src="data:image/png;base64,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" alt="" />
          E-KART
          </Navbar.Brand>
        </Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           
            <Nav.Link 
                className='btn border rounded me-3'>
              <Link to={'/wishlist'} style={{color:"white",textDecoration:"none"}}> Wishlist <Badge bg="secondary">{WishlistArray.length}</Badge>
              </Link>
            </Nav.Link>
           <Nav.Link 
               className='btn border rounded ' style={{width:"100px"}}>
                <Link to={'/cart'} style={{color:"white",textDecoration:"none"}}>Cart <Badge bg="secondary">{cartlist.length}</Badge>
                </Link>
          </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header