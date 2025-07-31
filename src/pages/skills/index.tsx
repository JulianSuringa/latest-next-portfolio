import { GetStaticProps, InferGetStaticPropsType } from 'next'
import path from 'path'

import fs from 'fs/promises'
import Head from 'next/head'
import { SkillItem } from '@/types/skills'

export default function SkillPage({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { header, skills } = data
  if (!skills || skills.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">No skills found</h1>
        <p className="text-gray-600">Please check back later.</p>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Skills | JS</title>
      </Head>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-10">
        <div className="flex flex-col justify-center w-full max-w-7xl">
          <h1 className="text-2xl font-bold mb-4 text-center">{header}</h1>
          <p className="text-gray-600 mb-8 text-center">
            Here are some of my skills that I have acquired over the years. Feel free to explore and
            learn more about them.
          </p>
          <ul className="flex flex-col divide-y divide-gray-200 px-4 py-2 space-y-2.5">
            {skills.map((skill: SkillItem, index: number) => (
              <li key={index} className="bg-white px-4 py-4 hover:bg-gray-50 transition rounded-md">
                <h2 className="text-xl tracking-wide font-semibold text-gray-800">{skill.title}</h2>
                <p className="text-md text-gray-400 mb-1 py-2">
                  <span className="text-gray-500">{skill.date_created}</span>
                </p>
                <p className="text-gray-700 text-base">{skill.description}</p>
              </li>
            ))}
          </ul>
          <div className="max-w-2xl mx-auto text-center mt-12 px-4">
            <p className="text-md text-gray-800 font-medium mb-4">
              If you want to know more about my skills, feel free to contact me!
            </p>

            <p className="text-md text-gray-800 font-medium mb-4">
              You can also check out my{' '}
              <a href="/works" className="text-blue-600 hover:underline font-semibold">
                works experience
              </a>{' '}
              to see how I apply these skills.
            </p>

            <p className="text-md text-gray-800 font-medium mb-4">
              If you have any questions or want to discuss potential collaborations, please{' '}
              <a href="/contact" className="text-blue-600 hover:underline font-semibold">
                contact me
              </a>
              .
            </p>

            <p className="text-md font-semibold text-black dark:white mb-4">
              Thank you for visiting my skills page!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'src', 'data', 'pages', 'skills.json')
  const jsonData = await fs.readFile(filePath, 'utf-8')
  const data = JSON.parse(jsonData)

  return {
    props: {
      data,
    },
  }
}
