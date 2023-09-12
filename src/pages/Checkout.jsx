import { Link, Form, useOutletContext } from "react-router-dom";
import CheckoutCartContent from "../components/Checkout/CheckoutCartContent";
import { useState } from "react";
import SeeProductBtn from "../components/Shared/SeeProductBtn";

export default function Checkout() {
  const { cart, setCart } = useOutletContext();
  const [payed, setPayed] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setPayed(true);
  }

  return (
    <div className="mx-auto px-6 py-6 lg:px-20 bg-slate-50 flex flex-col  w-full mt-16">
      <div className="">
        <Link
          to={"../"}
          preventScrollReset={true}
          className="text-base opacity-50 hover:opacity-100"
        >
          Go back
        </Link>
      </div>

      <Form className="mt-4" onSubmit={handleSubmit}>
        <div className="lg:flex items-start lg:gap-6">
            <div className="p-6 flex-col rounded-lg bg-white mt-6 lg:w-2/3">
            <div>
                <h2>checkout</h2>
                <p className="text-orange-400 mt-8 font-bold uppercase leading-[25px] tracking-wide">
                Billing details
                </p>
            </div>

            <label htmlFor="name">Name</label>
            <input
                type="text"
                className="w-full py-4 px-6 mt-2 mb-6 rounded-lg border border-stone-300"
                id="name"
                name="name"
                required
            />

            <label htmlFor="email">Email Address</label>
            <input
                type="email"
                className="w-full py-4 px-6 mt-2 mb-6 rounded-lg border border-stone-300 invalid:border-orange-500 invalid:text-orange-600
                focus:invalid:border-orange-500 focus:invalid:ring-orange-500"
                id="email"
                name="email"
                required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
                type="number"
                className="w-full py-4 px-6 mt-2 mb-6 rounded-lg border border-stone-300"
                id="phone"
                name="phone"
                required
            />

            <p className="text-orange-400 mt-8 mb-4 font-bold uppercase leading-[25px] tracking-wide">
                shipping info
            </p>

            {/* SHIPPING INFO SECTION STARTS HERE */}

            <label htmlFor="address">Your Address</label>
            <input
                type="text"
                className="w-full py-4 px-6 mt-2 mb-6 rounded-lg border border-stone-300"
                id="address"
                name="address"
            />

            <label htmlFor="zip">ZIP Code</label>
            <input
                type="text"
                pattern="[0-9]{5}"
                maxLength={5}
                title="ZIP Code should be a 5-digit number"
                className="w-full py-4 px-6 mt-2 mb-6 rounded-lg border border-stone-300"
                id="zip"
                name="zip"
                required
            />

            <label htmlFor="city">City</label>
            <input
                type="text"
                className="w-full py-4 px-6 mt-2 mb-6 rounded-lg border border-stone-300"
                id="city"
                name="city"
            />

            <label htmlFor="country">Country</label>
            <input
                type="text"
                className="w-full py-4 px-6 mt-2 mb-6 rounded-lg border border-stone-300"
                id="country"
                name="country"
            />

            {/* PAYMENT DETAILS */}

            <p className="text-orange-400 mt-8 mb-4 font-bold uppercase leading-[25px] tracking-wide">
                payment details
            </p>

            <p className="mt-8 mb-4 font-bold leading-[25px] tracking-wide">
                Payment Method
            </p>

            <div className="w-full flex items-center gap-4 py-4 px-6 mt-2 mb-6 rounded-lg border border-stone-300">
                <input
                type="radio"
                value={"emoney"}
                name="payment-method"
                id="emoney"
                />
                <label className="font-bold">e-Money</label>
            </div>

            <div className="w-full flex items-center gap-4 py-4 px-6 mt-2 mb-8 rounded-lg border border-stone-300">
                <input
                type="radio"
                value={"cash"}
                name="payment-method"
                id="cash"
                />
                <label className="font-bold">Cash on Delivery</label>
            </div>

            <label htmlFor="emoney-number">e-Money Number</label>
            <input
                type="text"
                className="w-full py-4 px-6 mt-2 mb-6 rounded-lg border border-stone-300"
                id="emoney-number"
                name="emoney-number"
            />

            <label htmlFor="emoney-pin">e-Money PIN</label>
            <input
                type="text"
                className="w-full py-4 px-6 mt-2 mb-6 rounded-lg border border-stone-300"
                id="emoney-pin"
                name="emoney-pin"
            />
            </div>

            <div className="mt-8 lg:mt-6 lg:w-1/3">
            <CheckoutCartContent
                cartData={cart}
                setCart={setCart}
                payed={payed}
            />
            </div>
        </div>
      </Form>
    </div>
  );
}
