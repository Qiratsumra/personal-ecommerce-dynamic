'use client'
import { useParams } from 'next/navigation';
import Image from 'next/image';

import f1 from "../../../../public/f1.png"
import f2 from "../../../../public/f2.png"
import f3 from "../../../../public/f3.png"
 
import b1 from '../../../../public/b1.png'
import b2 from '../../../../public/b2.png'
import b3 from '../../../../public/b3.png'

import e1 from "../../../../public/e1.png"
import e2 from '../../../../public/e2.png'
import e3 from '../../../../public/e3.png'

import el1 from "../../../../public/el1.png"
import el2 from "../../../../public/el2.png"
import el3 from '../../../../public/el3.png'

import fix1 from '../../../../public/fix1.png'
import fix2 from '../../../../public/fix2.png'
import fix3 from '../../../../public/fix3.png'

import primer1 from '../../../../public/primer1.png'
import primer2 from '../../../../public/primer2.png'
import primer3 from '../../../../public/primer3.png'

import c1 from '../../../../public/curler1.png'
import c2 from '../../../../public/curler2.png'
import c3 from '../../../../public/curler3.png'

import { useContext, useState } from 'react';
import { createCartContext } from '../../components/context/CardContext';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';



export default function page() {
    const {id} = useParams();   
    
    if (!id) {
        return <p>Loading...</p>;
      }

      const ProductDetailsData ={
        'foundation':{name:' Miss Rose Flawless Foundation', caption:"Achieve a perfect base with Miss Rose Flawless Foundation.", price:"600",description:'A long-lasting foundation that provides a flawless, natural finish. Suitable for all skin types, it blends seamlessly to cover imperfections while keeping your skin feeling smooth and hydrated.', image:[f1,f2,f3]},

        'blush':{id:'2',name:'Miss Rose Blush', caption:'Add a touch of warmth with Miss Rose Blush for a radiant glow.', price:'500',description:' A soft, buildable blush that adds a natural flush of color to your cheeks. Its silky texture ensures smooth application and long-lasting wear.', image:[b1,b2,b3]},

       'eyeshadow': {id:'3',name:'Miss Rose Eyeshadow', caption:'Elevate your eye makeup with Miss Rose Eyeshadow for vibrant color and long-lasting wear.',description:'A highly pigmented eyeshadow palette with a mix of matte and shimmer shades. Perfect for creating both everyday looks and dramatic eye makeup.',price:'1000', image:[e1,e2,e3]},

       'eyeliner':{name:'Miss Rose Eyeliner Gel',price:'500', caption:'Define your eyes with precision and elegance ✨ Miss Rose Liner Gel—your go-to for smudge-proof, long-lasting perfection! 💕', description:'Achieve bold and beautiful eyes effortlessly with the Miss Rose Liner Gel. Its creamy, waterproof formula glides on smoothly, delivering intense pigmentation and a flawless finish. Perfect for creating sharp lines or dramatic wings, this liner stays put all day without smudging or fading. Ideal for both beginners and pros, it’s your ultimate makeup essential for any occasion. 💖✨', image:[el1,el2,el3]},
       'fixer':{ name:'MISS ROSE Makeup Setting Spray', caption:`Set it and slay it! 💄✨ Lock your flawless look with MISS ROSE Makeup Setting Spray – your beauty's finishing touch 💖🌸`, description:`MISS ROSE Makeup Setting Spray is your ultimate beauty companion, designed to keep your makeup fresh, flawless, and smudge-proof all day long. This lightweight, non-sticky formula sets your look with a natural finish, preventing fading or creasing. Suitable for all skin types, it ensures a lasting glow, no matter the occasion. Perfect for everyday wear or special events, MISS ROSE Setting Spray is the key to confidence that stays! 🌟`, image:[fix1,fix2,fix3],price:'599'},
       'primer':{name:'MISS ROSE Photo Finish Face Primer',caption:`Prime to perfection! ✨ Smooth, flawless, and ready to slay with MISS ROSE Photo Finish Face Primer – your makeup's best friend! 💖🌸`,description:`MISS ROSE Photo Finish Face Primer is the ultimate prep step for a flawless makeup application. This lightweight, silky formula creates a smooth, even base by minimizing pores, fine lines, and imperfections. Designed to enhance the longevity of your makeup, it ensures a photo-ready, matte finish that lasts all day. Suitable for all skin types, this primer keeps your skin looking fresh, radiant, and perfectly prepped for any occasion. 🌟`, price:'800',image:[primer1,primer2, primer3]},
       "curler":{name:'Miss Rose Eyelash Curler', caption:`Lift, curl, and captivate! ✨ Get stunning lashes in seconds with the MISS ROSE Eyelash Curler – your secret to irresistible eyes! 👁️💕`, description:`The MISS ROSE Eyelash Curler is designed to give your lashes a natural, long-lasting curl with ease. Its ergonomic design and soft silicone pads ensure a comfortable grip and gentle curling without pinching or tugging. Perfect for all eye shapes, this beauty essential enhances your lashes, creating a wide-eyed, dramatic look in seconds. Pair it with your favorite mascara for lashes that steal the show every time! 🌟`, price:'300',image:[c1,c2,c3]}
    }
  

    const productDetail =ProductDetailsData[id as keyof typeof ProductDetailsData];
    console.log(productDetail);
    
    const [imageIndex,setImageIndex] = useState(0);

    const {quantity, increaseQunatity,decreaseQuantity, addProductToCart, cartItem}:any = useContext(createCartContext);
    console.log(cartItem);
    
  return (
    <div>
        <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Section */}
      <div>
        {/* Top Image */}
        <div className="h-[300px] sm:h-[450px] flex items-center justify-center mb-6">
          <Image src={productDetail.image && productDetail.image[imageIndex]}  alt="Product" className="object-contain mx-auto h-full w-full rounded-lg shadow-md" />
        </div>
  
        {/* Bottom Thumbnails */}
        <div className="flex gap-2 justify-center overflow-x-auto">
          {productDetail.image?.map((item: any, index: number) => (
            <Image key={index} src={productDetail.image && productDetail.image[index]} alt={`Thumbnail ${index + 1}`} className={`object-cover h-24 w-24 sm:h-32 sm:w-32 border rounded-xl hover:cursor-pointer transition-shadow duration-300 ${  imageIndex === index ? 'shadow-xl border-black' : 'shadow-md'   }`} onClick={() => setImageIndex(index)}  />
          ))}
        </div>
      </div>
  
      {/* Right Section */}
      <div className="flex flex-col gap-6">
        {/* Product Name and Price */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900">
            {productDetail.name}
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium font-serif text-[#6d6a6a] mt-2">
            Rs.{productDetail.price}
          </h2>
          <p className='text-gray-600'>{productDetail.description}</p>
        </div>
  
  {/* Quantity Selector */}
        <div className="flex items-center gap-4">
          <h3 className="font-medium text-gray-600">Quantity:</h3>
          <div className="flex items-center border border-gray-400 rounded-lg px-4 py-2">
            <button
              className="text-red-500 hover:text-red-700 cursor-pointer" onClick={decreaseQuantity}>
              <AiOutlineMinus />
            </button>
            <span className="mx-4 font-semibold text-lg">{quantity}</span>
            <button
              className="text-green-500 hover:text-green-700 cursor-pointer" onClick={increaseQunatity}>
              <AiOutlinePlus />
            </button>
          </div>
        </div> 
  
        {/* Add to Cart Button */}
        <button className="w-full md:w-auto px-5 py-2.5 rounded-lg text-sm font-medium border border-black bg-transparent hover:bg-black text-black hover:text-white transition-all duration-300" onClick={()=>addProductToCart(productDetail,quantity)}>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
    </div>
  )
}