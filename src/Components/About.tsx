// import React from 'react';
import img from './img/download.jpeg'
import person1 from './img/download (2).jpeg'
import person2 from './img/download (1).jpeg'
import person3 from './img/download (3).jpeg'
import person4 from './img/download(4).jpeg'


const About = () => {
    return (
        <div className="bg-gray-50 text-gray-900 font-sans">
            {/* Header Section */}
            <header className="flex flex-col items-center py-16 px-4 bg-white relative">
            <h1 className="text-6xl text-center font-bold">
                    We’re here to <br /><span className="text-blue-600 underline">guarantee your success</span>
                </h1><br />
    <div className="bg-blue-600 text-white rounded-lg p-8 max-w-3xl text-center relative z-0 shadow-lg">
        <p className="text-lg mb-4">
            ConsultUs provides consulting services that help business owners and leaders build a more valuable business. We worked with their founder to build a professional, modern site that follows the StoryBrand framework to clearly communicate the value it adds to potential clients.
        </p>
    </div>
    <div className="relative mt-[-40px] z-10">
    <img
    src={img}
    alt="Consulting Team Meeting"
    className="rounded-lg shadow-lg w-[600px] h-56 object-cover ml-[60px]"
/>

    </div>
</header>

            {/* Mission Section */}
            <section className="py-16 px-4 bg-white">
                <h2 className="text-3xl font-bold text-center mb-10">Our Mission</h2>
                <div className="flex justify-between gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
                    <div className='bg-blue-100 rounded-2xl content-center h-40'>
                        <h3 className="text-xl font-semibold mb-2">Introduction</h3>
                        <p className="text-gray-700">Helping companies grow by providing tailored solutions in their growth strategy and management processes.</p>
                    </div>
                    <div className='bg-blue-100 rounded-2xl content-center h-40'>
                        <h3 className="text-xl font-semibold mb-2">Specialization</h3>
                        <p className="text-gray-700">We specialize in various industries, ensuring our support is deeply relevant to each client’s needs.</p>
                    </div>
                    <div className='bg-blue-100 rounded-2xl content-center h-40'>
                        <h3 className="text-xl font-semibold mb-2">Support</h3>
                        <p className="text-gray-700">Our team is dedicated to assisting clients in overcoming any business challenges.</p>
                    </div>
                    <div className='bg-blue-100 rounded-2xl content-center h-40'>
                        <h3 className="text-xl font-semibold mb-2">Technology</h3>
                        <p className="text-gray-700">We utilize the latest technologies and platforms to enhance the client experience.</p>
                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="py-16 px-4 bg-gray-50">
                <h2 className="text-3xl font-bold text-center mb-10">Our Commitment</h2>
                <div className="grid gap-8 md:grid-cols-3 text-center">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Ethics</h3>
                        <p className="text-gray-700">We adhere to ethical consulting practices, ensuring our advice is in the client’s best interest.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Quality</h3>
                        <p className="text-gray-700">Our team strives to deliver the highest quality in every service we provide.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Confidentiality</h3>
                        <p className="text-gray-700">We prioritize confidentiality, ensuring our clients’ data and information remain secure.</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-4 bg-white">
                <h2 className="text-3xl font-bold text-center mb-10">Our Success Team</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
                    <div className="flex flex-col items-center">
                        <img src={person1} alt="Team Member" className="w-40 h-40 rounded-full mb-4"/>
                        <h3 className="text-lg font-semibold">Jenny Wilson</h3>
                        <p className="text-gray-500">Consultant</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={person4} alt="Team Member" className="w-40 h-40 rounded-full mb-4"/>
                        <h3 className="text-lg font-semibold">Eleanor Pena</h3>
                        <p className="text-gray-500">Account Manager</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={person3} alt="Team Member" className="w-40 h-40 rounded-full mb-4"/>
                        <h3 className="text-lg font-semibold">Robert Fox</h3>
                        <p className="text-gray-500">Project Lead</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={person2} alt="Team Member" className="w-40 h-40 rounded-full mb-4"/>
                        <h3 className="text-lg font-semibold">Ravi Kumar</h3>
                        <p className="text-gray-500">Developer</p>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-800 text-gray-300 py-8">
                <div className="container mx-auto text-center space-y-4">
                    <p>&copy; 2024 ConsultUs. All rights reserved.</p>
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="hover:text-white">Contact</a>
                        <a href="#" className="hover:text-white">Services</a>
                        <a href="#" className="hover:text-white">About Us</a>
                        <a href="#" className="hover:text-white">Careers</a>
                        <a href="#" className="hover:text-white">Support</a>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <a href=""><img src="/path/to/facebook-icon.svg" alt="Facebook" className="w-6 h-6"/></a>
                        <a href="#"><img src="/path/to/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6"/></a>
                        <a href="#"><img src="/path/to/twitter-icon.svg" alt="Twitter" className="w-6 h-6"/></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default About;
