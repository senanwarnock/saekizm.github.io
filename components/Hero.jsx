import React from 'react';

export default function  Hero() {

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
    <div >
        <div className="bg-gradient-to-r from-black to-gray-900 h-screen flex flex-col justify-center items-center">
            <h1 className=" animate-slide-in text-6xl font-bold text-white">Hi, I&apos;m <span className="text-blue-700">Senan Warnock</span></h1>
            <h2 className="animate-slide-in-right text-2xl font-bold text-white">I&apos;m a <span className="text-blue-700">Full Stack Developer</span></h2>
            <svg onClick={() => scrollTo('about')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="cursor-pointer justify-center m-10 animate-bounce w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg></div>
            

    </div>
    )

}

