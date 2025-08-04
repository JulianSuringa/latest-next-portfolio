import Link from "next/link";
import { Logo } from "@/components/Logo";
import { MainNav } from "@/components/MainNav";
import ThemeToggleButton from "@/components/ThemeToggleButton";

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
      <div className="flex items-center md:space-x-2">
        <MainNav />
        <ThemeToggleButton />
      </div>
    </header>
  );
}
