import React from "react";

function About(){
    return(
        <>
       <main>
        <section class="bg-orange-400 py-11">
            <div class="container mx-auto text-center">
                <h1 class="text-4xl font-bold text-blue-800 mb-4">About React Course Pros</h1>
                <p class="text-lg text-gray-600">
                    Elevate your web development skills with our comprehensive React courses.
                </p>
            </div>
        </section>

        <section class="py-12 mx-20">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 class="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h2>
                        <p class="text-gray-700">
                            At React Course Pros, we're not just teaching React; we're sculpting the developers of tomorrow. Our mission is to empower you with the skills to build captivating, interactive web applications that leave a mark on the digital landscape.
                        </p>
                    </div>
                    <div>
                        <h2 class="text-2xl font-semibold text-blue-800 mb-4">Why Choose Us?</h2>
                        <p class="text-gray-700">
                            We're not your average online course provider. We're a community of React enthusiasts who are passionate about what we do. When you choose us, you're choosing hands-on learning, expert guidance, and a network of like-minded individuals who share your love for React. Join us in crafting the future of web development.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* <!-- Full-height section --> */}
        <section class="bg-purple-800 text-white  py-10">
            <div class="container mx-auto text-center">
                <h2 class="text-4xl font-bold mb-6">Ready to Supercharge Your React Skills?</h2>
                <p class="text-lg mb-8">
                    Join us today and embark on a journey to becoming a React pro. Don't miss out on the opportunity to level up your web development career.
                </p>
                <a href="#" class="bg-yellow-400 text-purple-800 py-2 px-6 rounded-full text-lg hover:bg-yellow-300 hover:text-purple-700 transition duration-300">
                    Get Started
                </a>
            </div>
        </section>
    </main>


        </>
    )
}

export default About;