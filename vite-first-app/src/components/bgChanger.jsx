import React from "react";

function BgChanger({ bgColor = "white" }) {
  return (
    <div >
      <h1 className={`h-screen bg-${bgColor}`}></h1>
    </div>
  );
}

export default BgChanger;
