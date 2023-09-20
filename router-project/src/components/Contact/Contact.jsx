import React from "react";

function Contact (){
    return(
        <>
        <main>
        <section class="bg-green-300 py-11">
            <div class="container mx-auto text-center">
                <h1 class="text-4xl font-bold text-blue-800 mb-4">Connect with Us</h1>
                <p class="text-lg text-gray-600">
                    We're here to empower you with React. Reach out anytime!
                </p>
            </div>
        </section>

        <section class="py-12 mx-2">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* <!-- Email --> */}
                    <div class="p-4 bg-white rounded-lg shadow-md">
                        <h2 class="text-2xl font-semibold text-blue-800 mb-4">Email Us</h2>
                        <p class="text-gray-700">
                            Have questions, ideas, or just want to chat about the endless possibilities of React? Send us an email at <a href="mailto:shivamkumarraut7@gmail.com" class="text-blue-500 hover:underline">shivamkumarraut7@gmail.com</a>. Let's fuel your React journey together!
                        </p>
                    </div>

                    {/* <!-- Phone Number --> */}
                    <div class="p-4 bg-white rounded-lg shadow-md">
                        <h2 class="text-2xl font-semibold text-blue-800 mb-4">Call Us</h2>
                        <p class="text-gray-700">
                            Need immediate guidance to unleash your web development potential with React? Reach out to our experts at <a href="tel:9749694882" class="text-blue-500 hover:underline">974-969-4882</a>. React knowledge is just a call away!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Visit Us --> */}
        <section class="bg-purple-800 text-white h-screen py-10">
            <div class="container mx-auto text-center">
                <h2 class="text-4xl font-bold mb-6">Visit Us</h2>
                <p class="text-lg mb-8">
                    Step into the world of React at 1234 Elm Street, Reactville, USA. Discover how React can transform your career and open doors to incredible opportunities. Visit us and let's start this journey together!
                </p>
                <a href="#" class="bg-yellow-400 text-purple-800 py-2 px-6 rounded-full text-lg hover:bg-yellow-300 hover:text-purple-700 transition duration-300">
                    Plan Your Visit
                </a>
            </div>
        </section>
    </main>
        </>
    )
}

export default Contact;