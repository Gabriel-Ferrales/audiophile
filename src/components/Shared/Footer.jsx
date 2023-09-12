import { Link } from "react-router-dom"

export default function Footer(){
    return (
        <footer className="bg-slate-950 pt-12">

            <div className="flex flex-col items-center px-6 lg:w-11/12 mx-auto">

                <div className="text-center  mb-12 font-bold ">
                        <div className="flex flex-col items-center lg:flex-row sm:items-start">
                            <a href="/">
                             <img src="/assets/shared/desktop/logo.svg" className="mb-12 lg:mb-0 "/>
                            </a>
                            <div className="flex flex-col gap-4 sm:flex-row lg:ml-auto">
                                <Link to={"/"}>
                                    <p className="text-slate-50 hover:text-orange-400 uppercase tracking-wider ">home</p>
                                </Link>

                                <Link to={"/category/headphones"}>
                                    <p className="text-slate-50 hover:text-orange-400 uppercase tracking-wider ">headphones</p>
                                </Link>
                                
                                <Link to={"/category/speakers"}>
                                    <p className="text-slate-50 hover:text-orange-400 uppercase tracking-wider ">speakers</p>
                                </Link>

                                <Link to={"/category/earphones"}>
                                    <p className="text-slate-50 hover:text-orange-400 uppercase tracking-wider ">earphones</p>
                                </Link>
                            </div>
                        </div>
                        
                        <p className="text-white opacity-50 my-12 sm:text-left lg:w-1/2">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>

                        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                            <div>
                                <p className=" text-white opacity-50 mt-auto sm:text-left">Copyright 2021. All Rights Reserved</p>
                            </div>
                            <div className="flex my-12 gap-6 sm:my-0 lg:-translate-y-16">
                                <img src="/assets/shared/desktop/icon-facebook.svg" />
                                <img src="/assets/shared/desktop/icon-twitter.svg" />
                                <img src="/assets/shared/desktop/icon-instagram.svg" />
                            </div>
                        </div>
                </div>
            </div>
           

        </footer>
    )
}

// audiophile-app/public/assets/home/desktop/pattern-circles.svg
// /Users/gabriel_ferrales/Documents/frontend-mentor/audiophile-app/audiophile-app/public/assets/shared/desktop/icon-facebook.svg