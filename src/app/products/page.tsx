import Image from "next/image"

import b1 from "../../../public/b1.png"
import e1 from "../../../public/e1.png"
import f1 from "../../../public/f1.png"
import el1 from "../../../public/el1.png"

import Link from "next/link"

const ProductListData =[
    {id:'foundation',name:' Miss Rose Flawless Foundation', caption:"Achieve a perfect base with Miss Rose Flawless Foundation.", price:"600",description:'A long-lasting foundation that provides a flawless, natural finish. Suitable for all skin types, it blends seamlessly to cover imperfections while keeping your skin feeling smooth and hydrated.', image:f1},
    {id:'blush',name:'Miss Rose Blush', caption:'Add a touch of warmth with Miss Rose Blush for a radiant glow.', price:'500',description:' A soft, buildable blush that adds a natural flush of color to your cheeks. Its silky texture ensures smooth application and long-lasting wear.', image:b1},
    {id:'eyeshadow',name:'Miss Rose Eyeshadow', caption:'Elevate your eye makeup with Miss Rose Eyeshadow for vibrant color and long-lasting wear.',description:'A highly pigmented eyeshadow palette with a mix of matte and shimmer shades. Perfect for creating both everyday looks and dramatic eye makeup.',price:'1000', image:e1},
    {id:'eyeliner',name:'Miss Rose Eyeliner Gel',price:'500', caption:'Define your eyes with precision and elegance ✨ Miss Rose Liner Gel—your go-to for smudge-proof, long-lasting perfection! 💕', description:'Achieve bold and beautiful eyes effortlessly with the Miss Rose Liner Gel. Its creamy, waterproof formula glides on smoothly, delivering intense pigmentation and a flawless finish. Perfect for creating sharp lines or dramatic wings, this liner stays put all day without smudging or fading. Ideal for both beginners and pros, it’s your ultimate makeup essential for any occasion. 💖✨', image:el1 }
]

export default function ProductList() {

    return (
        <div className="font-sans py-4 mx-auto lg:max-w-6xl md:max-w-4xl max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-10">Miss Rose Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-4">
            {ProductListData.map((item)=>(
               <Link href={`/products/${item.id}`}>
                 <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
                <div className="w-full h-[200px] sm:h-[300px] overflow-hidden mx-auto">
                  <Image src={item.image} alt={`${item.name}`}
                    className="h-f.ull w-full object-contain" />
                </div>
      
                <div className="absolute mx-auto left-0 right-0 bottom-2 lg:-bottom-80 lg:group-hover:bottom-2 bg-black/60 lg:bg-white w-11/12 p-2 lg:p-3 rounded-lg transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-sm lg:text-base font-bold text-gray-300 lg:text-gray-800">{item.name}</h3>
                    <h4 className="text-sm lg:text-base text-[#A9A9A9] font-bold mt-2">Rs.{item.price}</h4>
                  </div>
      
                
                </div>
              </div>
               </Link>
            ))}
         </div>  
          </div>
  )
}