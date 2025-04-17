import Footer from "../components/Footer";
import ProductTile from "../components/ProductTile";
import { categories } from "../productContent";

function Home() {
    return (  

        <div>
            <div className="h-[70vh] bg-[url('./assets/images/bannerimg8.png')] bg-cover  bg-center "></div>
            <div className="flex sm:gap-4 px-3 flex-wrap sm:px-0 gap-1 py-4 sm:justify-center">
                {
                    categories.map((category ,idx)=>{
                        return <span key={idx} className="px-3 py-0.5 bg-gray-200 border border-gray-300 hover:bg-gray-300 transition duration-150 rounded cursor-pointer">{category}</span>
                    })
                }
            </div>

            <ProductTile></ProductTile>
            <Footer></Footer>
        </div>
    );
}

export default Home;