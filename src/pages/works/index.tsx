import { GetStaticProps, InferGetStaticPropsType } from 'next'
import path from 'path'

import fs from 'fs/promises'
import Head from 'next/head'
import { WorkItem, WorksData } from '@/types'
import Link from 'next/link'

export default function WorksPage({ worksData }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { header, works } = worksData
  if (!works || works.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">No works found</h1>
        <p className="text-gray-600">Please check back later.</p>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Works history| JS</title>
      </Head>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-10">
        <div className="flex flex-col justify-center w-full max-w-7xl">
          <h1 className="text-2xl font-bold mb-4 text-center">{header}</h1>
          <p className="text-gray-600 mb-8 text-center">
            Here are some of my works history. Feel free to explore and learn more about them.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full max-w-screen-lg">
          {[...works].reverse().map((work: WorkItem) => (
            <div key={work.id} className="w-full flex flex-col items-center">
              <div className="flex flex-col bg-white dark:bg-gray-800 md:flex-row text-black/90 rounded-md my-2 md:my-0 p-8 w-full">
                <div className="w-full max-w-3xs p-8  flex justify-center items-center mx-auto md:mx-0">
                  <Link href={work.companyLink}>
                    <img
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
                      <Link href={work.companyLink} className="underline hover:text-blue-600">
                        {work.companyName}
                      </Link>{' '}
                      | {work.dateStarted} - {work.dateEnd}
                    </span>
                  </div>

                  <div className="text-md  text-center md:text-left text-black/70">
                    {work.description}
                  </div>
                </div>
              </div>

              <hr className="w-full max-w-screen-lg border-t border-black/20" />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps<{ worksData: WorksData }> = async () => {
  const filePath = path.join(process.cwd(), 'src', 'data', 'pages', 'works.json')
  const jsonData = await fs.readFile(filePath, 'utf-8')
  const data = JSON.parse(jsonData)

  return {
    props: {
      worksData: data,
    },
  }
}
