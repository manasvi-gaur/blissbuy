/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'LEMON & SAGE',
      href: '#',
      imageSrc: 'https://www.blissworld.com/cdn/shop/files/Bliss_Homepage_January_2024_Collection_Tile_Lemon_Sage_2x_cdb6980e-2c87-456c-844c-89d6faa7562e_400x.jpg?v=1704291923',
      line:"The supreme scent that put us on the map!"
    //   price: '$35',
    //   color: 'Black',
    
    },
    {
        id: 2,
        name: 'DRENCH & QUENCH',
        href: '#',
        imageSrc: 'https://www.blissworld.com/cdn/shop/files/Bliss_Homepage_January_2024_Collection_Tile_Drench_Quench_2x_b17a1bd4-c413-4b91-86d6-6d0f81dc66df_400x.jpg?v=1704292045',
        line:"Supercharged moisturizers for happy, hydrated skin."
      //   price: '$35',
      //   color: 'Black',
      
      },
      {
        id: 3,
        name: 'BRIGHT IDEA',
        href: '#',
        imageSrc: 'https://www.blissworld.com/cdn/shop/files/Bliss_Homepage_January_2024_Collection_Tile_Bright_Idea_2x_77274108-7f97-4ee8-b60a-bd411f4c0258_400x.jpg?v=1704292184',
        line:"Clinical-grade formulas for visibly radiant results."
      //   price: '$35',
      //   color: 'Black',
      
      },
      {
        id: 4,
        name: 'DRENCH & QUENCH',
        href: '#',
        imageSrc: 'https://www.blissworld.com/cdn/shop/files/Bliss_Homepage_January_2024_Collection_Tile_Block_Star_2x_f4775a75-ac23-4a96-9b87-715ef057b903_400x.jpg?v=1704292269',
        line:"Clean, 100% mineral sunscreen for supreme sun protection and a non-greasy finish."
      //   price: '$35',
      //   color: 'Black',
      
      }
  ]
  
  export default function ShopCollectionSection() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* <h1 style={{textAlign:"center", fontSize:"25vmin", fontFamily:"Cera Stencil Pro,Montserrat,sans-serif",color:"#000"}}>SHOP OUR COLLECTIONS</h1> */}
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
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
            ))}
          </div>
        </div>
      </div>
    )
  }
  