import Image from "next/image"

import b1 from "../../../public/b1.png"
import e1 from "../../../public/e1.png"
import f1 from "../../../public/f1.png"
import el1 from "../../../public/el1.png"
import bp1 from '../../../public/bp1.png'
import fix1 from '../../../public/fix1.png'
import primer1 from '../../../public/primer1.png' 
import c1 from '../../../public/curler1.png'

import Link from "next/link"

const ProductListData =[
    {id:'foundation',name:' Miss Rose Flawless Foundation', caption:"Achieve a perfect base with Miss Rose Flawless Foundation.", price:"600",description:'A long-lasting foundation that provides a flawless, natural finish. Suitable for all skin types, it blends seamlessly to cover imperfections while keeping your skin feeling smooth and hydrated.', image:f1},
    {id:'blush',name:'Miss Rose Blush', caption:'Add a touch of warmth with Miss Rose Blush for a radiant glow.', price:'500',description:' A soft, buildable blush that adds a natural flush of color to your cheeks. Its silky texture ensures smooth application and long-lasting wear.', image:b1},
    {id:'eyeshadow',name:'Miss Rose Eyeshadow', caption:'Elevate your eye makeup with Miss Rose Eyeshadow for vibrant color and long-lasting wear.',description:'A highly pigmented eyeshadow palette with a mix of matte and shimmer shades. Perfect for creating both everyday looks and dramatic eye makeup.',price:'1000', image:e1},
    {id:'eyeliner',name:'Miss Rose Eyeliner Gel',price:'500', caption:'Define your eyes with precision and elegance ✨ Miss Rose Liner Gel—your go-to for smudge-proof, long-lasting perfection! 💕', description:'Achieve bold and beautiful eyes effortlessly with the Miss Rose Liner Gel. Its creamy, waterproof formula glides on smoothly, delivering intense pigmentation and a flawless finish. Perfect for creating sharp lines or dramatic wings, this liner stays put all day without smudging or fading. Ideal for both beginners and pros, it’s your ultimate makeup essential for any occasion. 💖✨', image:el1 },
    {id:'fixer', name:'MISS ROSE Makeup Setting Spray', caption:`Set it and slay it! 💄✨ Lock your flawless look with MISS ROSE Makeup Setting Spray – your beauty's finishing touch 💖🌸`, description:`MISS ROSE Makeup Setting Spray is your ultimate beauty companion, designed to keep your makeup fresh, flawless, and smudge-proof all day long. This lightweight, non-sticky formula sets your look with a natural finish, preventing fading or creasing. Suitable for all skin types, it ensures a lasting glow, no matter the occasion. Perfect for everyday wear or special events, MISS ROSE Setting Spray is the key to confidence that stays! 🌟`, image:fix1,price:'599'},
    {id:'blushplatte', name:'Miss Rose 6 Color Blush',caption:'Blush your way to beauty! 🌸✨ Add a pop of color with MISS ROSE 6 Color Blush – your palette for endless radiance! 💕🎨', description:`MISS ROSE 6 Color Blush Palette is your go-to for a perfect, radiant glow. Featuring six versatile shades, this palette lets you mix, match, and create a variety of stunning looks, from a natural flush to bold, rosy cheeks. The silky, blendable formula ensures a smooth application with long-lasting color. Ideal for all skin tones, it's perfect for enhancing your beauty with a touch of elegance and charm. 🌟`,price:'800', image:bp1},
    {id:'primer', name:'MISS ROSE Photo Finish Face Primer',caption:`Prime to perfection! ✨ Smooth, flawless, and ready to slay with MISS ROSE Photo Finish Face Primer – your makeup's best friend! 💖🌸`,description:`MISS ROSE Photo Finish Face Primer is the ultimate prep step for a flawless makeup application. This lightweight, silky formula creates a smooth, even base by minimizing pores, fine lines, and imperfections. Designed to enhance the longevity of your makeup, it ensures a photo-ready, matte finish that lasts all day. Suitable for all skin types, this primer keeps your skin looking fresh, radiant, and perfectly prepped for any occasion. 🌟`, price:'800', image:primer1},
    {id:'curler',name:'Miss Rose Eyelash Curler', caption:`Lift, curl, and captivate! ✨ Get stunning lashes in seconds with the MISS ROSE Eyelash Curler – your secret to irresistible eyes! 👁️💕`, description:`The MISS ROSE Eyelash Curler is designed to give your lashes a natural, long-lasting curl with ease. Its ergonomic design and soft silicone pads ensure a comfortable grip and gentle curling without pinching or tugging. Perfect for all eye shapes, this beauty essential enhances your lashes, creating a wide-eyed, dramatic look in seconds. Pair it with your favorite mascara for lashes that steal the show every time! 🌟`, price:'300', image:c1}
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