import { notifications } from "@mantine/notifications";
import classes from "./error.module.css";

const errorNotification = ({
  title = "Error",
  message,
  color = "red",
}: {
  title?: string;
  message: string;
  color?: string;
}) => {
  return notifications.show({
    title,
    message,
    color,
    classNames: classes,
  });
};

const successNotification = ({
  title = "Success",
  message,
  color = "green",
}: {
  title?: string;
  message: string;
  color?: string;
}) => {
  return notifications.show({
    title,
    message,
    color,
    classNames: classes,
  });
};

const loadingNotification = ({
  title = "Loading...",
  message,
  color = "green",
  loading = true,
}: {
  title?: string;
  message: string;
  color?: string;
  loading?: boolean;
}) => {
  return notifications.show({
    title,
    message,
    color,
    // classNames:classes,
    loading,
    autoClose: false,
  });
};

export { errorNotification, successNotification, loadingNotification };
