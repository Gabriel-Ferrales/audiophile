import { useEffect, useState,  } from "react"
import SeeProductBtn from "./SeeProductBtn"
import QuantityBtn from "../Details/QuantityBtn"
import { Link, useNavigate } from "react-router-dom"

export default function CartContent({cartData, setCart , setIsCartOpen}){
    const [total, setTotal] = useState(0)
    const keys = Object.keys(cartData)
    const [update, setUpdate] = useState(0)
    const navigate = useNavigate()
    
    let totalSum = 0

    function addToCart(id){
        setCart(prev => {
            if (id in cartData){
                return {
                    ...prev,
                    [id]: {
                        ...prev[id],
                        quantity: prev[id].quantity + 1
                    }
                }
            }
        })
    }

    function removeFromCart(id){
        setCart(prev => {
            if (id in cartData){
                return {
                    ...prev,
                    [id]: {
                        ...prev[id],
                        quantity: prev[id].quantity - 1
                    }
                }
            }
        })
    }
   
    
    const cartElements = keys.map((item, index) => {

        totalSum += cartData[item].price * cartData[item].quantity
        
        return (
            <div className="flex w-full justify-between" key={`cartElement${index}`}>
                <img className="h-16 w-16 rounded-xl" src={(cartData[item].mobile).slice(1)} />
                <div className="flex flex-col justify-center">
                    <p className="font-bold">{(cartData[item].name).slice(0, 5)}</p>
                    <p className="opacity-50 font-bold text-sm">${(cartData[item].price).toLocaleString("en-US")}</p>
                </div>
                <QuantityBtn 
                    value={cartData[item].quantity} 
                    add={() =>{ 
                        addToCart(item)
                        setUpdate(prev => prev + 1)
                    }} 
                    remove={() => {
                        removeFromCart(item)
                        setUpdate(prev => prev + 1)
                    }}
                />
            </div>
        )
    })

    useEffect(() => setTotal(totalSum), [update])
   
    return (
        <div className="fixed top-0 left-0 w-full h-full pt-24 bg-black bg-opacity-50 z-30 px-6">
            <div className="w-full rounded-lg border bg-white max-w-sm py-8 px-7 z-50 ml-auto mr-12">
                <div className="flex justify-between mb-8">
                    <h3>{`CART (${keys.length})`}</h3>
                    <button onClick={() => {
                        setCart({})
                        setTotal(0)
                        }} className="underline opacity-50 hover:opacity-100">Remove all</button>
                </div>
                <div className="flex flex-col gap-6 mb-8">
                    {cartElements}
                </div>
                <div>

                </div>
                    
              
                <SeeProductBtn 
                full={true} 
                disabled={keys.length < 1}
                action={() => {
                        navigate("/checkout")
                        setIsCartOpen(false)
                    }}>
                    CHECKOUT
                </SeeProductBtn>
              

                <div className="flex justify-between mt-8 mb-6">
                    <p className="uppercase opacity-50">total</p>
                    <h3>${total.toLocaleString("en-US")}</h3>
                </div>

                    
            </div>
        </div>
    )
}