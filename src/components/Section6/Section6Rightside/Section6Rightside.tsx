import React from "react";
import { MdEmail } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import "./Section6Rightside.css";
export default function Section6Rightside() {
  return (
    <div className="section6-rightside">
      <div className="inputDivMain">
        <p>Email adress</p>
        <div className="inputDiv">
          <MdEmail />
          <input type="text" placeholder="Enter Email Adress..." />
        </div>
      </div>

      <div className="inputDivMain">
        <p>Password</p>
        <div className="inputDiv">
          <HiLockClosed />
          <input type="password" placeholder="Create a password..." />
        </div>
      </div>

      <div className="inputDivMain">
        <p>Repeat Password</p>
        <div className="inputDiv">
          <HiLockClosed />
          <input type="password" placeholder="Repeat a password..." />
        </div>
      </div>

      <button>REGISTER IT NOW</button>
    </div>
  );
}
