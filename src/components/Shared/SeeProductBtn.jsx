export default function SeeProductBtn({children, action, full, disabled}){

    const width = full ? "w-full" : ""

    return (
        <button disabled={disabled} className={`uppercase text-center text-white text-sm sm:text-base font-bold  bg-orange-400 hover:bg-orange-300 py-4 px-8 ${width} scale-up-center`} onClick={action}>{children || "see product"}</button>
    )
}