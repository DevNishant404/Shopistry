import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({product}) {
    const navigate=useNavigate()
    const [currentProduct,setCurrentProduct]=useState()

        function openProductDetails(){
            navigate(`/product/${product.id}`)
            
            }
        return (
            <div
            onClick={()=>openProductDetails(product)}
            className=" shadow border-gray-200 border rounded cursor-pointer" key={product.id}>
                <img className="sm:h-[260px] h-[200px] w-full object-cover border-b border-gray-200 rounded" src={product.image} alt="" />
                <div className="p-3 border-b border-gray-200">
                <h3>{product.title.substring(0,20)+"..."}</h3>
                <p className="tracking-tight leading-4 text-sm text-gray-600">{product.description.substring(0,50)+"..."}</p>
                </div>
                <div className="flex justify-between items-center px-3 py-2">
                    <p className="font-bold">${product.price}</p>
                    <p className="cursor-pointer text-sm">View Details</p>
                </div>
            </div>
        )
}

export default ProductCard;