export interface Project {
  id: number;
  name: string;
  deadline: string;
  description: string;
  experience: string;
}

export interface Vacancy {
  id: number;
  project_id: number;
  country: string;
  description: string;
  experience: string;
  field: string;
  name: string;
}
