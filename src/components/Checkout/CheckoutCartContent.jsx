import { useEffect, useState } from "react"
import SeeProductBtn from "../Shared/SeeProductBtn"
import QuantityBtn from "../Details/QuantityBtn"
import { Link, matchRoutes } from "react-router-dom"
import PayedModal from "./PayedModal"

export default function CheckoutCartContent({cartData, payed}){
    const [total, setTotal] = useState(0)
    const keys = Object.keys(cartData)
    let totalSum = 0
    const vat = (Math.floor(total * .20))
    const grandTotal = (total + 50 + vat)
    
    const cartElements = keys.map((item, index) => {

        totalSum += cartData[item].price * cartData[item].quantity
        
        return (
            <div className="flex w-full justify-between" key={`cartElement${index}`}>
                <img className="h-16 w-16 rounded-xl" src={(cartData[item].mobile).slice(1)} />
                <div className="flex flex-col justify-center mr-auto ml-4">
                    <p className="font-bold">{(cartData[item].name).slice(0, 5)}</p>
                    <p className="opacity-50 font-bold text-sm">${cartData[item].price}</p>
                </div>
                <p className="opacity-50 font-bold text-sm self-start mt-3">x{cartData[item].quantity}</p>
            </div>
        )
    })

    useEffect(() => setTotal(totalSum), [])
   
    return (
        <div className="">
            <div className="w-full rounded-lg  bg-white py-8 px-7 z-50">
                <h3 className="mb-8 uppercase">summary</h3>
                <div className="flex flex-col gap-6 mb-8">
                    {cartElements}
                </div>
                <div>

                </div>
                    
                <Link to={"/checkout"}>
                    <SeeProductBtn full={true} action={"submit"}>continue & pay</SeeProductBtn>
                </Link>

                <div className="flex justify-between mt-8 ">
                    <p className="uppercase opacity-50">total</p>
                    <h3>${total.toLocaleString("en-US")}</h3>
                </div>

                <div className="flex justify-between my-2">
                    <p className="uppercase opacity-50">shipping</p>
                    <h3>$50</h3>
                </div>

                <div className="flex justify-between my-2">
                    <p className="uppercase opacity-50">VAT (included)</p>
                    <h3>${vat.toLocaleString("en-US")}</h3>
                </div>

                <div className="flex justify-between mt-6 mb-8">
                    <p className="uppercase opacity-50">grand total</p>
                    <h3 className="text-orange-400">${grandTotal.toLocaleString("en-US")}</h3>
                </div>

                {payed && <PayedModal  grandTotal={grandTotal}/>}
                    
            </div>
        </div>

       
    )
}