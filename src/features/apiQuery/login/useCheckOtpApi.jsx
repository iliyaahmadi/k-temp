import { useMutation } from "@tanstack/react-query";
import { checkUserApi } from "../../../api/loginApi/checkUserApi";
import { checkOtpApi } from "../../../api/loginApi/checkOtpApi";
export const useCheckOtpApi = () => {
  const {
    mutateAsync: checkOtp,
    isPending: isOtpLoading,
    error,
  } = useMutation({
    mutationFn: checkOtpApi,
  });
  return { checkOtp, isOtpLoading };
};
