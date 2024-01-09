'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import Link from 'next/link'

import { VscFileCode, VscAccount, VscBeaker } from 'react-icons/vsc'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className={'nav-menu flex justify-start p-1 shadow-lg whitespace-nowrap'}>
      <SidebarItem icon={<VscFileCode size={24} />} text='Resume' link={'/resume'} pathname={pathname} />
      <SidebarItem icon={<VscBeaker size={24} />} text='Experiments' link={'/experiments'} pathname={pathname} />
      <SidebarItem icon={<VscAccount size={24} />} text='Contact info' link={'/contact'} pathname={pathname} />
    </div>
  )
}

export interface Props {
  icon: ReactNode
  text: string
  link: string
  pathname: string
}

const SidebarItem = ({ icon, text, link, pathname }: Props) => {
  const textColor = pathname.includes(link) ? 'text-amber-300' : 'text-white'

  return (
    <Link href={link}>
      <div
        className={`flex justify-start m-2 cursor-pointer pr-2 hover:scale-105 transition-all duration-300 ${textColor}`}
      >
        <div className={''}>{icon}</div>
        <div className={'pl-2'}>{text}</div>
      </div>
    </Link>
  )
}
