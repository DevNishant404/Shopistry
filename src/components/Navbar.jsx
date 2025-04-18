import { ShoppingCart, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchTerm } from "../features/products/productSlice";


function Navbar() {

    const [isOpen,setIsOpen]=useState(false)
    const {searchTerm}=useSelector((state)=>state.product)
    const dispatch=useDispatch()

    const cartItems=useSelector((state)=>state.cart.items)
    const itemCount=cartItems.reduce((total,item)=>total +item.quantity,0)

    function handleOnclick(e){
        e.stopPropagation()
        setIsOpen(!isOpen)
        console.log(isOpen)

    }




    useEffect(()=>{
        document.addEventListener("click",()=>{
            setIsOpen(false)
        })
    },[])

    return ( 

      <header className="">
        <div className="flex justify-between items-center shadow-sm border-b border-b-gray-300   py-3 font-medium md:px-30 px-4 ">
        <nav>
            <ul className="flex gap-4">
                <li className="cursor-pointer font-medium">Home</li>
                <li className="cursor-pointer font-medium">About</li>
                <li className="cursor-pointer font-medium">FAQs</li>
                <li className="cursor-pointer font-medium">Contact</li>
            </ul>
        </nav>
        <div className="flex relative">
            <div
            onClick={(e)=>e.stopPropagation()}
            className={`border shadow border-gray-200 w-40 rounded ${isOpen? "flex flex-col" :"hidden"} absolute right-8 top-5 bg-white`}>
                <span className="px-3 hover:bg-gray-100 cursor-pointer transition duration-150">Sign</span>
                <span className="px-3 hover:bg-gray-100 cursor-pointer transition duration-150">My Account</span>
            </div>
            <User
            onClick={(e)=>handleOnclick(e)}
            className="bg-gray-200 p-1 cursor-pointer hover:opacity-70 transition duration-150" size={30}></User>
        </div>
        </div>
        <div className="border-b  border-b-gray-300 shadow-sm md:gap-0  gap-3 py-4 md:px-30 flex justify-between  px-4">
            <Link to={"/"} className="text-white bg-zinc-800 px-3 py-0.5 font-extrabold rounded  text-xl">Shopistry</Link>
            <form
            className="w-full flex justify-center"
            action="">
                <input
                onChange={(e)=>dispatch(setSearchTerm(e.target.value))}
                value={searchTerm}

                className=" w-full md:w-[70%]  outline-none border border-gray-300 rounded-sm  px-3 py-0.5"
                type="text" placeholder="Search Product" />
            </form>
            <div className="relative">
            <Link to={"/cart"}>
            <ShoppingCart size={30} className=" cursor-pointer  hover:opacity-70 transition duration-15" />
            </Link>
            
            {
                itemCount>0 && <span className="bg-blue-500 text-white flex justify-center absolute -right-3 text-sm -top-2 items-center w-5 rounded-full h-5">{itemCount}</span>
            }
            </div>
           
        </div>
      </header>
     );
}

export default Navbar;