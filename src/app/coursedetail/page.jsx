"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar.jsx";
import ReactPlayer from "react-player";
import LessonCard from "../../components/LessonCard.jsx";
import Enroll from "../../components/Enroll.jsx";
import Footer from "../../components/Footer.jsx";

function Page() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
      setHasWindow(true);
    
  }, []);
  return (
    <>
      <Navbar />
      <div class="flex mt-12 flex-col lg:flex-row gap-y-12 z-10 lg:w-[90%] lg:gap-x-12 mx-auto">
        <div class="w-[90%] flex flex-col h-[352px] lg:flex-1 object-contain mx-auto">
          {hasWindow && (
            <ReactPlayer
              url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              controls={true}
              width="100%"
              height="100%"
            />
          )}
          <p class="my-4 p-3 payoutbutton">The Complete Mern Stack Course</p>
        </div>

        <div class="nftdiv lg:flex-1 overflow-y-scroll h-[308px] md:h-[338px] space-y-2 w-[90%] mx-auto p-2">
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

      </div>
      <div class='mt-12'>
      <Enroll />
      </div>
      <Footer />
    </>
  )
}

export default Page

