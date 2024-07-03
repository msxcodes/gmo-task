export interface IDepartment {
  name: string;
  selected: boolean;
  subDepartments: SubDepartment[];
  expanded: boolean;
}

export interface SubDepartment {
  name: string;
  selected: boolean;
}
