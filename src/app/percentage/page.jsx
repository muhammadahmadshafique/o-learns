"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar.jsx";
import ReactPlayer from "react-player";
import LessonCard1 from "../../components/LessonCard1.jsx";
import Footer from "../../components/Footer.jsx";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Page() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    setHasWindow(true);
  }, []);
  const percentage = 66;

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
          <LessonCard1 />
          <LessonCard1 />

          <LessonCard1 />

          <LessonCard1 />

          <LessonCard1 />
          <LessonCard1 />

          <LessonCard1 />
          <LessonCard1 />

          <LessonCard1 />
        </div>
      </div>
      <div class="mt-12 mb-7 flex flex-col gap-y-8 items-center justify-center">
        <p class="my-4 p-3 payoutbutton">Course Completed</p>
        <div style={{ width: 120, height: 120 }}>
          <CircularProgressbar value={percentage} text={`${percentage}%`}/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
