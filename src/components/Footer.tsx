import Link from "next/link";
import socials from "@/data/socials.json";
import Image from "next/image";
import { prefix } from "@/utils/prefix";

const socialLinks = socials.map(({ name, href }) => (
  <li key={name}>
    <a href={href} rel="noreferrer" target="_blank" className="inline-block">
      {name === "facebook" ? (
        <Image
          src={`${prefix}/icons/socials/facebook.svg`}
          alt="Facebook"
          width={30}
          height={30}
          className="w-7 h-7"
        />
      ) : name === "instagram" ? (
        <Image
          src={`${prefix}/icons/socials/linkedin.svg`}
          alt="Instagram"
          width={30}
          height={30}
          className="w-7 h-7"
        />
      ) : name === "twitter" ? (
        <Image
          src={`${prefix}/icons/socials/twitter.svg`}
          alt="Twitter"
          width={30}
          height={30}
          className="w-7 h-7"
        />
      ) : (
        <Image
          src={`${prefix}/icons/socials/insta.svg`}
          alt="LinkedIn"
          width={30}
          height={30}
          className="w-7 h-7"
        />
      )}
    </a>
  </li>
));

export default function Footer() {
  return (
    <footer className="bg-transparent text-secondary-foreground">
      <div className="flex flex-col items-center justify-center p-10 md:p-20 w-full mx-auto">
        <div className="flex flex-col items-center"></div>
        <ul className="flex  flex-row item-center justify center space-x-4">
          {socialLinks}
        </ul>
        <small className="text-color-gray-500 text-sm mt-4">
          Copyright ©2025 All rights reserved
        </small>
        <Link href="/privacy-policy">privacy policy</Link>
      </div>
    </footer>
  );
}
