import Link from 'next/link'
import { CiLinkedin } from 'react-icons/ci'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { MdOutlineMailOutline } from 'react-icons/md'
import { PiGithubLogo } from 'react-icons/pi'
import { PiNotePencil } from 'react-icons/pi'

const stuff = [
  {
    title: 'Email',
    icon: <MdOutlineMailOutline size={24} className={'absolute'} />,
    link: <Link href={'mailto:nick.aschenbach@gmail.com'}>nick.aschenbach@gmail.com</Link>,
  },
  {
    title: 'Phone',
    icon: <HiOutlineDevicePhoneMobile size={24} className={'absolute'} />,
    link: <Link href={'tel:503-915-1358'}>(503) 915.1358 (US)</Link>,
  },
  {
    title: 'LinkedIn',
    icon: <CiLinkedin size={24} className={'absolute'} />,
    link: (
      <Link href={'https://www.linkedin.com/in/nick-aschenbach-87905b5/'} target={'_blank'}>
        https://www.linkedin.com/in/nick-aschenbach-87905b5/
      </Link>
    ),
  },
  {
    title: 'GitHub',
    icon: <PiGithubLogo size={24} className={'absolute'} />,
    link: (
      <Link href={'https://github.com/nick-aschenbach/'} target={'_blank'}>
        https://github.com/nick-aschenbach/
      </Link>
    ),
  },
  {
    title: 'Blog',
    icon: <PiNotePencil size={24} className={'absolute'} />,
    link: (
      <Link href={'https://nick-aschenbach.github.io'} target={'_blank'}>
        https://nick-aschenbach.github.io
      </Link>
    ),
  },
]

export default function ContactInfo() {
  return (
    <div className={'m-10'}>
      <div className={'md:grid md:grid-cols-6 md:gap-2'}>
        {stuff.map(item => (
          <>
            <div className={'col-span-1'}>{item.title}</div>
            <div className={'col-span-5'}>
              <div className={'flex nav-link-light pb-2'}>
                {item.icon}
                <div className={'pl-8'}>{item.link}</div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
  // return (
  //   <div className={'m-10'}>
  //     <div className={'md:grid md:grid-cols-6 md:gap-2'}>
  //       <div className={'col-span-1'}>Email</div>
  //       <div className={'col-span-5'}>
  //         <div className={'flex nav-link-light'}>
  //           <MdOutlineMailOutline size={24} className={'absolute'} />
  //           <div className={'pl-8'}>
  //             <Link href={'mailto:nick.aschenbach@gmail.com'}>nick.aschenbach@gmail.com</Link>
  //           </div>
  //         </div>
  //       </div>
  //       <div className={'col-span-1'}>Phone</div>
  //       <div className={'col-span-5'}>
  //         <div className={'flex nav-link-light'}>
  //           <HiOutlineDevicePhoneMobile size={24} className={'absolute'} />
  //           <div className={'pl-8'}>
  //             <Link href={'tel:503-915-1358'}>(503) 915.1358 (US)</Link>
  //           </div>
  //         </div>
  //       </div>
  //       <div className={'col-span-1'}>LinkedIn</div>
  //       <div className={'col-span-5'}>
  //         <div className={'flex nav-link-light'}>
  //           <CiLinkedin size={24} className={'absolute'} />
  //           <div className={'pl-8'}>
  //             <Link href={'https://www.linkedin.com/in/nick-aschenbach-87905b5/'} target={'_blank'}>
  //               https://www.linkedin.com/in/nick-aschenbach-87905b5/
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //       <div className={'col-span-1'}>Github</div>
  //       <div className={'col-span-5'}>
  //         <div className={'flex nav-link-light'}>
  //           <PiGithubLogo size={24} className={'absolute'} />
  //           <div className={'pl-8'}>
  //             <Link href={'https://github.com/nick-aschenbach/'} target={'_blank'}>
  //               https://github.com/nick-aschenbach/
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //       <div className={'col-span-1'}>Blog</div>
  //       <div className={'col-span-5'}>
  //         <div className={'flex nav-link-light'}>
  //           <PiNotePencil size={24} className={'absolute'} />
  //           <div className={'pl-8'}>
  //             <Link href={'https://nick-aschenbach.github.io'} target={'_blank'}>
  //               https://nick-aschenbach.github.io
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
}
