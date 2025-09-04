// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#1F476F] text-white max-sm:pt-10 py-20 sm:px-5 mt-20"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 ">
        {/* قسم المحتوى (النص) */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Welcome to <span className="text-[#B88647]">Loujico</span> Company.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Loujico is a company specializing in providing consulting,
            management, training, and research services to companies and
            clients. The company seeks to support companies' performance and
            achieve their strategic goals by offering innovative and customized
            solutions, with a focus on improving efficiency and reducing daily
            burdens.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#B88647] hover:bg-[#a17a41] text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* قسم الصورة */}
        <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
          <img
            src="/public/assets/image/Hero.png"
            alt="صورة تعبر عن خدمات الشركة"
            className=" lg:w-[500px] md:w-[400px] w-[300px] rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
