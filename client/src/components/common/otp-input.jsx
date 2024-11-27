import React, { useState } from "react";

const OTPInput = ({otp,setOtp}) => {
  // State to store the values of the OTP input fields
 

  // Handle OTP change in the input fields
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && /[0-9]/.test(value)) {
      otp[index] = value;
      setOtp([...otp]);
      // Move to the next input field if there is a valid input
      if (index < 5) document.getElementById(`otp-input-${index + 1}`).focus();
    } else if (value === '') {
      // Allow empty value (erase)
      otp[index] = '';
      setOtp([...otp]);
    }
  };

  // Handle backspace to move focus to the previous input field
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  return (
    <div className="flex justify-center space-x-2">
      {otp.map((digit, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
        />
      ))}
    </div>
  );
};

export default OTPInput;
