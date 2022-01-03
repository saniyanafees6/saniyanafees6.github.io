import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h1 className="mb-4 block text-3xl text-center leading-8 font-extrabold tracking-tight text-slate-600 sm:text-4xl">
        Get In Touch
      </h1>
      <div className="mt-8 leading-8 relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <div className="flow-root">
            <p className="pb-8 text-xl text-gray-500 leading-8">
              Have a question or want to work together? My inbox is alway open,
              send me a message I'll do my best to get back to you!
            </p>

            <a className="pb-10" href="mailto:saniyanafees6@gmail.com">
              <button
                type="button"
                className=" inline-flex items-center px-4 py-2 border border-rose-300 shadow-sm text-base font-medium rounded-md text-rose-700 bg-white hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
              >
                Say Hello!
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
