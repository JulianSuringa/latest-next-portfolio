import { GetStaticProps, InferGetStaticPropsType } from "next";
import path from "path";

import fs from "fs/promises";
import Head from "next/head";
import { SkillItem } from "@/types/skills";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
export default function SkillPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { header, skills } = data;
  if (!skills || skills.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">No skills found</h1>
        <p className="text-gray-600">Please check back later.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Skills | JS</title>
      </Head>
      <section className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4 md:p-10">
        <div className="flex flex-col justify-center w-full max-w-7xl">
          <h1 className="text-2xl font-bold mb-4 text-center">{header}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
            Here are some of my skills that I have acquired over the years. Feel
            free to explore and learn more about them.
          </p>
          <Accordion
            type="single"
            collapsible
            className="flex flex-col max-w-7xl"
            defaultValue="item-1"
          >
            {skills.map((skill: SkillItem, index: number) => (
              <AccordionItem
                value={`item-${index}`}
                key={index + new Date().getTime()}
              >
                <AccordionTrigger className={cn("font-semibold text-xl")}>
                  <h2>{skill.title}</h2>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="text-md text-gray-400  py-2">
                    <span className="text-gray-500">{skill.date_created}</span>
                  </p>
                  <p className="text-foreground text-base">
                    {skill.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="max-w-2xl mx-auto text-center mt-12 px-4">
            <p className="text-md text-gray-800 dark:text-gray-400 font-medium mb-4">
              If you want to know more about my skills, feel free to contact me!
            </p>

            <p className="text-md text-gray-800 dark:text-gray-400 font-medium mb-4">
              You can also check out my{" "}
              <Link
                href="/works"
                className="text-blue-600 hover:underline font-semibold"
              >
                works experience
              </Link>{" "}
              to see how I apply these skills.
            </p>

            <p className="text-md text-gray-800 dark:text-gray-400 font-medium mb-4">
              If you have any questions or want to discuss potential
              collaborations, please{" "}
              <Link
                href="/contact"
                className="text-blue-600 hover:underline font-semibold"
              >
                contact me
              </Link>
              .
            </p>

            <p className="text-md font-semibold text-black dark:text-gray-400 dark:white mb-4">
              Thank you for visiting my skills page!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "pages",
    "skills.json"
  );
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return {
    props: {
      data,
    },
  };
};
