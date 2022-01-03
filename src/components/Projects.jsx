import React from 'react';
import { Divider } from './style';
import aimodeling from '../assets/aimodeling.png';
import galaxytimes from '../assets/galaxytimes.png';
import getflix from '../assets/getflix.png';

const projects = [
  {
    id: 1,
    title: 'GetFlix',
    description:
      'A movie rental website built in REACT.js. External APIs used: TMDB & Stripe API',
    image: getflix,
    url: 'https://github.com/saniyanafees6/GetFlix',
  },
  {
    id: 2,
    title: 'Galaxy Times',
    description: 'React application pulling data from various NASA APIs',
    image: galaxytimes,
    url: 'https://github.com/saniyanafees6/galaxy-news',
  },
  {
    id: 3,
    title: 'Automated Diagnosis Model Using Transfer Learning',
    description:
      'Transfer Learning to distinguish between Pneumonia and Normal X-Rays.',
    image: aimodeling,
    url: 'https://github.com/saniyanafees6/Automated-Diagnosis-Model-Using-Transfer-Learning',
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="mb-4 block text-3xl text-center leading-8 font-extrabold tracking-tight text-slate-600 sm:text-4xl">
        Projects
      </h1>
      <div className="leading-8 relative px-4 sm:px-6 lg:px-8">
        <section className="bg-white ">
          <div className="container px-6 py-10 mx-auto">
            <div className="grid grid-cols-1 gap-8  xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((p) => (
                <div className=" space-y-3 border-2 border-rose-700 rounded-xl">
                  <span className="inline-block text-rose-600 ">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="overflow-hidden"
                    />
                  </span>

                  <div className="p-8">
                    <h1 className="text-2xl font-semibold text-gray-700 capitalize ">
                      {p.title}
                    </h1>

                    <p className=" text-gray-500 ">{p.description}</p>

                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={p.url}
                      className="inline-flex p-2 text-rose-700 capitalize transition-colors duration-200 transform bg-rose-100 rounded-full  hover:underline hover:text-rose-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="mt-8 leading-8 relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <div className="flow-root">
            <a
              target="_blank"
              rel="noreferrer"
              className="pb-10"
              href="https://github.com/saniyanafees6/"
            >
              <button
                type="button"
                className=" inline-flex items-center px-4 py-2 border border-rose-300 shadow-sm text-base font-medium rounded-md text-rose-700 bg-white hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
              >
                See more on Github!
              </button>
            </a>
          </div>
        </div>
      </div>

      <Divider />
    </section>
  );
};

export default Projects;
