import { WorksData } from "@/types/works";
import Link from "next/link";
import Image from "next/image";

export default function RecentWorksHistory({ header, works }: WorksData) {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full max-w-7xl mx-auto px-6 py-16 gap-6">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-2xl font-bold">Recent {header}</h2>
          <Link href="/works" className="text-blue-600 hover:underline">
            View All Works
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-3">
          {[...works].reverse().map((work) => (
            <div key={work.id} className="w-full flex flex-col items-center">
              <div className="flex flex-col bg-white dark:bg-gray-800 md:flex-row text-black/90 rounded-md my-2 md:my-0 md:p-8  w-full">
                <div className="w-full max-w-3xs p-8  flex justify-center items-center mx-auto md:mx-0">
                  <Link href={work.companyLink}>
                    <Image
                      width={150}
                      height={150}
                      src={work.imageUrl}
                      alt={work.imageAlt}
                      className="max-w-full h-auto object-contain"
                    />
                  </Link>
                </div>

                <div className="pl-3 md:pl-4  flex flex-col justify-center md:justify-start md:text-left text-center">
                  <div className="text-xl font-bold">{work.title}</div>

                  <div className="text-[1.125rem] text-black/40 py-4">
                    <span>
                      <Link
                        href={work.companyLink}
                        className="underline hover:text-blue-600"
                      >
                        {work.companyName}
                      </Link>{" "}
                      | {work.dateStarted} - {work.dateEnd}
                    </span>
                  </div>

                  <div className="text-md  text-center md:text-left text-black/70">
                    {work.description}
                  </div>
                </div>
              </div>

              <hr className="w-full max-w-7xl border-t border-black/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
