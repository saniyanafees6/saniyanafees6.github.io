import { Divider } from './style/';
const technology = [
  {
    name: 'React',
  },
  {
    name: 'Tailwind',
  },
  {
    name: 'HTML & CSS',
  },

  {
    name: 'JavaScript',
  },
  {
    name: 'Python',
  },
  {
    name: 'Git',
  },
  {
    name: 'JQuery',
  },
  {
    name: 'SQL',
  },
  {
    name: 'Markdown',
  },
];

export default function Home() {
  return (
    <section id="home">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-rose-700 font-semibold tracking-wide uppercase">
              Saniya Nafees
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-slate-600 sm:text-4xl">
              Software Engineer
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            I'm a software developer based in Colorado specializing in building
            user friendly applications and websites. Shortly after graduating{' '}
            <a
              href="https://www.njit.edu/"
              className="text-rose-700 hover:text-rose-900 underline"
            >
              New Jersey Institute of Technology
            </a>{' '}
            I joined{' '}
            <a
              href="https://www.clarksusa.com"
              className="text-rose-700 hover:text-rose-900 underline"
            >
              Clarks
            </a>
            , where I worked as a Front End Developer and got the opportunity to
            work on interesting and meaningful projects on a daily basis.
          </p>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            I am currently working at{' '}
            <a
              href="https://www.clarksusa.com"
              className="text-rose-700 hover:text-rose-900 underline"
            >
              Ent Credit Union
            </a>{' '}
            as an Application Developer II (Front end), where I specialize in
            various technologies such as React, Redux, Tailwind CSS and Azure.
          </p>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            Here's some of the technologies I enjoy working with:
          </p>
        </div>
        <div className="text-lg max-w-prose mx-auto">
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {technology.map((person) => (
              <li
                key={person.email}
                className="col-span-1 bg-white rounded-lg divide-y divide-gray-200"
              >
                <div className="w-full flex items-center justify-between p-2 space-x-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3 before:content-['\25B9'] before:left-0 before:absolute before:text-rose-300 before:ml-[-10px] relative inline-block">
                      <h3 className="text-gray-600 font-mono font-medium text-l truncate ml-2">
                        {person.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Divider />
    </section>
  );
}
