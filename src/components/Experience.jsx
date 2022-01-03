import { BriefcaseIcon } from '@heroicons/react/outline';
import { Divider } from './style/';
import { WorkDetails, WorkTechnologies } from './work/';

const timeline = [
  {
    id: 1,
    company: 'Ent Credit Union',
    title: 'Application Developer II',
    time: 'November 2021 - Present',
    href: 'https://www.ent.com',
    icon: BriefcaseIcon,
    iconBackground: 'bg-slate-500',
    details: [
      'Working on a cross functional scrum team to complete required features',
      'Participating in team design meetings, and provide input on proposed solutions',
      'Managing and updating the front end of Ent Credit Union customer facing website',
    ],
    technologies: [
      'React',
      'Redux',
      'Bootstrap',
      'TypeScript',
      'ES6+',
      'Node.js',
    ],
  },
  {
    id: 2,
    company: 'Clarks',
    title: 'Junior Front End Developer',
    href: 'https://www.clarksusa.com',
    time: 'February 2020 - April 2021',
    timetime: '2020-09-22',
    icon: BriefcaseIcon,
    iconBackground: 'bg-slate-500',
    details: [
      'Managed and updated front end of Clarks USA eCommerce website',
      'Created new features functionality and capabilities on the site using jQuery, HTML and CSS',
      'Supported Email Marketing coding requirements on Salesforce Marketing Cloud platform',
      'Ran A/B tests and analyze consumer behavior using Monetate platform.',
    ],
    technologies: ['JavaScript', 'jQuery', 'Salesforce', 'Monetate'],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Experience() {
  return (
    <section id="experience">
      <h1 className="mb-4 block text-3xl text-center leading-8 font-extrabold tracking-tight text-slate-600 sm:text-4xl">
        Work Experience
      </h1>
      <div className="mt-8 leading-8 relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <div className="flow-root">
            <ul role="list" className="-mb-8">
              {timeline.map((work, workIdx) => (
                <li key={work.id}>
                  <div className="relative pb-8">
                    {workIdx !== timeline.length - 1 ? (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span
                          className={classNames(
                            work.iconBackground,
                            'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                          )}
                        >
                          <work.icon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4 flex-wrap">
                        <div>
                          <p className="text-sm text-gray-900">
                            {work.title}{' '}
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={work.href}
                              className="font-medium text-rose-700"
                            >
                              @ {work.company}
                            </a>
                          </p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                          <time dateTime={work.timetime}>{work.time}</time>
                        </div>
                      </div>
                    </div>
                    <WorkDetails details={work.details} />
                    <WorkTechnologies technologies={work.technologies} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Divider />
    </section>
  );
}
