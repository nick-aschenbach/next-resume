import { Lia500Px } from 'react-icons/lia'
import Link from 'next/link'
import { CiLinkedin } from 'react-icons/ci'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { MdOutlineMailOutline } from 'react-icons/md'
import { GoLink } from 'react-icons/go'

export default function ContactInfo() {
  return (
    <div className={'m-10'}>
      <div className={'md:grid md:grid-cols-6 md:gap-2'}>
        <div className={'col-span-1'}>Email</div>
        <div className={'col-span-5'}>
          <div className={'flex nav-link-light'}>
            <MdOutlineMailOutline size={24} className={'absolute'} />
            <div className={'pl-8'}>
              <Link href={'mailto:nick.aschenbach@gmail.com'}>nick.aschenbach@gmail.com</Link>
            </div>
          </div>
        </div>
        <div className={'col-span-1'}>Phone</div>
        <div className={'col-span-5'}>
          <div className={'flex nav-link-light'}>
            <HiOutlineDevicePhoneMobile size={24} className={'absolute'}/>
            <div className={'pl-8'}>
              <Link href={'tel:503-915-1358'}>(503) 915.1358 (US)</Link>
            </div>
          </div>
        </div>
        <div className={'col-span-1'}>LinkedIn</div>
        <div className={'col-span-5'}>
          <div className={'flex nav-link-light'}>
            <CiLinkedin size={24} className={'absolute'} />
            <div className={'pl-8'}>
              <Link href={'https://www.linkedin.com/in/nick-aschenbach-87905b5/'} target={'_blank'}>
                https://www.linkedin.com/in/nick-aschenbach-87905b5/
              </Link>
            </div>
          </div>
        </div>
        <div className={'col-span-1'}>Blog</div>
        <div className={'col-span-5'}>
          <div className={'flex nav-link-light'}>
            <GoLink size={20} className={'absolute pl-1'}/>
            <div className={'pl-8'}>
              <Link href={'https://nick-aschenbach.github.io'} target={'_blank'}>
                https://nick-aschenbach.github.io
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
