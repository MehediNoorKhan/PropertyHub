import { useParams, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import { Button } from "@/components/ui/button";
import { useGetSinglePropertyQuery } from "@/store/api/auth.api";
import visacard from "@/images/visacard.png";
import mastercard from "@/images/mastercard.webp";
import amex from "@/images/amex.png";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "@/components/ui/select";


const PaymentConfirm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetSinglePropertyQuery(id!);
  const property = data?.data;

  // ✅ same logic as previous page
  const nights = 3;
  const bookingFeeRate = 4.5;

  const rentTotal = property ? property.price * nights : 0;
  const bookingFee = (rentTotal * bookingFeeRate) / 100;
  const totalPrice = rentTotal + (property?.cleaning_fee || 0) + bookingFee;

  if (isLoading) {
    return <div className="p-10 text-center">Loading payment...</div>;
  }

  if (isError || !property) {
    return <div className="p-10 text-center text-red-500">Payment not available.</div>;
  }

  return (
    <section className="w-full px-4 md:px-16 xl:px-24 py-10">

      {/* ✅ BACK BUTTON */}
      <Button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 bg-[#F3F3F3] text-black px-12 py-3 rounded-full mb-10 hover:bg-gray-200"
      >
        <BsArrowLeft size={22} />
        Back
      </Button>

      {/* ✅ PAYMENT BOX */}
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-3xl font-bold mb-2 text-center">
          Complete Your Payment
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Secure payment powered by Stripe
        </p>

        {/* ✅ PROPERTY SUMMARY */}
        <div className="flex items-center gap-4 mb-6 border p-4 rounded-xl">
          <img
            src={property?.multiple_image?.[0]}
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-semibold">{property.title}</h3>
            <p className="text-gray-500 text-sm">
              {nights} nights × A$ {property.price}
            </p>
          </div>
        </div>

        {/* ✅ PRICE BREAKDOWN */}
        <div className="space-y-3 mb-8 text-gray-700">
          <div className="flex justify-between">
            <span>Rent</span>
            <span>A$ {rentTotal}</span>
          </div>

          <div className="flex justify-between">
            <span>Cleaning Fee</span>
            <span>A$ {property.cleaning_fee}</span>
          </div>

          <div className="flex justify-between">
            <span>Booking Fee</span>
            <span>A$ {bookingFee.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-lg border-t pt-3">
            <span>Total</span>
            <span>A$ {totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* ✅ STRIPE STYLE PAYMENT FORM */}
<div className="mt-10 space-y-5">

  {/* Cardholder Name */}
  <div>
    <label className="block mb-1 text-sm text-gray-600">
      Cardholder Name
    </label>
    <input
      placeholder="John Doe"
      className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#85A790]"
    />
  </div>

  {/* Card Number */}
  <div>
    <label className="block mb-1 text-sm text-gray-600">
      Card number
    </label>
    <div className="relative">
      <input
        placeholder="1234 1234 1234 1234"
        className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#85A790]"
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
        <img src={visacard} className="h-5" />
        <img src={mastercard} className="h-5" />
        <img src={amex} className="h-5" />
      </div>
    </div>
  </div>

  {/* Expiry & CVC */}
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="block mb-1 text-sm text-gray-600">
        Expiry
      </label>
      <input
        placeholder="MM / YY"
        className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#85A790]"
      />
    </div>

    <div>
      <label className="block mb-1 text-sm text-gray-600">
        CVC
      </label>
      <input
        placeholder="CVC"
        className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#85A790]"
      />
    </div>
  </div>

  {/* Country & ZIP */}
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="block mb-1 text-sm text-gray-600">
        Country
      </label>
      <Select>
  <SelectTrigger
    className="
      w-full border rounded-lg 
      !h-[48px] 
      px-4 py-3 
      text-sm 
      bg-white 
      outline-none 
      focus:ring-2 focus:ring-[#85A790]
      flex items-center justify-between
    "
  >
    <SelectValue placeholder="Select Country" />
  </SelectTrigger>

  <SelectContent className="rounded-lg border bg-white shadow-md z-50 p-0">

    {/* ✅ SCROLL UP */}
    <SelectScrollUpButton className="w-full text-center py-2 text-sm text-gray-500">
      ▲
    </SelectScrollUpButton>

    {/* ✅ SCROLLABLE AREA */}
    <SelectGroup>
      <div className="max-h-[96px] overflow-y-auto">
        {[
          "Australia",
          "New Zealand",
          "United States",
          "United Kingdom",
          "Canada",
          "India",
          "Bangladesh",
          "Germany",
          "France",
          "Italy",
          "Spain",
        ].map((country) => (
          <SelectItem
            key={country}
            value={country}
            className="
              px-4 py-3 
              cursor-pointer 
              transition
              text-gray-700
              hover:bg-[#85A790] hover:text-white
              focus:bg-[#85A790] focus:text-white
              data-[state=checked]:bg-[#85A790]
              data-[state=checked]:text-white
            "
          >
            {country}
          </SelectItem>
        ))}
      </div>
    </SelectGroup>

    {/* ✅ SCROLL DOWN */}
    <SelectScrollDownButton className="w-full text-center py-2 text-sm text-gray-500">
      ▼
    </SelectScrollDownButton>

  </SelectContent>
</Select>



    </div>

    <div>
      <label className="block mb-1 text-sm text-gray-600">
        ZIP
      </label>
      <input
        placeholder="90210"
        className="w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#85A790]"
      />
    </div>
  </div>

  {/* Info Text */}
  <p className="text-xs text-gray-400 leading-relaxed">
    By providing your card information, you allow Techtolia to charge your card
    for future payments in accordance with their terms.
  </p>

  {/* ✅ PAY BUTTON WITH DYNAMIC PRICE */}
  <button
    className="w-full bg-[#7FA38B] text-white px-4
                            md:px-4 md:py-1 md:text-[16px]
                            lg:px-6 lg:py-2 lg:text-[20px]
                            rounded-full 
                            text-[20px] sm:text-[16px] 
                            mt-6 md:mt-8 lg:mt-16 
                            hover:opacity-90 
                            flex items-center justify-center gap-2
                            cursor-pointer"
    onClick={() => alert("Stripe payment integration will go here")}
  >
    Pay A$ {totalPrice.toFixed(2)}
  </button>

</div>


        {/* ✅ SECURITY TEXT */}
        <p className="text-center text-xs text-textprimarygray mt-4">
          Your payment is encrypted and secure.
        </p>

      </div>
    </section>
  );
};

export default PaymentConfirm;
