import Link from 'next/link'

import { VscFilePdf } from 'react-icons/vsc'
import { montserrat_bold, montserrat_normal } from '@/app/ui/fonts'

export default function Resume() {
  return (
    <div>
      <div className={'m-10'}>
        <p className={`${montserrat_bold.className} text-6xl`}>NICK ASCHENBACH</p>
        <div className={'ml-1'}>
          <div className={'m-5'} />
          <p>nick.aschenbach@gmail.com</p>
          <p>503.915.1358</p>
          <p>San Diego, CA</p>
          <div className={'m-5'} />
          <hr />
          <div className={'m-5'} />
          <div className={'lg:grid lg:grid-cols-6'}>
            <p className={`${montserrat_bold.className} col-span-1 min-w-10`}>PROFESSIONAL SUMMARY</p>
            <p className={'col-span-5'}>
              Experienced software engineer with a track record in healthcare, fintech and startup companies. I
              specialize in bringing new projects to life. My passion is to do what it takes to get the software out the
              door leading activities like supporting engineering, working closely with business teams to evolve product
              requirements, project management, UX design, QA, coaching and mentorship.
            </p>
          </div>
          <div className={'m-5'} />
          <hr />
          <div className={'m-5'} />
          <div className={'lg:grid lg:grid-cols-6'}>
            <p className={`${montserrat_bold.className} col-span-1 min-w-10`}>TECH SKILLS</p>
            <div className={'col-span-5'}>
              <div className={'grid grid-cols-3'}>
                <div>
                  <p>Nodejs</p>
                  <p>AWS</p>
                  <p>Prisma</p>
                  <p>Sequelize</p>
                </div>
                <div>
                  <p>Express</p>
                  <p>React / Nextjs</p>
                  <p>TDD</p>
                  <p>Data science</p>
                </div>
                <div>
                  <p>REST / GraphQL APIs</p>
                  <p>Jest</p>
                  <p>Figma</p>
                  <p>Illustrator / Photoshop</p>
                </div>
              </div>
            </div>
          </div>
          <div className={'m-5'} />
          <hr />
          <div className={'m-5'} />
          <div className={'lg:grid lg:grid-cols-6'}>
            <p className={`${montserrat_bold.className} col-span-1 min-w-10`}>EXPERIENCE</p>
            <div className={'col-span-5'}>
              <p>Head of Engineering</p>
              <div className={'grid grid-cols-2 content-between'}>
                <p>VECKTA Corp - San Diego, CA</p>
                <p className={'text-center'}>2020-2024</p>
              </div>
              <div className={'m-5'} />
              <ul className={'pl-5'}>
                <li>Lead company engineering function that develops world class software</li>
                <li>
                  Collaborated with internal and external stakeholders to build features that solve the right problems
                </li>
                <li>Managed software operations, including triage, documentation and response</li>
                <li>
                  Developed software roadmap, planned epics, designed user experiences and broke work down into feature
                  stories
                </li>
                <li>Reviewed code, performed quality assurance and maintained a high level of software quality</li>
                <li>Developed and maintained cloud and application deployment infrastructure</li>
                <li>
                  Researched and evaluated new technology, 3rd party data sources and other innovations which could
                  improve application performance
                </li>
                <li>Developed and monitored key performance indicators to ensure and communicate team success</li>
                <li>Built ChatGPT enabled electrical outage detector bot prototype</li>
              </ul>
              <div className={'m-5'} />
              <p>Software Engineering Team Lead / Engineering Manager</p>
              <div className={'grid grid-cols-2 content-between'}>
                <p>Cambia Health Solutions - Portland, OR</p>
                <p className={'text-center'}>2016-2020</p>
              </div>
              <div className={'m-5'} />
              <ul className={'pl-5'}>
                <li>Lead development of a health care medical payments mobile application</li>
                <li>Developed and led agile rituals including scrum, sprint planning, demo and grooming</li>
                <li>
                  Engineered RESTful APIs using Node.js on the back-end (express, sequelize, Cognito/JWT-based auth,
                  jest)
                </li>
                <li>Developed insights for bills employing medical expert knowledge and data science techniques</li>
                <li>Developed React-Native front-end app to support iOS and Android devices</li>
                <li>
                  Constructed Extract-Transform-Load (ETL) pipelines using AWS technologies: S3, Lambda, SQS, ECS and
                  RDS (Postgres/MySQL)
                </li>
                <li>Employed AWS technologies: EC2, IAM, load balancers, Route53, ACM and CloudWatch Logs/Events</li>
              </ul>
              <div className={'m-5'} />
              <p>Software Development Engineer</p>
              <div className={'grid grid-cols-2 content-between'}>
                <p>Hewlett-Packard - Vancouver, WA</p>
                <p className={'text-center'}>2014-2016</p>
              </div>
              <div className={'m-5'} />
              <ul className={'pl-5'}>
                <li>Developed Ruby on Rails application for HP’s Instant Ink Subscription Service</li>
                <li>Increased customer base by over 50x from 30K to over 1M users</li>
                <li>
                  Developed bill payment and point of sale activation systems to support US and overseas customers
                </li>
                <li>Developed back-end to communicate with over 1M printer embedded systems</li>
                <li>Prototyped new applications using Rails and Sinatra</li>
                <li>Analyzed and improved application performance</li>
              </ul>
              <div className={'m-5'} />
              <p>Software Development Engineer</p>
              <div className={'grid grid-cols-2 content-between'}>
                <p>Siemens - Wilsonville, OR</p>
                <p className={'text-center'}>2012-2014</p>
              </div>
              <div className={'m-5'} />
              <ul className={'pl-5'}>
                <li>Developed new Azure based multi-physics simulator</li>
                <li>Implemented REST APIs using ASP .NET MVC in C#</li>
              </ul>
            </div>
          </div>
          <div className={'m-5'} />
          <hr />
          <div className={'m-5'} />
          <div className={'lg:grid lg:grid-cols-6'}>
            <p className={`${montserrat_bold.className} col-span-1 min-w-10`}>PROFESSIONAL SUMMARY</p>
            <p className={'col-span-5'}>
              Experienced software engineer with a track record in healthcare, fintech and startup companies. I
              specialize in bringing new projects to life. My passion is to do what it takes to get the software out the
              door leading activities like supporting engineering, working closely with business teams to evolve product
              requirements, project management, UX design, QA, coaching and mentorship.
            </p>
          </div>
          <div className={'m-5'} />
          <hr />
          <div className={'m-5'} />
          <div className={'lg:grid lg:grid-cols-6'}>
            <p className={`${montserrat_bold.className} col-span-1 min-w-10`}>EDUCATION</p>
            <div className={'col-span-5'}>
              <p>Portland State University MS, Computer Science</p>
              <p>University of Washington BS, Computer Science</p>
              <p>Pitzer College, BA, Computational Biology</p>
            </div>
          </div>
          <div className={'m-10'} />
          <div // download link
            className={'flex nav-link-light'}
          >
            <VscFilePdf size={24} />
            <div className={'pl-2'}>
              <Link href={'/aschenbach-resume.pdf'}>View PDF</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
