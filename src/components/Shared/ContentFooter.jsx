export default function ContentFooter(){
    return (
        <div className="mx-auto my-24 text-center flex flex-col items-center lg:flex-row-reverse">
                <div
                    className="py-40 lg:py-52 w-full lg:w-1/2  rounded-lg  bg-[url('/assets/shared/mobile/image-best-gear.jpg')] 
                                        sm:bg-[url('/assets/shared/tablet/image-best-gear.jpg')] 
                                        lg:bg-[url('/assets/shared/desktop/image-best-gear.jpg')] bg-cover bg-center"
                ></div>
                <div className="lg:w-1/2 lg:text-left lg:mr-4">
                    <h2 className="uppercase text-slate-950 font-bold text-3xl mt-6 mb-4">
                    bringing you the <span className="text-orange-400">best</span> audio gear
                    </h2>
                    <p className="text-base opacity-50">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </p>
                </div>
            </div>
    )
}