import { useState } from "react";
import { departmentsData } from "../../../data/department-data";

const DepartmentList = () => {
  const [departments, setDepartments] = useState(departmentsData);

  const toggleDepartment = (departmentIndex: number) => {
    const updatedDepartments = [...departments];
    updatedDepartments[departmentIndex].selected =
      !updatedDepartments[departmentIndex].selected;

    updatedDepartments[departmentIndex].subDepartments.forEach((subDep) => {
      subDep.selected = updatedDepartments[departmentIndex].selected;
    });

    setDepartments(updatedDepartments);
  };

  const toggleSubDepartment = (
    departmentIndex: number,
    subDepartmentIndex: number
  ) => {
    const updatedDepartments = [...departments];
    updatedDepartments[departmentIndex].subDepartments[
      subDepartmentIndex
    ].selected =
      !updatedDepartments[departmentIndex].subDepartments[subDepartmentIndex]
        .selected;

    const allSubDepsSelected = updatedDepartments[
      departmentIndex
    ].subDepartments.every((subDep) => subDep.selected);
    updatedDepartments[departmentIndex].selected = allSubDepsSelected;

    setDepartments(updatedDepartments);
  };

  const toggleSubDepartmentList = (departmentIndex: number) => {
    const updatedDepartments = [...departments];
    updatedDepartments[departmentIndex].expanded =
      !updatedDepartments[departmentIndex].expanded;
    setDepartments(updatedDepartments);
  };

  return (
    <div>
      {departments.map((department, departmentIndex) => (
        <div key={departmentIndex}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {department.subDepartments.length > 0 && (
              <div
                onClick={() => toggleSubDepartmentList(departmentIndex)}
                style={{
                  marginRight: "5px",
                  cursor: "pointer",
                  padding: "2px",
                  color: "blue",
                  fontSize: "20px",
                }}
              >
                {department.expanded ? "-" : "+"}
              </div>
            )}
            <input
              type="checkbox"
              checked={department.selected}
              onChange={() => {
                toggleDepartment(departmentIndex);
                toggleSubDepartmentList(departmentIndex);
              }}
            />
            <span style={{ marginLeft: "5px", fontSize: "18px" }}>
              {department.name}
            </span>
          </div>

          {department.expanded && (
            <ul style={{ marginLeft: "5px" }}>
              {department.subDepartments.map((subDep, subIndex) => (
                <li key={subIndex} style={{ listStyleType: "none" }}>
                  <input
                    type="checkbox"
                    checked={subDep.selected}
                    onChange={() =>
                      toggleSubDepartment(departmentIndex, subIndex)
                    }
                  />
                  <span style={{ marginLeft: "5px" }}>{subDep.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default DepartmentList;
