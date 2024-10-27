import React, { useState } from "react";

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    image: null,
    rating: 0,
    review: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Generic handleChange for all input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle image upload separately
  const handleImageUpload = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleRating = (rate) => {
    setFormData((prevData) => ({
      ...prevData,
      rating: rate,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    setSubmitted(true);
  };

  return (
    <div className="p-2 rounded-md flex flex-col justify-centre items-center md:justify-start md:items-start w-full md:w-[60%] mr-auto font-inter bg-gray-50 shadow-md">
      <h2 className="text-xl font-semibold  mb-4">Add a Review</h2>

      {/* Show success message on form submission */}
      {submitted && (
        <div className="mb-4 p-2 bg-green-100 text-green-800 rounded">
          Review submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        {/* First Name */}
        <div className="flex flex-col gap-2 tracking-wider">
          <label htmlFor="firstName" className="block  font-normal">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl focus:outline-none"
            required
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-2 tracking-wider">
          <label htmlFor="lastName" className="block text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl focus:outline-none"
            required
          />
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-2 tracking-wider">
          <label htmlFor="email" className="block text-sm font-normal">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="flex flex-col gap-2 tracking-wider">
          <label htmlFor="image" className="block text-sm font-normal">
            Upload Image (optional)
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 border rounded-xl"
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="Uploaded Preview"
              className="mt-2 max-w-full"
            />
          )}
        </div>

        {/* Star Rating */}
        <div>
          <label className="block text-sm font-normal">Rating</label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`cursor-pointer text-3xl ${
                  formData.rating >= star ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={() => handleRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Review Text */}
        <div>
          <label htmlFor="review" className="block text-sm font-normal">
            Review
          </label>
          <textarea
            id="review"
            name="review"
            value={formData.review}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-[50%]  bg-black text-white hover:bg-lemonYellow hover:text-black  p-2 rounded-xl transition-all duration-300 ease-in-out"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
