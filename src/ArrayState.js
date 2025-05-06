// import { useState } from "react";
import Header from "./components/Header";
import StudetList from "./components/StudentList";
import "./App.css";

function ArrayState() {
  //สร้าง State
  return (
    <>
      <div className="container">


        <Header />
        <main>
          <StudetList />
        </main>
      </div>
    </>
  );
}

export default ArrayState;
