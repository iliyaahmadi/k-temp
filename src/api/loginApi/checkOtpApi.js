import handleRestApi from "./api";
export const checkOtpApi = ({ otp }) => {
  return handleRestApi({
    uri: `http://192.168.57.1:8000/api/checkOtp/`,
    params: {
      method: "POST",
      body: JSON.stringify({
        otp,
      }),
    },
    // _loadingContext: null,
  }).then((res) => res);
};
