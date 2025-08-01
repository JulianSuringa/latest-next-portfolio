"use client";
import { BannerData } from "@/types";
import { prefix } from "@/utils/prefix";
import Image from "next/image";

export default function HeroBanner(data: BannerData) {
  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 justify-center text-center md:text-left items-center md:items-start">
          <h1 className="text-3xl md:text-[3.5rem] font-bold text-gray-900 dark:text-white mb-4">
            {data.hero.title}
          </h1>
          {data.hero.desc.map((text, index) => (
            <p
              className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
              key={index}
            >
              {text}
            </p>
          ))}

          <a
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-md transition"
            href="/files/Julian%20Suringa%20CV.pdf"
            target="_blank"
          >
            Download Resume
          </a>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center">
          <Image
            width={300}
            height={300}
            src={`${prefix}/images/id.png`}
            alt="Profile"
            className="rounded-full shadow-lg w-full max-w-xs object-cover"
          />
        </div>
      </div>
    </div>
  );
}
