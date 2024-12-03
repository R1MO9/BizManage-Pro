import React from 'react';
import img from '../assets/images/login.png';
import Button from '../components/common/button';
import Testimonials from "../components/common/testimonial";
import userImg from "../assets/images/User.png";

const HomePage = () => {
  return (
    <div className="relative w-full overflow-hidden sm:flex-row items-center justify-evenly px-4 md:px-12 bg-fixed bg-center bg-cover bg-white text-black dark:bg-gray-950 dark:text-white">
      <div className="relative w-full flex flex-col-reverse overflow-hidden sm:flex-row items-center justify-evenly px-4 md:px-12 bg-fixed bg-center bg-cover bg-white text-black dark:bg-gray-950 dark:text-white">

        {/* Text Content */}
        <div className="text-black dark:text-white text-center sm:text-left max-w-lg space-y-4 sm:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Welcome to <span className="text-yellow-400">BizManage Pro</span>
          </h1>
          <p className="text-xl sm:text-2xl">
            Your business, our management solution. Explore the best features for managing and optimizing your business operations.
          </p>
          <Button className="bg-yellow-500 text-gray-800 px-6 py-2 rounded-md text-lg font-semibold hover:bg-yellow-400 transition duration-300" onClick={() => window.location.href = '/login'}>
            Get Started
          </Button>
        </div>

        {/* Image Content */}
        <div className="w-full sm:w-1/2">
          <img
            src={img}
            alt="Welcome_Image"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-floating-objects">
            <div className="floating-object bg-red-400 dark:bg-gray-400"></div>
            <div className="floating-object bg-yellow-300 dark:bg-yellow-500"></div>
            <div className="floating-object bg-blue-400 dark:bg-blue-500"></div>
            <div className="floating-object bg-green-300 dark:bg-green-500"></div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-12 text-black dark:text-white">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Testimonials
              id="1"
              name="John Doe"
              position="CEO, Company Inc."
              feedback="BizManage Pro has helped us streamline our business operations and improve our overall efficiency."
              image={userImg}
            />
            <Testimonials
              id="2"
              name="Gtretchen Eos"
              position="Team Lead, EPIC"
              feedback="I have been using BizManage Pro for over a year now and it has been a game changer for our team."
              image={userImg}
            />
            <Testimonials
              id="3"
              name="Bryan Smith"
              position="COO, Smith & Co."
              feedback="Since we started using BizManage Pro, we have seen a significant increase in our productivity and revenue."
              image={userImg}
            />
          </div>
        </div>
      </section>






      Floating Object Animation Styles
      <style jsx>{`
        @keyframes floating {
          0% {
            transform: translateX(0) translateY(0) scale(1);
          }
          25% {
            transform: translateX(30px) translateY(20px) scale(1.1);
          }
          50% {
            transform: translateX(-30px) translateY(-20px) scale(0.9);
          }
          75% {
            transform: translateX(50px) translateY(40px) scale(1.05);
          }
          100% {
            transform: translateX(0) translateY(0) scale(1);
          }
        }

        .animate-floating-objects {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 10;
          pointer-events: none;
        }

        .floating-object {
          position: absolute;
          border-radius: 50%;
          opacity: 0.6;
          animation: floating 10s ease-in-out infinite;
        }

        .floating-object:nth-child(1) {
          width: 120px;
          height: 120px;
          animation-duration: 12s;
          top: 10%;
          left: 30%;
          animation-delay: -3s;
        }

        .floating-object:nth-child(2) {
          width: 100px;
          height: 100px;
          animation-duration: 8s;
          top: 30%;
          left: 60%;
          animation-delay: -2s;
        }

        .floating-object:nth-child(3) {
          width: 140px;
          height: 140px;
          animation-duration: 15s;
          top: 60%;
          left: 40%;
          animation-delay: -1s;
        }

        .floating-object:nth-child(4) {
          width: 110px;
          height: 110px;
          animation-duration: 10s;
          top: 80%;
          left: 80%;
          animation-delay: -4s;
        }
      `}</style>
    </div>
  );
};

export default HomePage;