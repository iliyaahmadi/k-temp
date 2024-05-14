import React from "react";

function TextFild({
  type = "type",
  name,
  id = "",
  placeholder = "",
  className = "",
  register,
  validate = {},
  errors,
  children,
  onClick = () => null,
}) {
  return (
    <>
      <div className="flex">
        {children && (
          <button type="button" className="input-icon-btn" onClick={onClick}>
            {children}
          </button>
        )}
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className={className}
          {...register(name, validate)}
        />
      </div>
      {errors[name]?.message && (
        <div className="text-red-500 mt-2">{errors[name]?.message}</div>
      )}
    </>
  );
}

export default TextFild;
