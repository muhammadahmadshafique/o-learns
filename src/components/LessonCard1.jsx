"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

function LessonCard() {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <div class="flex gap-x-6 z-10 items-center">
      <div class="rounded-md">
        {hasWindow && (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            controls={true}
            width="80px"
            height="80px"
          />
        )}
      </div>
      <div class="flex justify-between items-center w-[100%]">
        <div>
          <p>React Native With Firebase</p>
          <p class="text-[#999FAA]">Lesson No: 1</p>
        </div>
        <Image
          width="26"
          height="26"
          src="/Circled Notch.png"
          alt="image"
          srcset=""
        />
      </div>
    </div>
  );
}

export default LessonCard;
