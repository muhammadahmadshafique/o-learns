"use client";
import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
function Page() {
  return (
    <div>
      <Navbar />
      <div class="w-[90%] bg-cover md:w-[60%] mx-auto mt-8 my-6">
        <div class="flex justify-between align-baseline">
          <div class="flex flex-col items-start">
            <p class="my-4 p-3 w-fit flex px-16 justify-center items-center payoutbutton">
              Revenue Report{" "}
            </p>
            <p class="my-4  w-fit flex  justify-center items-center ">
              You will Get Paid from Stripe to Your bank account After 24 Hours
            </p>
          </div>
          <div class="mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
              />
            </svg>
          </div>
        </div>

        <div class="flex justify-between align-baseline">
          <div class="flex flex-col items-start">
            <p class="my-4 p-3 w-fit flex px-16 justify-center items-center payoutbutton">
              Pending Balance{" "}
            </p>
            <p class="my-4  w-fit flex  justify-center items-center ">
              For last 48 Hours{" "}
            </p>
          </div>
          <div class="mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p class=" ">$50</p>
          </div>
        </div>

        <div class="flex justify-between align-baseline cursor-pointer">
          <div class="flex flex-col items-start">
            <p class="my-4 p-3 w-fit flex px-16 justify-center items-center payoutbutton">
              PayOut{" "}
            </p>
            <p class="my-4  w-fit flex  justify-center items-center ">
              Check Your Payouts
            </p>
          </div>
          <div class="mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
              />
            </svg>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Page;
