export default function QuantityBtn({value, remove, add}){
    return (
        <div className="py-4 px-4 bg-zinc-100 flex items-center justify-between gap-6 text-sm sm:text-base sm:px-8 sm:gap-8" >
            <button onClick={remove} disabled={value === 1} className="scale-up-center">
                -
            </button>
            <p className="font-bold">
                {value}
            </p>
            <button onClick={add} className="scale-up-center">
                +
            </button>
        </div>
    )
}