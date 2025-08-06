"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils"; // helper from shadcn for conditional classes
import { prefix } from "@/utils/prefix";
import { Menu } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/skills", label: "Skills", exact: false },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

export default function MainNav() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between px-4 py-2">
      {/* Desktop Menu */}
      <div className="hidden sm:flex">
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
                    href={`/${prefix + href}`}
                    className={cn(
                      "md:px-4 py-2 transition-colors hover:text-orange-400",
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
      </div>
      {/* Mobile Sheet */}
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 rounded-md">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <nav className="flex flex-col gap-4 mt-8 p-4">
              {navLinks.map((item) => {
                const isActive = router.pathname === item.href;
                return (
                  <SheetClose asChild key={item.href}>
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-lg transition-colors hover:text-orange-400 ${
                        isActive
                          ? "bg-accent text-orange-400 font-semibold"
                          : "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
