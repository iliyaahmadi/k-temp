import handleRestApi from "./api";
export const loginUserApi = ({ mobile, password }) => {
  return handleRestApi({
    uri: `http://192.168.159.1:8000/api/login/`,
    params: {
      method: "POST",
      body: JSON.stringify({
        mobile,
        password,
      }),
    },
    // _loadingContext: null,
  }).then((res) => res);
};
