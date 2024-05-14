import React from "react";

function Image({ url, imgClass = "", altName = "" }) {
  return (
    <img
      src={`../../../public/images/${url}`}
      className={imgClass}
      alt={altName}
    />
  );
}

export default Image;
