import { useState, useEffect } from "react";
import SeeProductBtn from "../Shared/SeeProductBtn";
import { Link, useLocation } from "react-router-dom";
import QuantityBtn from "./QuantityBtn";
import { useOutletContext } from "react-router-dom";

export default function CategoryItem({mobile,
    tablet,
    desktop,
    name,
    description,
    id,
    price,
    features,
    includes}){

    const {cart, setCart} = useOutletContext()
    
    function updateCart(){
        setCart(prev => {
            if (id in cart){
                return {
                    ...prev,
                    [id]: {
                        ...prev[id],
                        quantity: prev[id].quantity + count
                    }
                }
            }
            else {
                return {
                    ...prev,
                    [id]: {quantity: count,  
                        name,
                        price,
                        mobile,
                        tablet, 
                        desktop}
                }
            }
        })
    }


    const [currentSize, setCurrentSize] = useState("base");
    const [count, setCount] = useState(1)
    const location = useLocation()
    const category = location.state?.category || null
    
    // Define media query breakpoints
    const mediaQueries = {
        tablet: "(min-width: 640px)",
        desktop: "(min-width: 1024px)",
    };

    useEffect(() => {
        // Function to update the current size based on media queries
        const updateSize = () => {
        if (window.matchMedia(mediaQueries.desktop).matches) {
            setCurrentSize("desktop");
        } else if (window.matchMedia(mediaQueries.tablet).matches) {
            setCurrentSize("tablet");
        } else {
            setCurrentSize("base");
        }
        };

        // Initial size check and add listener for window resize
        updateSize();
        window.addEventListener("resize", updateSize);

        // Cleanup the event listener when the component unmounts
        return () => {
        window.removeEventListener("resize", updateSize);
        };
    }, []);

    // Define background styles based on the current size
    const backgroundStyle = {
        backgroundImage: `url('${
        currentSize === "desktop" ? desktop.slice(1) : currentSize === "tablet" ? desktop.slice(1) : mobile.slice(1)
        }')`,
    };
    
    const paragraphs = features.split("\n").map((item, index) => {
       return (
            <>
            <p key={`p${index}`} className="mb-6 text-base opacity-50">{item}</p> 
            </>
       )
    })

    const boxElements = includes.map((item, index) => {
        return (
            <li key={`li${index}`} className="mb-2 flex items-center justify-start">
               <span className="text-orange-400 font-bold w-8">{`${item.quantity}`}x</span> 
               <span className="text-base opacity-50 ml-2">{item.item}</span>
            </li>
        )
    })


    return (
        <div className="mt-6 ">
        <div>
            <Link to={category ? `/category/${category}` : "../"} preventScrollReset={true}  className="text-base opacity-50 ">Go back</Link>
        </div>
            <div className={`w-full mt-6 flex flex-col items-start text-left sm:gap-16 sm:flex-row sm:items-center  py-6`}>
                <div
                    className="py-44 sm:py-60 sm:px-36 w-full sm:w-0 lg:w-full rounded-lg  bg-cover bg-center"
                    style={backgroundStyle}    
                >
                </div>
                <div className="flex flex-col items-start gap-6 mt-6 sm:mt-0">
                    {id === 4 && <p className="text-center text-orange-400 text-sm font-normal uppercase tracking-[10px]">NEW PRODUCT</p>}
                    <h2>{name}</h2>
                    <p className="text-base opacity-50">{description}</p>
                    <p className="text-black text-lg font-bold uppercase tracking-widest">${price.toLocaleString("en-US")}</p>
                    <div className="flex justify-start gap-3 w-full ">
                        <QuantityBtn 
                            value={count} 
                            remove={() => setCount(prev => prev - 1)}
                            add={() => setCount(prev => prev + 1)}
                        />
                        <SeeProductBtn action={updateCart}>add to cart</SeeProductBtn>
                    </div>
                </div>
            </div>
            <div className={`w-full my-20 flex flex-col items-start text-left sm:gap-16 py-6`}>
                <div className="flex flex-col items-start gap-6 lg:flex-row lg:justify-between ">
                    <div className="lg:w-2/3">
                        <h3 className="text-2xl mb-6 uppercase">FEATURES</h3>
                        {paragraphs}
                    </div>
                    <div className="mt-16 flex flex-col sm:mt-0 sm:max-lg:flex-row justify-start sm:w-full lg:w-1/3 lg:ml-6">
                        <h3 className="text-2xl mb-6 uppercase sm:max-lg:w-1/2">IN THE BOX</h3>
                        <ul className="sm:max-lg:w-1/2">
                            {boxElements}
                        </ul>
                    </div>
                </div>
               
            </div>
        </div>
    )

}