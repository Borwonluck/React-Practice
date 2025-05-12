// import { useState } from "react";
import Header from "./components/Header";
import StudetList from "./components/StudentList";
import "./App.css";
import AddForm from "./components/AddForm";
import { useState } from "react";

function App() {
  //สร้าง State
    const [students, setStudent] = useState([
      { id: 1, name: "วอน" },
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
          <AddForm/>
          <StudetList students={students} deleteStudent={deleteStudent}/>
        </main>
      </div>
    </>
  );
}

export default App;
