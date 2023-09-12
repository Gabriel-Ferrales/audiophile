import { useState, useEffect } from "react";
import SeeProductBtn from "../Shared/SeeProductBtn";
import { Link } from "react-router-dom";

export default function CategoryItem({mobile, tablet, desktop, name, description, index, id, category}){
    const [currentSize, setCurrentSize] = useState("base");

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
        currentSize === "desktop" ? desktop.slice(1) : currentSize === "tablet" ? tablet.slice(1) : mobile.slice(1)
        }')`,
    };
    
    const rowType = index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"

    return (
        <div className={`w-full mt-16 mb-20 flex flex-col items-center text-center lg:gap-8 ${rowType}`}>
            <div
                className="h-[22rem] lg:h-[28rem] w-full rounded-lg  bg-cover bg-center lg:w-1/2"
                style={backgroundStyle}    
            >
            </div>
            <div className="flex flex-col items-start gap-6 mt-6 lg:w-1/2 text-left">
                {id === 4 && <p className="text-orange-400 text-sm font-normal uppercase tracking-[10px]">NEW PRODUCT</p>}
                <h2>{name}</h2>
                <p className="text-base opacity-50">{description}</p>
                <Link to={`/details/${id}`} state={{
                    category
                }}>
                    <SeeProductBtn />
                </Link>
            </div>
        </div>
    )

}