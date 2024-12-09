import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91"); // Default to +91
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0); // Initial value as integer 0
  const [trekDate, setTrekDate] = useState(new Date()); // Default to current date
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate required fields
    if (!name || !phone || !email || !age || !trekDate) {
      setError("Please fill all the required fields.");
      return;
    }
  
    // Format trek_date to YYYY-MM-DD
    const formattedTrekDate = trekDate.toISOString().split("T")[0];  // "YYYY-MM-DD"
  
    // Prepare data to be sent to the API
    const bookingData = {
      name,
      email,
      phoneNumber: `${countryCode} ${phone}`,
      countryCode: countryCode,
      age: parseInt(age), // Ensure age is an integer
      trekDate: formattedTrekDate,
    };
  
    setLoading(true);
    setError(""); // Reset any previous error
    // Send data to API
    fetch("http://localhost:5000/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        console.log(data); 
        if (data.message === "Booking saved successfully") {
          alert("Booking successful!");
          // Reset form after successful booking
          setName("");
          setPhone("");
          setEmail("");
          setAge(0);
          setCountryCode("+91");
          setTrekDate(new Date());
        } else {
          setError("Booking failed. Please try again.");
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("An error occurred. Please try again.");
      });
  };
  
  
  // Ensure that the age input is an integer
  const handleAgeChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setAge(value);
    }
  };

  return (
    <div
      className={`sticky top-5 w-full right-0 md:max-w-md mx-auto bg-gray-50 shadow-md rounded-lg p-6 mt-10 cardShadow`}
    >
      <h2 className="text-2xl font-semibold text-center mb-4">Booking Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-full"
            required
          />
        </div>

        {/* Phone Number with Country Code */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-semibold mb-1">
            Phone Number
          </label>
          <div className="flex items-center">
            <select
              className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-[100px]"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
              <option value="+33">+33</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-full ml-2"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold mb-1">
            Email ID
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-full"
            required
          />
        </div>

        {/* Age */}
        <div className="flex flex-col">
          <label htmlFor="age" className="text-sm font-semibold mb-1">
            Age
          </label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={handleAgeChange}
            className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-full"
            required
          />
        </div>

        {/* Trek Date */}
        <div className="flex flex-col">
          <label htmlFor="trekDate" className="text-sm font-semibold mb-1">
            Trek Date
          </label>
          <DatePicker
            id="trekDate"
            selected={trekDate}
            onChange={(date) => setTrekDate(date)}
            className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-full"
            dateFormat="dd/MM/yyyy"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-lemonYellow hover:bg-yellow-500 text-black hover:text-white font-semibold py-2 rounded-lg transition-colors"
          disabled={loading}
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
