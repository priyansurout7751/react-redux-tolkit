import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { removeItem,clearItem } from './redux/slice';
import { useNavigate } from 'react-router-dom';

export default function Cartlist() {
    let dispatch=useDispatch();
    let navigate=useNavigate();
    let cartitem=useSelector((state)=>state.cart.item);
    let [cartstate,setcartstate]=useState(cartitem);

            const hadlePlaceOrder=()=>{
            console.log("helo");
            localStorage.clear();
            dispatch(clearItem());
            alert("order palced")
            navigate("/")

        }
        let maulticount=(id,q)=>{
            console.log(id,q);
            let quantity=parseInt(q)>1?parseInt(q):1;
             let  carttemplate=cartitem.map((ele)=>{
                return ele.id===id?{...ele,quantity}:ele;
            })
            console.log(carttemplate);
            setcartstate(carttemplate);


        
        }

        

  return (
    <div className='first-div'>
       <p style={{textAlign:"right"}}>{cartitem.length}:item</p>
    
            {
             cartstate.map((ele)=>(
                <div className='small-div' key={ele.id}>
                    <div className='content'>
                        <img src={ele.thumbnail}/>
                        <p>{ele.title}</p>
                        <p>{ele.brand}</p>
                    </div>
                    <hr/>
                    <input type='number' onChange={(e)=>maulticount(ele.id,e.target.value)} placeholder='enter the number' style={{height:"50px",width:"50px"}} value={ele.quantity?ele.quantity:1}/>
                    
                    <div className='price-section'>
                        <p>$:{(ele.quantity?ele.quantity*ele.price:ele.price).toFixed(2)}</p>
                        <button className='btn' onClick={() =>
                                                        dispatch(removeItem(ele))
                                                    }>remove</button>
                       
                    </div>
                    

                </div>
                

                

              
             ))  
            }
            

            {/* total price */}
                    <div className='footer' style={{textAlign:"right"}}>
                        Total:$
                         {
    cartstate.reduce(
      (sum, item) =>
        item.quantity
          ? sum + item.price * item.quantity
          : sum + item.price,
      0
    ).toFixed(2)

        
    
  }
                    </div>
                    <button onClick={hadlePlaceOrder} className='btn'>place order</button>
        

        

    </div>
  )
}
