import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import OtpInput from "react-otp-input";

import { useForm } from "react-hook-form";
import handleRestApi from "../../../api/loginApi/api";
import Image from "../../ui/Image";
import Button from "../../ui/Button";
import TextFild from "../../ui/TextFild";
import { HiEye } from "react-icons/hi";
import { HiCheck } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { useCheckUserApi } from "../../../features/apiQuery/login/useCheckUserApi";
import { useLoginUserApi } from "../../../features/apiQuery/login/useLoginUserApi";
import { useCheckOtpApi } from "../../../features/apiQuery/login/useCheckOtpApi";
import LoginIn from "./LoginIn";
import ConfirmPassword from "./ConfirmPassword";

function Login() {
  const [userType, setUserType] = useState("");
  const [otp, setOtp] = useState("");
  const [insertOtp, setInsertOtp] = useState(false);

  const { checkUser, isCheckLoading } = useCheckUserApi();
  const { loginUser, isLoginLoading } = useLoginUserApi();
  const { checkOtp, isOtpLoading } = useCheckOtpApi();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [inputType, setInputType] = useState("text");
  const submitLoginForm = (data) => {
    if (otp) {
      data.otp = otp;
    }
    if (!data.mobile) {
      toast.error("please enter your phone number and password");
      return;
    }
    if (userType === "loggingIn") {
      loginUser(
        { mobile: data.mobile, password: data.password },
        {
          onSuccess: (data) => {
            if (data?.status === 200 && data.body) {
              localStorage.setItem(
                "access_token",
                data.body.access_token ?? ""
              );
              localStorage.setItem(
                "refresh_token",
                data.body.refresh_token ?? ""
              );
              toast.success("به حساب کاربری خوش آمدید");
            } else {
              toast.error("اطلاعات وارد اشتباه است");
            }
          },
        }
      );
    } else if (userType === "signingUp" && data.otp) {
      checkOtp(
        { otp: data.otp },
        {
          onSuccess: (data) => {
            if (data?.status === 200 && data.body) {
              setUserType("userConfirmPassword");
            } else {
              toast.error("اطلاعات وارد اشتباه است");
            }
          },
        }
      );
    } else {
      checkUser(
        { mobile: data.mobile },
        {
          onSuccess: (data) => {
            if (data?.status === 202 && data.body) {
              setUserType("loggingIn");
            } else if (data?.status === 201 && data.body) {
              setUserType("signingUp");
            } else {
              toast.error("اطلاعات وارد اشتباه است");
            }
          },
        }
      );
    }
  };
  return (
    <div className="card-container">
      <Image
        altName={"login-background-mobile"}
        url={"login/login-background-mobile.webp"}
        imgClass={"background-mobile"}
      />
      <Image
        altName={"login-background-desktop"}
        url={"login/login-background-desktop.webp"}
        imgClass={"background-desktop"}
      />
      <div className="card-container flex justify-center items-center">
        <div className="login-card  px-10 py-4">
          <div className="logo text-zinc-200 text-center flex justify-center">
            <Image
              url={"login/Karovida English.png"}
              imgClass="logo-image"
              altName="logo-loginCard"
            />
          </div>
          <div className="title  text-zinc-200 pt-10 pb-3">
            wellcom to karovida.
          </div>
          <div className="sub-title text-sm text-zinc-500">
            {!userType
              ? "use your phone number to either login or sign-up"
              : userType === "loggingIn"
              ? "please enter your password"
              : userType === "signingUp"
              ? "please enter OTP code"
              : "please set your password and confirm password"}
          </div>
          <div>
            <form
              action=""
              className="my-8 flex flex-col gap-y-2"
              onSubmit={handleSubmit(submitLoginForm)}
            >
              {!userType && (
                <div>
                  <TextFild
                    className={"login-input text-zinc-200"}
                    name={"mobile"}
                    id={"mobile"}
                    placeholder={"phone number"}
                    register={register}
                    validate={{ required: "please enter your phone number" }}
                    errors={errors}
                  >
                    <HiPhone />
                  </TextFild>
                </div>
              )}
              {userType === "loggingIn" && (
                <LoginIn
                  inputType={inputType}
                  register={register}
                  errors={errors}
                  setInputType={setInputType}
                />
              )}
              {userType === "userConfitmPassword" && <ConfirmPassword />}
              {userType === "signingUp" && (
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={5}
                  renderSeparator={<span className="text-zinc-200">-</span>}
                  renderInput={(props) => <input type="text" {...props} />}
                  containerStyle={`flex  gap-x-2 justify-center`}
                  inputStyle={{
                    width: "2.5rem",
                    border: "1px solid rgb(var(--color-primary-400))",

                    borderRadius: "5px",
                    padding: "0.3rem",
                  }}
                />
              )}

              <div className="w-full mt-3">
                <Button title={"LOGIN OR SIGN_UP"} btnClass="mt-5" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
