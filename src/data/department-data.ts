import { IDepartment } from "../interfaces/department";

export const departmentsData: IDepartment[] = [
  {
    name: "Customer Service",
    selected: false,
    expanded: false,
    subDepartments: [
      { name: "Support", selected: false },
      { name: "Customer Success", selected: false },
    ],
  },
  {
    name: "Design",
    selected: false,
    expanded: false,
    subDepartments: [
      { name: "Graphic Design", selected: false },
      { name: "Product Design", selected: false },
      { name: "Web Design", selected: false },
    ],
  },
];
