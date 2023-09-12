import { useState, useEffect } from "react";
import SeeProductBtn from "../Shared/SeeProductBtn";
import { Link } from "react-router-dom";
import jsonData from "../../data/data.json"

export default function DetailsGallery({gallery, others}){
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
    const backgroundStyleFirst = {
        backgroundImage: `url('${
        currentSize === "desktop" ? gallery.first.desktop.slice(1) : currentSize === "tablet" ? gallery.first.tablet.slice(1) : gallery.first.mobile.slice(1)
        }')`,
    };

    const backgroundStyleSecond = {
        backgroundImage: `url('${
        currentSize === "desktop" ? gallery.second.desktop.slice(1) : currentSize === "tablet" ? gallery.second.tablet.slice(1) : gallery.second.mobile.slice(1)
        }')`,
    };

    const backgroundStyleThird = {
        backgroundImage: `url('${
        currentSize === "desktop" ? gallery.third.desktop.slice(1) : currentSize === "tablet" ? gallery.third.tablet.slice(1) : gallery.third.mobile.slice(1)
        }')`,
    };

    const otherStyles = others.map(item => ({
        backgroundImage: `url('${
        currentSize === "desktop" ? item.image.desktop.slice(1) : currentSize === "tablet" ? item.image.tablet.slice(1) : item.image.mobile.slice(1)
        }')`,
    }))

    const otherElements = others.map((item, index) => {
        return (
            <div key={`other${index}`} className="flex flex-col items-center w-full sm:w-1/3 gap-8">
            <div  className="py-16 sm:py-44 w-full bg-cover bg-center  rounded-lg"  style={otherStyles[index]}>

            </div>
            <h2>{item.name}</h2>
            <Link to={`/details/${jsonData.filter(object => object.slug === item.slug)[0].id}`} className="mb-14">
                <SeeProductBtn/>
            </Link>
            </div>
        )
    })

    console.log(others)
  
    return (
        <>
        <div className="flex flex-col items-start gap-6 mt-6 mb-16 sm:mb-20 w-full sm:flex-row sm:items-stretch">
            <div className="w-full flex flex-col gap-6 ">
                <div className="w-full py-24 rounded-lg bg-cover bg-center" style={backgroundStyleFirst}>
                </div>  
                <div className="w-full py-24 rounded-lg bg-cover bg-center" style={backgroundStyleSecond}>
                </div>  
            </div>
            <div className="w-full py-48 rounded-lg bg-cover bg-center" style={backgroundStyleThird}>
            </div>       
        </div>

        <h2 className="my-10">You may also like</h2>

        <div className="flex flex-col items-center mt-6 mb-16 sm:mb-20 w-full sm:flex-row sm:items-stretch sm:gap-6">
            {otherElements}
        </div>
        </>
    )
}