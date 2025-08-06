import { SkillsData } from "@/types/skills";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/cards";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RecentSkills({ header, skills }: SkillsData) {
  return (
    <div className="flex w-full bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col w-full max-w-7xl mx-auto px-6 py-16 gap-6">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold">Recent {header}</h2>
          <Link href="/skills" className="text-blue-600 hover:text-orange-400">
            <span className="inline-flex items-center gap-1">
              View All <ArrowRight size={20} />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-3">
          {skills.map((skill) => (
            <Card key={skill.title}>
              <CardHeader>
                <CardTitle>{skill.title}</CardTitle>
                <CardDescription>{skill.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-md">
                  Date:{skill.date_created}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
