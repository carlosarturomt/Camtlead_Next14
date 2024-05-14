"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import ActiveLink from "@/components/molecules/links"
import { Switcher } from "@/components/molecules/buttons"
import useWindowSize from "@/hooks/useWindowSize"
import { WindowSize } from "@/interfaces"
import { ICONS } from "@/assets/icons"
import './navigationStyles.scss'

export default function Navigation() {
  const size: WindowSize = useWindowSize()
  const [toogle, setTogle] = useState<boolean>(false)
  const [openNav, setOpenNav] = useState<boolean>(false)

  useEffect(() => {
    if (size.width !== undefined && size.width < 640) {
      setTogle(true)
    } else {
      setTogle(false)
    }
  }, [size])

  return (
    <footer className="navigation_bottom">
      <nav className='navigation_bottom-nav'>
        <ActiveLink href={'/'} active={ICONS.home.fill} inactive={ICONS.home.rect} />
        <ActiveLink href={'/search'} active={ICONS.search.fill} inactive={ICONS.search.rect} />

        <button onClick={() => setOpenNav((prev) => !prev)}>
          <span className='logo border-t-2 border-b-2 border-purple-300 dark:border-purple-550'
          >
            {ICONS.logo.camt}
          </span>
        </button>

        <ActiveLink href={'/alert'} active={ICONS.alert.fill} inactive={ICONS.alert.rect} />
        <ActiveLink href={'/user'} active={ICONS.user.fill} inactive={ICONS.user.rect} />
      </nav>

      <ul className='navigation_bottom-float'>
        <Link href='/message' className={openNav ? 'btn1--active' : 'btn1'}>
          <span className={openNav ? 'transition' : 'hidden'}>
            {ICONS.message.fill}
          </span>
        </Link>

        <Link href='/people' className={openNav ? 'btn2--active' : 'btn2'}>
          <span className={openNav ? 'transition' : 'hidden'}>
            {ICONS.people.fill}
          </span>
        </Link>

        <span className={openNav ? 'btn3--active' : 'btn3'}>
          <Switcher />
        </span>
      </ul>
    </footer>
  )
}