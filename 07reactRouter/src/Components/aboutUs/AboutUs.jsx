import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://images.pexels.com/photos/16323434/pexels-photo-16323434.jpeg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                         Building Modern Web Experiences with React ⚛️
                      </h2>
                      <p className="mt-6 text-gray-600">
                         

                         Hi, My name is SHIV KUMAR YADAV and I'm a passionate **React Developer and Computer Science Engineering student specializing in Artificial Intelligence**. I enjoy building responsive, interactive, and user-friendly web applications using React.js, JavaScript, HTML, CSS, and Tailwind CSS.
                         
                         I love exploring new technologies, solving problems, and turning creative ideas into real-world projects. I'm continuously improving my development skills and learning modern tools to build efficient and scalable applications.
                         
                         My goal is to create meaningful digital experiences, contribute to innovative projects, and grow as a developer while making a positive impact through technology.
                      </p>
                      <p className="mt-4 text-gray-600">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}