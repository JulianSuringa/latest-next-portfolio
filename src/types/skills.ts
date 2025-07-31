export interface SkillItem {
  title: string;
  date_created: string;
  description: string;
}

export interface SkillsData {
  header: string;
  skills: SkillItem[];

}