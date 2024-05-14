import { useMutation } from "@tanstack/react-query";
import { checkUserApi } from "../../../api/loginApi/checkUserApi";
export const useCheckUserApi = () => {
  const {
    mutateAsync: checkUser,
    isPending: isCheckLoading,
    error,
  } = useMutation({
    mutationFn: checkUserApi,
  });
  return { checkUser, isCheckLoading };
};
