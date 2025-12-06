import { useState, useRef } from "react";
import bannerImage from "../../images/bannerimage.png";
import locationIcon from "../../images/locationicon.png";
import calendarIcon from "../../images/calendaricon.png";
import guestsIcon from "../../images/guestsicon.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectScrollDownButton,
  SelectScrollUpButton,
} from "@/components/ui/select";

export default function Banner() {
    // const [locationOpen, setLocationOpen] = useState(false);
    const [guestsOpen, setGuestsOpen] = useState(false);

    const [selectedLocation, setSelectedLocation] = useState<string | undefined>(undefined)
    const [selectedGuests, setSelectedGuests] = useState("Guests");
    const dateRef = useRef<HTMLInputElement>(null);
    const dateOutRef = useRef<HTMLInputElement>(null);

    return (
        <section
            className="
                relative w-full bg-center bg-cover 
                h-[800px] md:h-[700px] lg:h-[926px]
            "
            style={{ backgroundImage: `url(${bannerImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div
                className="
                relative z-10 max-w-[1294px] mx-auto 
                pt-[120px] md:pt-[160px] lg:pt-[180px] 
                text-center text-white 
                px-3 sm:px-4 md:px-10
            "
            >
                <div className="max-w-[862px] mx-auto text-center mb-6 md:mb-10">
                    <h1
                        className="
                            text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] 
                            font-semibold leading-tight
                        "
                    >
                        Find Your Perfect Stay
                    </h1>

                    <p
                        className="
                            text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] 
                            mt-2 md:mt-4 opacity-90
                        "
                    >
                        Quality short-term stays in the Perth’s premium locations
                    </p>
                </div>

                {/* Search Box */}
                <div
                    className="
                        bg-white rounded-2xl 
                        p-6 md:p-4 
                        gap-6 md:gap-4 
                        shadow-xl 
                        flex flex-col md:flex-row
                    "
                >
                    {/* LOCATION */}
{/* LOCATION */}
<div className="flex-1 relative">
  <label
    className="
      block text-[#171717]
      text-[14px] sm:text-[16px] md:text-[20px]
      mb-1 sm:mb-2 md:mb-3
      font-medium
    "
  >
    Location
  </label>

  <div className="relative">
    {/* ✅ left icon */}
    <img
      src={locationIcon}
      alt="location icon"
      className="
        absolute left-3 sm:left-4 top-1/2 -translate-y-1/2
        w-4 sm:w-5 opacity-80 pointer-events-none
      "
    />

    {/* ✅ shadcn Select */}
<Select
  value={selectedLocation}   // ✅ ONLY value, no defaultValue
  onValueChange={(val) => setSelectedLocation(val)}
>
  <SelectTrigger
    className="
      w-full border rounded-xl
      pl-10 pr-4
      py-6
      bg-[#F0F0F0]
      text-[14px] sm:text-[16px]
      flex items-center justify-between
      text-[#525252]
      data-[placeholder]:text-[#717182]
    "
  >
    {/* ✅ PLACEHOLDER WILL NOW SHOW */}
    <SelectValue placeholder="Select Location" />
  </SelectTrigger>

  <SelectContent className="rounded-xl border bg-gray-200 shadow-md z-50 p-0 text-[#525252]">
    <SelectScrollUpButton className="w-full text-center py-2 text-sm text-[#7FA38B]">
      ▲
    </SelectScrollUpButton>

    <SelectGroup>
      <div className="max-h-48 overflow-y-auto">
        {[
          "Applecross","Alkimos","Ardross","Attadale","Balcatta","Churchlands",
          "Dalkeith","Forrestfield","Fremantle","Swanbourne","Alexander Heights",
          "Alfred Cove","City Beach","East Rockingham","Floreat","Piara Waters",
          "Aveley","Carine","Claremont","Armadale","Subiaco","Baldivis","Ashfield"
        ].map((city) => (
          <SelectItem
            key={city}
            value={city}
            className="px-4 py-3 text-[#525252] hover:bg-[#7FA38B]  cursor-pointer transition"
          >
            {city}
          </SelectItem>
        ))}
      </div>
    </SelectGroup>

    <SelectScrollDownButton className="w-full text-center py-2 text-sm text-gray-500">
      ▼
    </SelectScrollDownButton>
  </SelectContent>
</Select>

  </div>
</div>


                    {/* CHECK IN */}
                    <div className="flex-1 relative">
                        <label
                            className="
                                block text-[#171717] 
                                text-[14px] sm:text-[16px] md:text-[20px] 
                                mb-1 sm:mb-2 md:mb-3 
                                font-medium
                            "
                        >
                            Check in
                        </label>

                        <div className="relative">
                            <input
                                type="date"
                                ref={dateRef}
                                className="
                                    w-full border rounded-xl 
                                    pl-10 pr-4 py-2 sm:py-3 
                                    bg-[#F0F0F0]
                                    text-[#717182] 
                                    text-[14px] sm:text-[16px]
                                    cursor-pointer
                                    appearance-none
                                    [&::-webkit-calendar-picker-indicator]:opacity-0
                                "
                            />

                            <img
                                src={calendarIcon}
                                onClick={() => dateRef.current?.showPicker()}
                                alt="calendar icon"
                                className="
                                    absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 
                                    w-4 sm:w-5 opacity-80 cursor-pointer
                                "
                            />
                        </div>
                    </div>

                    {/* CHECK OUT */}
                    <div className="flex-1 relative">
                        <label
                            className="
                                block text-[#171717] 
                                text-[14px] sm:text-[16px] md:text-[20px] 
                                mb-1 sm:mb-2 md:mb-3 
                                font-medium
                            "
                        >
                            Check out
                        </label>

                        <div className="relative">
                            <input
                                type="date"
                                ref={dateOutRef}
                                className="
                                    w-full border rounded-xl 
                                    pl-10 pr-4 py-2 sm:py-3 
                                    bg-[#F0F0F0]
                                    text-[#717182] 
                                    text-[14px] sm:text-[16px]
                                    cursor-pointer
                                    appearance-none
                                    [&::-webkit-calendar-picker-indicator]:opacity-0
                                "
                            />

                            <img
                                src={calendarIcon}
                                onClick={() => dateOutRef.current?.showPicker()}
                                alt="calendar icon"
                                className="
                                    absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 
                                    w-4 sm:w-5 opacity-80 cursor-pointer
                                "
                            />
                        </div>
                    </div>

                    {/* GUESTS */}
                    <div className="flex-1 relative">
                        <label
                            className="
                                block text-[#171717] 
                                text-[14px] sm:text-[16px] md:text-[20px] 
                                mb-1 sm:mb-2 md:mb-3
                                font-medium
                            "
                        >
                            Guests
                        </label>

                        {/* Mobile input */}
                        <div className="relative md:hidden">
                            <input
                                type="number"
                                placeholder="Guests"
                                value={selectedGuests === "Guests" ? "" : selectedGuests}
                                onChange={(e) => setSelectedGuests(e.target.value)}
                                className="
                                    w-full border rounded-xl 
                                    pl-10 pr-4 py-2 sm:py-3
                                    bg-[#F0F0F0]
                                    text-[#717182] 
                                    text-[14px] sm:text-[16px] 
                                    cursor-pointer
                                "
                            />
                            <img
                                src={guestsIcon}
                                alt="guests icon"
                                className="
                                    absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 
                                    w-4 sm:w-5 opacity-80 pointer-events-none
                                "
                            />
                        </div>

                        {/* Desktop dropdown */}
                        <div className="relative hidden md:block">
                            <button
                                onClick={() => setGuestsOpen(!guestsOpen)}
                                className="
                                    w-full text-left border rounded-xl 
                                    pl-10 pr-3 py-2 md:py-3
                                    text-[14px] md:text-[14px]
                                    bg-[#F0F0F0]
                                    text-[#717182] 
                                    cursor-pointer
                                "
                            >
                                {selectedGuests}
                            </button>

                            <img
                                src={guestsIcon}
                                alt="guests icon"
                                className="
                                    absolute left-3 sm:left-4 top-1/2 
                                    -translate-y-1/2 w-4 opacity-80 pointer-events-none
                                "
                            />

                            <MdKeyboardArrowDown
                                onClick={() => setGuestsOpen(!guestsOpen)}
                                className="
                                    absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 
                                    w-4 cursor-pointer text-[#717182]
                                "
                            />

                            {guestsOpen && (
                                <div className="absolute left-0 right-0 mt-2 bg-white border rounded-xl overflow-hidden shadow-md z-50 p-4 flex items-center justify-between">
                                    <button
                                        onClick={() =>
                                            setSelectedGuests((prev) => {
                                                const value = prev === "Guests" ? 0 : Number(prev);
                                                return Math.max(0, value - 1).toString();
                                            })
                                        }
                                        className="
                                            bg-[#F0F0F0] px-3 py-1 rounded-lg 
                                            text-[18px] font-bold 
                                            hover:bg-[#7FA38B] hover:text-white
                                            cursor-pointer
                                        "
                                    >
                                        –
                                    </button>

                                    <span className="text-[#171717] text-[18px] font-medium">
                                        {selectedGuests === "Guests" ? 0 : selectedGuests}
                                    </span>

                                    <button
                                        onClick={() =>
                                            setSelectedGuests((prev) => {
                                                const value = prev === "Guests" ? 0 : Number(prev);
                                                return (value + 1).toString();
                                            })
                                        }
                                        className="
                                            bg-[#F0F0F0] px-3 py-1 rounded-lg 
                                            text-[18px] font-bold 
                                            hover:bg-[#7FA38B] hover:text-white
                                            cursor-pointer
                                        "
                                    >
                                        +
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* SEARCH BUTTON */}
                <div className="flex justify-center">
                    <button
                        className="
                            bg-[#7FA38B] text-white px-4
                            md:px-14 md:py-3 md:text-[16px]
                            lg:px-20 lg:py-6 lg:text-[24px]
                            rounded-full 
                            text-[22px] sm:text-[16px] 
                            mt-6 md:mt-8 lg:mt-16 
                            hover:opacity-90 
                            flex items-center justify-center gap-2
                            cursor-pointer
                        "
                    >
                        <CiSearch size={36} /> Search Properties
                    </button>
                </div>
            </div>
        </section>
    );
}
