'use client'

import { GetStaticProps, InferGetStaticPropsType } from 'next'
import path from 'path'
import fs from 'fs/promises'
import HeroBanner from '@/components/HeroBanner'
import Head from 'next/head'

import { BannerData } from '@/types/banner'
import { SkillsData } from '@/types/skills'
import { WorksData } from '@/types/works'
import RecentSkills from '@/components/RecentSkills'

export default function Home({
  data,
  recentSkills,
  recentWorks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log('Recent Skills:', recentSkills)
  console.log('Recent Works:', recentWorks)
  return (
    <>
      <Head>
        <title>Home | JS</title>
      </Head>
      <section>
        <HeroBanner {...data} />
        <p className="flex justify-center text-lg text-gray-600">
          Explore my skills, works, and contact information.
        </p>
        <RecentSkills {...recentSkills} />
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps<{
  data: BannerData
  recentSkills: SkillsData
  recentWorks: WorksData
}> = async () => {
  const filePath = path.join(process.cwd(), 'src', 'data', 'pages', 'home.json')
  const jsonData = await fs.readFile(filePath, 'utf-8')
  const data = JSON.parse(jsonData)

  const filePathWorks = path.join(process.cwd(), 'src', 'data', 'pages', 'works.json')
  const jsonDataWorks = await fs.readFile(filePathWorks, 'utf-8')
  let recentWorks = JSON.parse(jsonDataWorks)

  if (recentWorks.works.length > 1) {
    const lastIndex = recentWorks.works.length - 1
    const worksList = recentWorks.works.slice(lastIndex - 1)
    recentWorks = { ...recentWorks, works: worksList }
  }

  const filePathSkills = path.join(process.cwd(), 'src', 'data', 'pages', 'skills.json')
  const jsonDataSkills = await fs.readFile(filePathSkills, 'utf-8')
  const skillsData = JSON.parse(jsonDataSkills)
  const recentSkills = skillsData.skills.reverse().splice(0, 3)

  return {
    props: {
      data,
      recentWorks,
      recentSkills: { header: skillsData.header, skills: recentSkills },
    },
  }
}
