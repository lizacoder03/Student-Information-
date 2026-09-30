import { useState } from "react";
import StudentCard from "./StudentCard";

const studentsData = [
  {
    name: "Souvik Baidya",
    roll: "BCA001",
    department: "Computer Applications",
    semester: "7th",
    cgpa: 8.5,
    photo: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Rahul Sharma",
    roll: "BCA002",
    department: "Computer Applications",
    semester: "7th",
    cgpa: 9.1,
    photo: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Priya Das",
    roll: "BCA003",
    department: "Computer Applications",
    semester: "7th",
    cgpa: 8.8,
    photo: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Arjun Roy",
    roll: "BCA004",
    department: "Computer Applications",
    semester: "7th",
    cgpa: 7.9,
    photo: "https://i.pravatar.cc/150?img=13",
  },
];

function StudentList() {
  const [sortOrder, setSortOrder] = useState("default");

  const sortedStudents = [...studentsData].sort((a, b) => {
    if (sortOrder === "high") {
      return b.cgpa - a.cgpa;
    }

    if (sortOrder === "low") {
      return a.cgpa - b.cgpa;
    }

    return 0;
  });

  return (
    <section className="student-section">
      <div className="section-header">
        <h2>Student List</h2>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Default Order</option>
          <option value="high">CGPA: High to Low</option>
          <option value="low">CGPA: Low to High</option>
        </select>
      </div>

      <div className="student-grid">
        {sortedStudents.map((student) => (
          <StudentCard
            key={student.roll}
            name={student.name}
            roll={student.roll}
            department={student.department}
            semester={student.semester}
            cgpa={student.cgpa}
            photo={student.photo}
          />
        ))}
      </div>
    </section>
  );
}

export default StudentList;