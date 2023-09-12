import {Link, useOutletContext} from "react-router-dom"
import SeeProductBtn from "../Shared/SeeProductBtn"
import { useState } from "react"

export default function PayedModal({grandTotal}){
    const {cart, setCart} = useOutletContext()
    const keys = Object.keys(cart)
    const [fullList, setFullList] = useState(false)
    
    const cartElements = keys.map((item, index) => {
        
        return (
            <div className="flex w-full justify-between items-center border-b border-zinc-200" key={`payModal${index}`}>
                <img className="h-16 w-16 rounded-xl" src={(cart[item].mobile).slice(1)} />
                
                <div className="flex flex-col justify-center mr-auto ml-4">
                    <p className="font-bold">{(cart[item].name).slice(0, 5)}</p>
                    <p className="opacity-50 font-bold text-sm">${cart[item].price}</p>
                </div>

                <p className="opacity-50 font-bold text-sm self-start mt-3">x{cart[item].quantity}</p>
            </div>
            
        )
    })




    return (
        <div className="fixed top-0 left-0 w-full h-full pt-24 bg-black bg-opacity-50 z-50 px-6 flex flex-col justify-center">
                    
            <div className="w-full rounded-lg border bg-white max-w-xl py-8 px-7 z-50 mx-auto my-auto">
                <img src="assets/checkout/icon-order-confirmation.svg" />
                <h2 className="mt-8">thank you for your order</h2>
                <p className="mt-4 opacity-50">You will receive an email confirmation shortly.</p>

                <div className="my-6 sm:flex">

                    <div className="bg-zinc-100 py-6 px-8 rounded-t-lg flex flex-col items-center   sm:rounded-none sm:rounded-l-lg grow">
                        {fullList ? cartElements : cartElements.slice(0,1)}
                        {keys.length > 1 && 
                        <p  className="mt-3 opacity-50 cursor-pointer font-bold" 
                            onClick={() => setFullList(prev => !prev)}>

                            {fullList ? "View less" : `and ${keys.length - 1} other item(s)`}

                        </p>}
                    </div>

                    <div className="bg-black py-6 px-8 rounded-b-lg sm:rounded-none sm:rounded-r-lg grow">
                        <p className="opacity-50 text-white tracking-widest">GRAND TOTAL</p>
                        <p className="text-white text-lg font-bold tracking-widest">${grandTotal.toLocaleString("en-US")}</p>
                    </div>

                </div>

                <Link to={"/"}>
                    <SeeProductBtn full={true} action={() => setCart({})}>back to home</SeeProductBtn>
                </Link>

            </div>
        
        </div>
    )
}