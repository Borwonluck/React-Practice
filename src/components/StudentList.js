import { useState } from "react";
import "./StudentList.css";

function StudetList() {
  const [students, setStudent] = useState([
    { id: 1, name: "วอน" },
    { id: 2, name: "เมล" },
    { id: 3, name: "โลนี่" },
  ]);
  const [show, setShow] = useState(true); //true แสดงเนื้อหา
  const btnStyle = {
    background: show ? "purple" : "green",
  }


  function deleteStudent(id) {
    //filter ลบเฉพาะ id ที่ตรงกัน id อื่นเหลือไว้
    setStudent(students.filter((item) => item.id !== id));
  }
  return (
    <>
      <ul>
        <div className="header">
          <h1>จำนวนนักเรียน : {students.length}</h1>
          {/* เปลี่ยนค่า State Show */}
          <button onClick={() => setShow(!show)}style={btnStyle}>{show ? "ซ่อน" : "แสดง"}</button>
        </div>
        {show &&
          students.map((item) => (
            <li key={item.id}>
              <p>
                {item.id} - {item.name}
              </p>
              <button onClick={() => deleteStudent(item.id)} className="delete">ลบ</button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default StudetList;
