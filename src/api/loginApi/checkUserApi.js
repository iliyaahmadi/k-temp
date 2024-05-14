import handleRestApi from "./api";
export const checkUserApi = ({ mobile }) => {
  return handleRestApi({
    uri: `http://192.168.57.1:8000/api/checkUser/`,
    params: {
      method: "POST",
      body: JSON.stringify({
        mobile: mobile,
      }),
    },
    // _loadingContext: null,
  }).then((res) => {
    return res;
  });
};
