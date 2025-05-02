import {useState } from "react";

function State() {
    //สร้าง State
    const [count, setCount] = useState(0)
    // function addCount() {
    //     setCount(count+1)
    // }
    // function subtractCount() {
    //     setCount(count-1)
    // }
    // function reset() {
    //     setCount(0)
    // }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>เพิ่มค่า</button>
      <button onClick={()=>setCount(count-1)}>ลดค่า</button>
      <button onClick={()=>setCount(0)}>เครียร์</button>
    </>
  );
}

export default State;
