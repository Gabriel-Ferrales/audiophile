import {Outlet} from "react-router-dom"
import NavBar from "../components/Shared/NavBar"
import Footer from "../components/Shared/Footer"
import { ScrollRestoration } from "react-router-dom"
import { useState } from "react"
import CartContent from "../components/Shared/CartContent"
import useLocalStorageState from 'use-local-storage-state'

export default function Layout(){
    const [cart, setCart] = useLocalStorageState("cart", {
        defaultValue : {}
    })
    const [isCartOpen, setIsCartOpen] = useState(false)

    function onCartIconClick(){
        setIsCartOpen(prev => !prev)
    }

    return (
        <>
        <div className="">
            <NavBar onCartIconClick={onCartIconClick} cartData={cart}/>
            <main>
                {isCartOpen && <CartContent cartData={cart} setCart={setCart} setIsCartOpen={setIsCartOpen}/>}
                <Outlet context={{cart, setCart}}/>
            </main>
            <Footer />
            <ScrollRestoration />
        </div>
        </>
    )
}