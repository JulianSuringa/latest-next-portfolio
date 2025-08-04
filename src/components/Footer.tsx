import Link from "next/link";
import socials from "@/data/socials.json";
import Facebook from "@/components/icons/facebook";
import { useTheme } from "next-themes";
import Instagram from "./icons/instagram";
import Twitter from "./icons/twitter";
import Linkedin from "./icons/linkedin";

export default function Footer() {
  const { theme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark" || theme === "dark";
  const iconColor = isDark ? "#D3D3D3" : "#21243D";

  return (
    <footer className="bg-transparent text-secondary-foreground">
      <div className="flex flex-col items-center justify-center p-10 md:p-20 w-full mx-auto">
        <div className="flex flex-col items-center"></div>
        <ul className="flex  flex-row item-center justify center space-x-4">
          {socials.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                rel="noreferrer"
                target="_blank"
                className="inline-block"
              >
                {name === "facebook" ? (
                  <Facebook color={iconColor} className="w-7 h-7" />
                ) : name === "instagram" ? (
                  <Instagram color={iconColor} className="w-7 h-7" />
                ) : name === "twitter" ? (
                  <Twitter color={iconColor} className="w-7 h-7" />
                ) : (
                  <Linkedin color={iconColor} className="w-7 h-7" />
                )}
              </a>
            </li>
          ))}
        </ul>
        <small className="text-color-gray-500 text-sm mt-4">
          Copyright ©2025 All rights reserved
        </small>
        <Link href="/privacy-policy">privacy policy</Link>
      </div>
    </footer>
  );
}
