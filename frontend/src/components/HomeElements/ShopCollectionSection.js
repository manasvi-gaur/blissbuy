import { Link } from "react-router-dom"
import { products } from "../../Sampleprods/productSample"
  
  export default function ShopCollectionSection() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* <h1 style={{textAlign:"center", fontSize:"25vmin", fontFamily:"Cera Stencil Pro,Montserrat,sans-serif",color:"#000"}}>SHOP OUR COLLECTIONS</h1> */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:text-xl md:text-2xl lg:text-3xl text-center">
        SHOP OUR COLLECTIONS
        </h1>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link to={`/Women/Brands/Bliss`} key={product.href} className="group">
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between ">
                  <div>
                    <h3 className="text-sm ">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.line}</p>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
          
        </div>
      </div>
    )
  }
  