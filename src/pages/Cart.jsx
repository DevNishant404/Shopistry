import { Minus, Plus, Trash } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {

  const cartItem=useSelector((state)=>state.cart.items)

  const total=cartItem.reduce((sum,item)=>sum+ item.price*Number(item.quantity),0)

  if(cartItem.length===0){
    return(
      <div className="w-fit mx-auto text-center mt-10 ">
        <h2 className="font-semibold">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-4">Add Some Products to Your Cart to see them here</p>
        <Link className="border border-gray-200 shadow px-3 py-0.5 hover:bg-gray-200 transition duration-150 " to={"/"}>Continue Shopping</Link>
      </div>
    )
  }

    return (
        <div className="md:px-30 px-3 py-1">
          <p className="text-xl font-semibold mb-2">Shopping Cart</p>
          <div className="flex sm:flex-row flex-col gap-4  ">
            <div className="lg:w-[60%] sm:w-[70%] border w-full flex flex-col gap-2 border-gray-200 shadow">
              {
                cartItem.map((addedCartItem)=>{
                  return (
                    <div key={addedCartItem.id} className="border-b flex gap-4 items-center  border-b-gray-200">
                    <Link to={`/product/${addedCartItem.id}`}>
                      <img
                      className="w-24 h-20  rounded object-cover"
                      src={addedCartItem.image} alt="" />
                    </Link>
                    <div>
                      <Link to={`/product/${addedCartItem.id}`} className="font-semibold">{addedCartItem.title}</Link>
                      <p className="font-semibold text-blue-500 text-sm">${addedCartItem.price}</p>
                      <div className="flex items-center gap-2">
                      <button className="bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full ">
                      <Minus size={16}></Minus>
                      </button>
                      <span className="text-sm">{addedCartItem.quantity}</span>
                      <button className="bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full">
                        <Plus size={16}></Plus>
                      </button>
                      <Trash size={16} className="text-red-600"></Trash>
                      </div>
                      
                    </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="border border-gray-200 shadow w-full sm:w-[40%] p-2">
              <h3 className="font-semibold mb-1 ">Order summary</h3>
              <div className="flex justify-between text-sm text-gray-700 mb-1">
                <p>Sub Total</p>
                <p>${total}</p>
              </div>
              <div className="flex justify-between text-sm text-gray-700 mb-2">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between">
              <p  className="text-sm font-semibold">Total</p>
              <p className="text-sm font-semibold">${total.toFixed(2)}</p>
              </div>
              <button className="text-sm w-full font-semibold bg-gray-200 hover:bg-gray-300 transition duration-150 cursor-pointer py-1">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      );
}

export default Cart;