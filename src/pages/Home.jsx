import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
import ProductTile from "../components/ProductTile";
import { categories } from "../productContent";
import { setSelectedCategory } from "../features/products/productSlice";

function Home() {
    const dispatch=useDispatch()
    return (  

        <div>
            <div className="sm:h-[0vh] h-50 bg-[url('/assets/images/bannerimg8.png')] bg-cover  bg-center "></div>
            <div className="flex sm:gap-4 px-3 flex-wrap sm:px-0 gap-1 py-4 justify-center">
                {
                    categories.map((category ,idx)=>{
                        return <span
                        onClick={()=>dispatch(setSelectedCategory(category))}
                        key={idx} className="px-3 py-0.5 bg-gray-200 border border-gray-300 hover:bg-gray-300 transition duration-150 rounded cursor-pointer">{category}</span>
                    })
                }
            </div>

            <ProductTile></ProductTile>
        </div>
    );
}

export default Home;