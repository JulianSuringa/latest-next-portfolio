export interface WorkItem {
  id: number;
  title: string;
  description: string;
  companyLink: string;
  companyName: string;
  imageUrl: string;
  imageAlt: string;
  dateStarted: string;
  dateEnd: string;
  detailId: string;
}

export interface WorksData {
  header: string;
  works: WorkItem[];
}
