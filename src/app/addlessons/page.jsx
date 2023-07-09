"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import LessonCard from "@/components/LessonCard";
import React, { useState } from "react";
import Popup from "../../components/Popup.jsx";
import Footer from "@/components/Footer.jsx";

function Page() {
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <Navbar />
      <div>
        <p class="my-4 p-3 w-fit flex px-16 justify-center items-center  mx-auto payoutbutton">
          Add Lessons in Course{" "}
        </p>
        <div class="w-[90%] flex justify-center items-center flex-col lg:flex-row lg:flex-1 object-contain mx-auto">
          <div class='flex flex-col w-fit justify-center items-center'>
            <Image
              alt="hero image"
              width="650"
              height="450"
              src="/courseimage.png"
            />

            <p class="my-4 p-3 payoutbutton">The Complete Mern Stack Course</p>
          </div>
          
        </div>
        <div class='w-[90%] mx-auto'>
            Content Goes here
          </div>
        <div class="flex w-fit gap-x-8 w-[90%] mx-auto">
          <button class="my-4 p-3 w-fit flex px-16 justify-center items-center bg-[#ff6637]  mx-auto ">
            Update{" "}
          </button>
          <button class="my-4 p-3 w-fit flex px-16 justify-center items-center bg-[#ffd82f]  mx-auto ">
            Publish{" "}
          </button>
        </div>
      </div>
      <button
        onClick={openPopup}
        class="my-4 p-3 w-fit flex px-16 justify-center items-center bg-[#ff6637]  mx-auto "
      >
        Add Lessons{" "}
      </button>
      <p class="my-4 p-3 w-fit flex px-16 justify-center items-center  mx-auto ">
        Total Lessons :5{" "}
      </p>
      <div class="nftdiv my-6 lg:flex-1 overflow-y-scroll h-[308px] md:h-[338px] space-y-2 w-[90%] mx-auto p-2">
        <LessonCard />
        <LessonCard />

        <LessonCard />

        <LessonCard />

        <LessonCard />
        <LessonCard />

        <LessonCard />
        <LessonCard />

        <LessonCard />
      </div>
      {showPopup && <Popup onClose={closePopup} />}
      <Footer/>
    </>
  );
}

export default Page;
