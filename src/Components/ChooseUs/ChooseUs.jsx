import React from "react";

function ChooseUs(props) {
  return (
    <>
      <div className="text-center mt-3">
        <div style={{ color: props.color }}>{props.icon}</div>
        <p style={{ color: props.color }}>{props.title_en}</p>
      </div>
    </>
  );
}

export default ChooseUs;
