import React, { useEffect,useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const data = useLoaderData()
  
  //   useEffect(()=>{
  //       async function imgFounder(){
  //          const res=await fetch('https://api.github.com/users/hiteshchoudhary')
  //          const data = await res.json()
  //          document.getElementById('imgFounderGitHub').src = data.avatar_url;
  //       }
  //       imgFounder()

  // },[])
  return (
    <body class="bg-gray-100">
      <header>{/* <!-- Your navigation header can go here --> */}</header>

      <main>
        {/* <!-- Hero Section --> */}
        <section class="bg-blue-800 text-white py-32">
          <div class="container mx-auto text-center">
            <h1 class="text-5xl font-bold mb-6">
              Master Web Development with Chai aur Code
            </h1>
            <p class="text-lg text-gray-300 mb-8">
              Unlock your potential with affordable, expert-led courses
            </p>
            <a
              href="#courses"
              class="bg-yellow-400 text-blue-800 py-3 px-8 rounded-full text-lg hover:bg-yellow-300 hover:text-blue-900 transition duration-300"
            >
              Explore Courses
            </a>
          </div>
        </section>

        {/* <!-- About Section --> */}
        <section class="py-16">
          <div class="container mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 class="text-4xl font-semibold text-blue-800 mb-4">
                  About Chai aur Code
                </h2>
                <p class="text-xl text-gray-700 mb-6">
                  At Chai aur Code, we're on a mission to empower the next
                  generation of web developers. Founded by Hitesh Choudary, we
                  provide interactive and affordable courses in React,
                  JavaScript, Tailwind CSS, HTML, and more. Our courses are
                  designed to help you thrive in the dynamic world of web
                  development.
                </p>
                <a
                  href="#courses"
                  class="text-blue-500 hover:underline text-xl"
                >
                  Explore Courses
                </a>
              </div>
              <div>
                <img
                src={data.avatar_url}
                 id="imgFounderGitHub"
                  alt="Founder Image"
                  class="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Courses Section --> */}
        <section id="courses" class="bg-gray-200 py-16">
          <div class="container mx-auto text-center">
            <h2 class="text-4xl font-semibold text-blue-800 mb-12">
              Our Courses
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* <!-- Course 1 --> */}
              <div class="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h3 class="text-3xl font-semibold text-blue-800 mb-4">
                  React Mastery
                </h3>
                <p class="text-xl text-gray-700 mb-6">
                  Build dynamic web applications with the power of React.js.
                </p>
                <a href="#" class="text-blue-500 hover:underline text-xl">
                  Learn More
                </a>
              </div>

              {/* <!-- Course 2 --> */}
              <div class="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h3 class="text-3xl font-semibold text-blue-800 mb-4">
                  JavaScript Fundamentals
                </h3>
                <p class="text-xl text-gray-700 mb-6">
                  Master the fundamentals of modern JavaScript programming.
                </p>
                <a href="#" class="text-blue-500 hover:underline text-xl">
                  Learn More
                </a>
              </div>

              {/* <!-- Course 3 --> */}
              <div class="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h3 class="text-3xl font-semibold text-blue-800 mb-4">
                  Tailwind CSS Essentials
                </h3>
                <p class="text-xl text-gray-700 mb-6">
                  Create stunning, responsive designs with Tailwind CSS.
                </p>
                <a href="#" class="text-blue-500 hover:underline text-xl">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}

export const imgFounder = async()=>{
  const response =await fetch("https://api.github.com/users/hiteshchoudhary")
  return response.json()
}