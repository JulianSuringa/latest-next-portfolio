"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils"; // helper from shadcn for conditional classes
import { prefix } from "@/utils/prefix";

const navLinks = [
  { href: "/skills", label: "Skills", exact: false },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

export function MainNav() {
  const router = useRouter();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map(({ href, label, exact }) => {
          const isActive = exact
            ? router.pathname === href
            : router.pathname.startsWith(href);

          return (
            <NavigationMenuItem
              key={href}
              className={cn(isActive && "bg-accent rounded-md")}
            >
              <NavigationMenuLink
                href={prefix + href}
                className={cn(
                  "px-4 py-2 transition-colors hover:text-orange-400",
                  isActive && "text-orange-400 font-semibold"
                )}
              >
                {label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
