import "./StudentList.css";
import Item from "./Item";
import { useState } from "react";

function StudetList(props) {
  const [show, setShow] = useState(true); //true แสดงเนื้อหา
  const { students, deleteStudent } = props; //ดึงข้อมูลจาก props
  return (
    <>
      <ul>
        <div className="header">
          <h1>จำนวนนักเรียน : {students.length}</h1>
          {/* เปลี่ยนค่า State Show */}
          <button onClick={() => setShow(!show)}>
            {show ? "ซ่อน" : "แสดง"}
          </button>
        </div>
        {show &&
          students.map((data) => (
            <Item key={data.id} data={data} deleteStudent={deleteStudent}/> //เรียกใช้ Component Item
          ))}
      </ul>
    </>
  );
}

export default StudetList;
