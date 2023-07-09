"use client";
import React from "react";
import Navbar from "../../components/Navbar.jsx";
import SimpleCard1 from "@/components/SimpleCard1.jsx";
import Footer from "@/components/Footer.jsx";
function Page() {
  return (
    <div>
      <Navbar />
      <div class="flex my-6 space-x-6 items-center justify-center">
        {" "}
        <button
          type="button"
          class="text-white  right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Dashboard
        </button>
        <button
          type="button"
          class="text-white  right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Course
        </button>
        <button
          type="button"
          class="text-white  right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Revenue
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[82%] mx-auto justify-center justify-items-center	gap-y-6">
        <SimpleCard1 />
        <SimpleCard1 />
        <SimpleCard1 />
        <SimpleCard1 />
        <SimpleCard1 />
        <SimpleCard1 />
        <SimpleCard1 />
        <SimpleCard1 />
      </div>
      <div className="my-12">
        <button className="whitespace-nowrap discoverbutton flex justify-center py-12 w-[82%] mx-auto md:w-fit h-fit mt-8">
          Load More
        </button>
      </div>
      <Footer/>
    </div>
  );
}

export default Page;
