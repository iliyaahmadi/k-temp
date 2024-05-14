import toast from "react-hot-toast";

const getAccessToken = () => localStorage.getItem("access_token");
const getRefreshToken = () => localStorage.getItem("refresh_token");

const refreshToken = async () => {
  const uri = process.env.REACT_APP_BASE_URL;
  const refreshToken = getRefreshToken();
  return await fetch(`${uri}api/token/refresh/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh: refreshToken }),
  }).then(async (res) => {
    if (res && res.status === 200) {
      const data = await res.json();
      localStorage.setItem("access_token", data.access);
      window.location.reload();
    } else if (res.status === 305) {
      localStorage.clear();
      toast.error(
        "مدت زمان اتصال به سرور به پایان رسید. لطفاً مجدداً وارد شوید"
      );
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }
  });
};

const handleRestApi = async ({ uri, params = {}, _loadingContext }) => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();
  _loadingContext?.set(true);

  try {
    const response = await fetch(uri, {
      ...params,
      headers: {
        "Content-Type": "application/json",
        ...(accessToken && {
          Authorization: `Bearer ${accessToken ?? ""}`,
        }),
      },
    });

    const preview = await response.json();

    if (!response.ok && response.status === 401) {
      await refreshToken();
      const newAccessToken = getAccessToken();
      if (newAccessToken) {
        params.headers.Authorization = `Bearer ${newAccessToken}`;
        return await handleRestApi({ uri, params });
      }
    }

    return { status: response.status, body: preview };
  } catch (err) {
    if (
      err &&
      (err.message === "Failed to fetch" || err.message === "Network Error")
    ) {
      toast.error("مشکلی در اتصال به شبکه به وجود آمده است");
      return { status: 0, body: null };
    }
  } finally {
    _loadingContext?.set(false);
  }
};

export default handleRestApi;
