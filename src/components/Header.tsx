import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { MainNav } from '@/components/MainNav'

export default function Header() {
  return (
    <header className="flex items-center  w-full justify-between  p-4 bg-transparent text-foreground">
      <div className="text-2xl font-bold">
        <Link href="/">
          <div className="flex items-center flex-row">
            <Logo initials="JS" size="md" variant="orange" />
            <span className=" hidden md:flex ml-2">Portfolio</span>
          </div>
        </Link>
      </div>
      <MainNav />
    </header>
  )
}
