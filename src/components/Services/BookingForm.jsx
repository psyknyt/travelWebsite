import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const [startDate, setStartDate] = useState(new Date("2025-03-05T00:00:00")); // Default Date
  const [time, setTime] = useState("12:00 AM");
  const [children, setChildren] = useState(0);
  const [male, setMale] = useState(0);
  const [female, setFemale] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    alert(
      `Booking Date: ${startDate}, Time: ${time}, Children: ${children}, Male: ${maleGuests}, Female: ${femaleGuests}`
    );
  };
  const cardShadow = {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
  };

  return (
    <div
      className={`w-[90%] md:w-[50%] lg:w-[30%] sticky top-0 right-0 max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10 cardShadow`}
    >
      <h2 className="text-2xl font-semibold text-center mb-4">Booking Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Date Picker */}
        <div className="flex flex-col">
          <label htmlFor="date" className="text-sm font-semibold mb-1">
            Date
          </label>
          <DatePicker
            id="date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-full"
            dateFormat="dd/MM/yyyy"
          />
        </div>

        {/* Time */}
        <div className="flex flex-col">
          <label htmlFor="time" className="text-sm font-semibold mb-1">
            Time
          </label>
          <select
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-full"
          >
            <option value="12:00 AM">12:00 AM</option>
          </select>
        </div>

        {/* Guests */}
        <div className="space-y-4">
          <div className="flex flex-col justify-start items-start font-inter py-2">
            Guests:
          </div>
          <div className="flex justify-between items-center mb-4">
            <label className="text-xs font-normal w-[50%]">
              Children (0-12 years) ₹6246.61
            </label>
            <select
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              className="border-gray-300 focus:outline-none border-[1px] rounded-lg px-2 py-1 w-[100px]  flex justify-start items-start"
            >
              <option value="0" className="text-center">
                0
              </option>
              <option value="1" className="text-center">
                1
              </option>
              <option value="2" className="text-center">
                2
              </option>
              <option value="3" className="text-center">
                3
              </option>
              <option value="4" className="text-center">
                4
              </option>
            </select>
          </div>

          <div className="flex justify-between items-center mb-4">
            <label className="text-xs font-normal w-[50%]">Male ₹8924.11</label>
            <select
              value={male}
              onChange={(e) => setMale(e.target.value)}
              className="border-gray-300 focus:outline-none border-[1px] rounded-lg px-2 py-1 w-[100px] flex justify-start items-start"
            >
              <option value="0" className="text-center">
                0
              </option>
              <option value="1" className="text-center">
                1
              </option>
              <option value="2" className="text-center">
                2
              </option>
              <option value="3" className="text-center">
                3
              </option>
              <option value="4" className="text-center">
                4
              </option>
            </select>
          </div>

          <div className="flex justify-between items-center mb-4">
            <label className="text-xs font-normal w-[50%]">
              Female ₹8924.11
            </label>
            <select
              value={female}
              onChange={(e) => setFemale(e.target.value)}
              className="border-gray-300 focus:outline-none border-[1px] rounded-lg px-2 py-1 w-[100px]  flex justify-start items-start"
            >
              <option value="0" className="text-center">
                0
              </option>
              <option value="1" className="text-center">
                1
              </option>
              <option value="2" className="text-center">
                2
              </option>
              <option value="3" className="text-center">
                3
              </option>
              <option value="4" className="text-center">
                4
              </option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-lemonYellow hover:bg-yellow-500 text-black hover:text-white font-semibold py-2 rounded-lg transition-colors"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
