import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ActiveLinkProps } from '@/interfaces'

export default function ActiveLink({ href, active, inactive }: ActiveLinkProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <Link href={href} onClick={handleClick} className='h-6' >
      {pathname === href ? active : inactive}
    </Link>
  )
}