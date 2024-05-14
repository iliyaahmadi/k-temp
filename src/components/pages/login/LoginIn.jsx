import React from "react";
import TextFild from "../../ui/TextFild";
import { HiEye, HiEyeOff } from "react-icons/hi";

function LoginIn({ inputType, register, errors, setInputType }) {
  return (
    <div>
      <div className="mt-4">
        <TextFild
          type={inputType}
          className={"login-input text-zinc-200"}
          name={"password"}
          id={"password"}
          placeholder={"password"}
          register={register}
          // validate={{ required: "please enter your password" }}
          errors={errors}
          onClick={() =>
            setInputType((prev) => {
              return prev == "text" ? "password" : "text";
            })
          }
        >
          {inputType === "text" ? <HiEyeOff /> : <HiEye />}
        </TextFild>
      </div>
    </div>
  );
}

export default LoginIn;
