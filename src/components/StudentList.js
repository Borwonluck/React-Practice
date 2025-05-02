import { useState } from "react";

function StudetList() {
  const [students, setStudent] = useState([
    { id: 1, name: "วอน" },
    { id: 2, name: "เมล" },
    { id: 3, name: "โลนี่" },
  ]);
  const [show, setShow] = useState(true); //true แสดงเนื้อหา

  function deleteStudent(id) {
    //filter ลบเฉพาะ id ที่ตรงกัน id อื่นเหลือไว้
    setStudent(students.filter((item) => item.id !== id));
  }
  return (
    <>
      <h1>จำนวนนักเรียน : {students.length}</h1>
      {/* เปลี่ยนค่า State Show */}
      <button onClick={() => setShow(!show)}>Toggle</button>
      <ul>
        {show &&
          students.map((item) => (
            <li key={item.id}>
              <p>
                {item.id} - {item.name}
              </p>
              <button onClick={() => deleteStudent(item.id)}>ลบ</button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default StudetList;
