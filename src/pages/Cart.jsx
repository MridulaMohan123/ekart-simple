import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';

function Cart() {
  const  [total, setTotal] = useState(0)

  const CartItems =  useSelector((state)=>state.cartReducer);
  let totalPrice =  0;
  CartItems.forEach(item =>{
    totalPrice = totalPrice + item.price
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleCheckout =()=>{
    alert("Successfully placed the order")
    dispatch(emptyCart())
    navigate('/')
  }
  return (
    <>
    <button style={{marginTop:'150px'}} className='btn btn-success'>
          <Link  to={'/'} style={{textDecoration:'none',color:'white'}}>
          <i class="fa-solid fa-arrow-left me-2"></i> Back  To Home
          </Link>
      </button>


        <div  className='row w-100'>
          
           
            <div className='col-lg-6 col-md-6 m-5'>
                <table className='table shadow border'>
                    <thead>
                        <tr>
                           <th>#</th>
                           <th>Product</th>
                           <th>Image</th>
                           <th>Price</th>
                           <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                      {
                         CartItems?.length>0?
                        CartItems?.map((item,index)=>(
                          <tr>
                          <td>{index+1}</td>
                          <td>{item.title}</td>
                          <td><img height={'50px'} width= {'50px'} src={item.thumbnail} /></td>
                          <td><i class="fa-solid fa-indian-rupee-sign me-2"></i>{item.price}</td>
                          <td>
                            <Button
                             onClick={()=>dispatch(removeFromCart(item.id))}
                             variant="outline-danger"><i class="fa-solid fa-trash"></i></Button></td>
                        </tr>
                        ))
                        :
                        <p>No  Items In Cart</p>
                        }
                     
                    </tbody> 
                </table>
            </div>
           <div className='col-lg-4 col-md-4 d-flex justify-content-center align-items-center'>
            <div className='border shadow p-5'>
                <h3 className='text-primary'>Cart Summary</h3>
                <h5>Total Number Of Products: <span className='fw-bolder  text-warning ms-2'>{CartItems?.length}</span></h5>
                 <h5>Total Price: <span className='fw-bolder text-warning ms-3'>{totalPrice}</span></h5>
                 <button className='btn btn-success rounded w-100 mt-3' onClick={handleCheckout}>Checkout</button>
            </div>
            </div> 
          
          
            
            </div>

    </>
  )
}

export default Cart