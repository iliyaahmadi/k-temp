import React from "react";

function Button({ title, onClick = () => null, btnClass = "" }) {
  return (
    <button onClick={onClick} className={`btn-container ${btnClass}`}>
      {title}
    </button>
  );
}

export default Button;
