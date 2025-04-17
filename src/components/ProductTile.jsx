import { products } from "../productContent";
import ProductCard from "./ProductCard";

function ProductTile() {

    return(
        <div className="grid lg:grid-cols-4  grid-cols-2  gap-4 mt-5 md:px-30 px-3  ">
        {
            products.map((product)=>{
              return <ProductCard key={product.id} product={product}></ProductCard>
            })
        }
    </div>
    )

}

export default ProductTile;