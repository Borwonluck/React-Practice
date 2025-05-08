// import { useState } from "react";
import Header from "./components/Header";
import StudetList from "./components/StudentList";
import "./App.css";
import { useState } from "react";

function App() {
  //สร้าง State
    const [students, setStudent] = useState([
      { id: 1, name: "วอน" },
      { id: 2, name: "เมล" },
      { id: 3, name: "โลนี่" },
    ]);

    function deleteStudent(id) {
      //filter ลบเฉพาะ id ที่ตรงกัน id อื่นเหลือไว้
      setStudent(students.filter((item) => item.id !== id));
    }
  return (
    <>
      <div className="container">


        <Header title="ข้อมูลนักเรียน"/>
        <main>
          <StudetList students={students} deleteStudent={deleteStudent}/>
        </main>
      </div>
    </>
  );
}

export default App;
