"use client";
import React, { useEffect } from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

function Allpolicies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />

      <section class="container mx-auto py-12 px-6">
        <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 class="text-3xl font-semibold mb-6">Refund Policy</h1>
          <p class="mb-4">
            O-Learn offers a 100% refund policy for all course purchases made
            through the platform. If you are not satisfied with your course for
            any reason, you can request a refund within 24 hours of purchase.
            &#x1F4B0;
          </p>
          <p class="mb-4">
            To request a refund, please contact O-Learn customer support at{" "}
            <a href="mailto:support@o-learn.com" class="text-blue-500">
             muhammadahmadrcs@gmail.com
            </a>
            . &#x1F4E7;
          </p>
        </div>
      </section>
      <section class="container mx-auto py-12 px-6">
        <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 class="text-3xl font-semibold mb-6">Privacy Policy</h1>
          <p class="mb-4">
            O-Learn is committed to protecting your privacy. We will never sell
            or share your personal information with third parties. We use your
            personal information only to provide you with the best possible
            service. &#x1F64F;
          </p>
          <p class="mb-4">
            When you create an O-Learn account, we collect your name, email
            address, and password. We also collect information about your course
            enrollments and progress. &#x1F4C3;
          </p>
          <p class="mb-4">
            We use this information to provide you with the best possible
            learning experience. For example, we use your name and email address
            to communicate with you regarding course updates and certificates.
            We use your course information to track your progress and provide
            personalized recommendations. &#x1F4E7;
          </p>
          <p class="mb-4">
            We will never sell or share your personal information with third
            parties. We only use your personal information to provide you with
            the best possible learning experience. &#x1F913;
          </p>
        </div>
      </section>
      <section class="container mx-auto py-12 px-6">
        <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 class="text-3xl font-semibold mb-6">Terms and Conditions</h1>
          <ul class="list-disc ml-6 mb-4">
            <li>
              Age. There is no minimum age requirement to use O-Learn. However,
              we recommend that users under the age of 18 are supervised by an
              adult when using the platform. This is to ensure their safety and
              to provide appropriate guidance.
              &#x1F466;&#x200D;&#x1F466;&#xFE0F;&#x1F466;
            </li>
            <li>
              Responsibility. Users are responsible for all activity that occurs
              under their account. &#x1F4BB;
            </li>
            <li>
              Accurate Information. Users agree to provide accurate and
              up-to-date information when creating an O-Learn account.
              &#x270D;&#xFE0F;
            </li>
            <li>
              Illegal or Unauthorized Use. Users agree not to use O-Learn for
              any illegal or unauthorized purposes. &#x1F6AB;
            </li>
            <li>
              Content Usage. Users agree not to reproduce, modify, distribute,
              or sell any course content from O-Learn without explicit
              permission from the respective instructors and O-Learn. &#x1F4DA;
            </li>
            <li>
              Termination. O-Learn reserves the right to terminate user accounts
              at any time for any reason. &#x274C;
            </li>
          </ul>
        </div>
      </section>
      <section class="container mx-auto py-12 px-6">
        <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 class="text-3xl font-semibold mb-6">
            Payment and Revenue Distribution
          </h1>
          <p class="mb-4">
            O-Learn utilizes a secure online payment platform for course
            purchases. When you purchase a course on O-Learn, you will be
            redirected to the designated payment gateway to complete the
            transaction. The payment gateway uses the latest security technology
            to protect your personal and financial information. &#x1F4B8;
          </p>
          <p class="mb-4">
            For each course purchase, 70% of the course fee will be credited to
            the instructor's designated bank account, and the remaining 30% will
            be credited to O-Learn's bank account as a platform fee. Payments
            are processed securely and efficiently through the payment gateway.
            &#x1F4B5;
          </p>
        </div>
      </section>
      <section class="container mx-auto py-12 px-6">
        <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 class="text-3xl font-semibold mb-6">Contact Us</h1>
          <p class="mb-4">
            If you have any questions about O-Learn's refund policy, privacy
            policy, terms and conditions, or payment and revenue distribution,
            please contact O-Learn customer support at{" "}
            <a href="mailto:support@o-learn.com" class="text-blue-500">
             muhammadahmadrcs@gmail.com
            </a>
            . &#x1F4E7;
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Allpolicies;
