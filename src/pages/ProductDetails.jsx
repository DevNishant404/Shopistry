import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";

function ProductDetails() {
    const {id}=useParams()
    const dispatch=useDispatch()

    const product=useSelector((state)=>{
      return  state.product.items.find((p)=>p.id === parseInt(id))
    })

    return ( 

        <div className="flex sm:flex-row flex-col   md:px-30 px-3 gap-4 sm:gap-10 mt-10">
            <img className="max-w-[35%] min-w-[250px] rounded-md  sm:max-h-[400px] shadow-md border border-gray-200" src={product.image} alt="" />
            <div>
                <h1 className="text-3xl font-bold">{product.title}</h1>
                <p className="text-gray-500 mb-2">{product.description}</p>
                <p className="font-bold mb-1">${product.price}</p>
                <p className="font-semibold mb-2">Category <br />{product.category}</p>
                <button
                onClick={()=>dispatch(addToCart(id))}
                className="flex gap-3 bg-gray-200 px-3 py-0.5 hover:bg-gray-300 rounded transition duration-150 cursor-pointer"><ShoppingCart /> Add to Cart</button>
            </div>
        </div>
     );
}

export default ProductDetails;