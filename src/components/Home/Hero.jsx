import SeeProductBtn from "../Shared/SeeProductBtn"
import { Link } from "react-router-dom"
import jsonData from "../../data/data.json"

export default function Hero(){
  
    return (
        <>
        <div className="w-full h-px bg-gray-800"/>

        <div className="bg-[url('/assets/home/mobile/image-header.jpg')]  
                        sm:bg-[url('/assets/home/tablet/image-header.jpg')]
                        lg:bg-[url('/assets/home/desktop/image-hero.jpg')]
                        bg-cover bg-center ">
            <div className="py-36 lg:py-60 flex flex-col justify-center items-center px-6 lg:items-start lg:w-11/12 lg:mx-auto ">

                <h2 className="opacity-50 text-center text-white text-sm font-normal uppercase tracking-[10px]">NEW PRODUCT</h2>
                <h1 className="text-center text-white text-4xl sm:text-6xl font-bold uppercase tracking-widest mt-4 mb-6">XX99 Mark II<br/>Headphones</h1>
                <div className="lg:w-1/3 ">
                    <p className="text-center lg:text-left text-white text-base ">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                </div>
                <div className="mt-6">
                    <Link to={"details/4"}>
                        <SeeProductBtn />
                    </Link>
                </div>
            
            </div>
        </div>
        </>
    )
}

