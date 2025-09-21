import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <h3 >Hot Deals</h3>
        <ul >
          <li>Nike</li>
          <li>Adidas</li>
          <li>Puma</li>
          <li>All Stars</li>
        </ul>
      </div>

      <div>
        <h3 >Price</h3>
        <input type="range" />
        <p >$29 | $499</p>
      </div>

      <div>
        <h3>Color</h3>
        <div >
         <div className="colors">
  <span className="color-circle" style={{background: "black"}}></span>
  <span className="color-circle" style={{background: "red"}}></span>
  <span className="color-circle" style={{background: "blue"}}></span>
  <span className="color-circle" style={{background: "yellow"}}></span>
</div>

         
        </div>
      </div>
    </div>
  );
}
