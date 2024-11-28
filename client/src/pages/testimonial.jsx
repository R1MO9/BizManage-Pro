import React from "react";
import img1 from "../assets/images/free.png"; 
import img2 from "../assets/images/signup.png";
import img3 from "../assets/images/login.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Advik Bhatt",
      position: "CEO, TechCorp",
      feedback:
        "BizManage Pro has transformed the way we manage our operations. It's user-friendly and incredibly efficient.",
      image: img1,
    },
    {
      name: "Jane Smith",
      position: "Founder, StartSmart",
      feedback:
        "The features are exactly what we needed to optimize our workflows. Highly recommend!",
      image: img2,
    },
    {
      name: "Aman Gupta",
      position: "Manager, Innovate Inc.",
      feedback:
        "BizManage Pro has streamlined our processes like never before. The support team is fantastic too!",
      image: img3,
    },
    
  ];

  return (
    <section className=" py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s avatar`}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-center">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-400 text-center">
                {testimonial.position}
              </p>
              <p className="text-gray-300 mt-4 text-center">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
