import { useMutation } from "@tanstack/react-query";
import { loginUserApi } from "../../../api/loginApi/loginUserApi";
export const useLoginUserApi = () => {
  const {
    mutateAsync: loginUser,
    isPending: isLoginLoading,
    error,
  } = useMutation({
    mutationFn: loginUserApi,
  });
  return { loginUser, isLoginLoading };
};
