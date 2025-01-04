import Image from "next/image";
import hero from '../../../public/hero.png'
 export default function Hero(){
    return(
        <div>
            <Image src={hero} alt=""></Image>
        </div>
    )
 }