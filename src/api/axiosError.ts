import { AxiosError } from "axios";
import axios from "axios";
import { errorNotification } from "../utils/notification";
import { store } from "../redux/store";

export const axiosError = async (err: AxiosError<any>) => {
  if (axios.isCancel(err)) {
    // Handle request cancellation
    console.warn("Request canceled:", err); // Optionally log the cancellation reason
    throw err;
  }
  const axiosError = err as AxiosError<any>;
  if (axiosError.response) {
    // The request was made and the server responded with a status code
    if (axiosError?.response?.status === 401) {
      errorNotification({
        title: "Session Expired!",
        message:
          "Your login session has expired. Please login again to continue.",
      });
      store.dispatch({
        type: "LOGOUT",
      });
    } else if (axiosError.response.status === 404) {
      errorNotification({
        title: "Error",
        message: axiosError?.response?.data?.message,
      });
    } else {
      errorNotification({
        title: "Error",
        // message: "An error occurred while processing your request.",
        message: axiosError?.response?.data?.message,
      });
    }
  } else if (axiosError.request) {
    // The request was made but no response was received
    errorNotification({
      title: "Server Error!",
      message: "No response received from the server. Please try again later.",
    });
  } else {
    // Something happened in setting up the request that triggered an error
    errorNotification({
      title: "Error",
      message: "An error occurred while setting up the request.",
    });
  }

  throw err;
};
