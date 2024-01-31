import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
    <div  className='d-flex justify-content-center align-items-center mt-5 bg-primary'>
      <div className='footer d-flex align-item-center justify-content-evenly mt-5'>
        <div className='website' style={{width:'400px'}}>
    <h5> <i class="fa-solid fa-cart-shopping me-3"></i>E-KART</h5>
    <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque velit molestias omnis repudiandae, sed, veniam, quibusdam dignissimos dolorum amet nobis similique et autem! Autem fuga voluptate expedita quo hic.</p>
        </div>
    <div className='links d-flex flex-column ms-5'>
    <h4>Links</h4>
    <Link to = '/' style={{textDecoration:'none', color:'black'}}>Home Page</Link>
    <Link to = '/cart'  style={{textDecoration:'none', color:'black'}}>Cart</Link>
    <Link to = '/wishlist'  style={{textDecoration:'none', color:'black'}}>Wishlist</Link>
    
    </div>
    <div className='guides d-flex flex-column ms-5'>
    <h4>Guides</h4>
    <Link to = 'https://react.dev/ target=__blank' style={{textDecoration:'none', color:'black'}}>React</Link>
    <Link to = 'https://react-bootstrap.netlify.app/ target=__blank'  style={{textDecoration:'none', color:'black'}}>React Bootstrap</Link>
    <Link to = 'https://bootswatch.com/ target=__blank'  style={{textDecoration:'none', color:'black'}}>Boots Watch</Link>
    
    </div>
     <div className='contactus ms-5'>
         <h4>Contact us</h4>
       <div className='d-flex '>
         <input type="text" className='form-control ' placeholder='enter your email'/>
         <button className='btn btn-warning ms-3'>subscribe</button>
       </div>
       <div className='d-flex justify-content-evenly mt-3'>
       <Link><i class="fa-brands fa-instagram fa-2x"></i></Link>
        <Link><i class="fa-brands fa-twitter fa-2x"></i></Link>
        <Link><i class="fa-brands fa-facebook fa-2x"></i></Link>
        <Link><i class="fa-brands fa-linkedin fa-2x"></i></Link>
       </div>
    </div>
  </div>
</div>
  <p className='mt-5 text-center'>Copyright &copy; 2024 E-Kart. Built with React & Redux</p>
    </>
  )
}

export default Footer