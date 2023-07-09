"use client";
import React, { useEffect } from "react";
import Footer from "../../components/Footer.jsx";
import Navbar from "../../components/Navbar.jsx";

function AboutUS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />

      <div className="w-[86%] bg-cover overflow-hidden lg:flex justify-center items-center gap-x-32 mx-auto">
        <div className="space-y-4 my-6 bg-cover">
          <p className="pd bg-cover">Mission Statement</p>
          <p className="pd1 bg-cover">
            "Our mission at O-Learn is to empower individuals worldwide by
            providing a platform where they can easily access high-quality
            courses and acquire valuable skills. We strive to create an
            inclusive and engaging learning environment that fosters personal
            and professional growth. Through our platform, we aim to connect
            passionate instructors with eager learners, enabling them to unlock
            their full potential and achieve their educational and career
            aspirations. We are committed to promoting lifelong learning,
            knowledge sharing, and innovation, making education accessible and
            affordable for everyone, regardless of their background or location.
            Together, let's embrace the power of learning and create a brighter
            future."
          </p>
        </div>
        {/* <img src="./Group2222.png" alt="" srcset="" /> */}
      </div>
      <p className="stand py-8">Meet our Team</p>
      <p className="stand py-8">Supervisor </p>
      <div className="space-y-4 gap-x-16 mb-12 border border-blue-300 rounded-2xl px-5 md:px-20 flex-col md:flex-row  overflow-hidden gap-y-4 justify-center items-center w-[66%] mx-auto">
        <div className="flex flex-col w-fit items-center justify-center gap-y-1">
          <img
            className="w-[200px] h-[200px] my-4 object-contain rounded-full border border-green-300 border-[10px]"
            src="./fawad.hussain.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start yexy-center">
          <p className="name1 w-fit">Dr.Fawad Hussain</p>
          <p className="whathedo1 w-fit">Supervisor of O-Learn</p>
          <p className="ceo py-4">
            Dr. Fawad Hussain PhD Engg. UET Taxila Audio & Speech Processing,
            Computer Vision, Digital Image Processing, Network-on-Chip(NoC)
            Design (application mapping)
          </p>
        </div>
      </div>
      <p className="stand py-8">Founder </p>
      <div className="space-y-4 gap-x-16 mb-12 border border-blue-300 rounded-2xl px-5 md:px-20 flex-col md:flex-row  overflow-hidden gap-y-4 justify-center items-center w-[66%] mx-auto">
        <div className="flex flex-col w-fit items-center justify-center gap-y-1">
          <img
            className="w-[200px] h-[200px] my-4 object-contain rounded-full border border-green-300 border-[10px]"
            src="./ahmad.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start yexy-center">
          <p className="name1 w-fit">Muhammad Ahmad</p>
          <p className="whathedo1 w-fit">Founder at O-Learn</p>
          <p className="ceo py-4">
            Muhammad Ahmad, a full stack web and mobile app developer. And i am
            a the founder of O-Learn.
          </p>
        </div>
      </div>
      <div className="grid mb-6 overflow-hidden grid-cols-1 md:grid-cols-3 w-[80%] mx-auto justify-items-center	gap-y-4 justify-center	">
        <div className="flex flex-col w-fit items-center justify-center gap-y-1">
          <img
            className="w-[200px] h-[200px] object-contain border border-green-300 border-[10px] rounded-full"
            src="./sufi.jpg"
            alt=""
            srcset=""
          />
          <p className="name1 w-fit">Sufian Masood</p>
          <p className="whathedo1 w-fit">Co-Founder</p>
        </div>
        <div className="flex flex-col w-fit  gap-y-1">
          <img
            className="w-[200px] h-[200px] object-contain rounded-full border border-green-300 border-[10px]"
            src="umair.jpeg"
            alt=""
            srcset=""
          />
          <p className="name1 w-fit">Umair Ahmad</p>
          <p className="whathedo1 w-fit">Full stack developer</p>
        </div>
        <div className="flex flex-col w-fit gap-y-1">
          <img
            className="w-[200px] h-[200px] object-contain rounded-full border border-green-300 border-[10px]"
            src="./mirza.jpeg"
            alt=""
            srcset=""
          />
          <p className="name1 w-fit">Mirza Ghani</p>
          <p className="whathedo1 w-fit">UI UX Designer</p>
        </div>
        <div className="flex flex-col w-fit gap-y-1">
          <img
            className="w-[200px] h-[200px] object-contain rounded-full border border-green-300 border-[10px]"
            src="./inam.jpeg"
            alt=""
            srcset=""
          />
          <p className="name1 w-fit">Inam ul mesum</p>
          <p className="whathedo1 w-fit">Digital Marketer</p>
        </div>
        {/* <div className="flex flex-col w-fit gap-y-1">
          <img
            className="w-[200px] h-[200px] rounded-full"
            src="./image5.png"
            alt=""
            srcset=""
          />
          <p className="name1 w-fit">Maryam Sarfraz</p>
          <p className="whathedo1 w-fit">Graphic & UI designer </p>
        </div>
        <div className="flex flex-col w-fit gap-y-1">
          <img
            className="w-[200px] h-[200px] rounded-full"
            src="./image6.png"
            alt=""
            srcset=""
          />
          <p className="name1 w-fit">Munaza Ashraf</p>
          <p className="whathedo1 w-fit">Scriptwriter and Web Developer </p>
        </div> */}
      </div>

      <div
        initial={{ opacity: 0, x: -100, rotate: 0 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-1 md:grid-cols-2 w-[82%] mx-auto justify-center justify-items-center gap-y-6"
      ></div>
      <Footer />
    </div>
  );
}

export default AboutUS;
