'use client'

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { cn } from '@/lib/utils' // helper from shadcn for conditional classes

const navLinks = [
  { href: '/skills', label: 'Skills', exact: false },
  { href: '/works', label: 'Works' },
  { href: '/contact', label: 'Contact' },
]

export function MainNav() {
  const router = useRouter()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map(({ href, label, exact }) => {
          const isActive = exact ? router.pathname === href : router.pathname.startsWith(href)

          return (
            <NavigationMenuItem key={href} className={cn(isActive && 'bg-accent rounded-md')}>
              <Link href={href} passHref>
                <NavigationMenuLink
                  className={cn(
                    'px-4 py-2 transition-colors hover:text-blue-500',
                    isActive && 'text-blue-600 font-semibold'
                  )}
                >
                  {label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
