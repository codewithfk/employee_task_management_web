"use client";
import { memo, ReactNode } from "react";
import Error from "./Error";
import Loading from "./Loading";
import { Paper } from "@mantine/core";
import useProgress from "./useProgress";

function LoadingErrorContainer({
  isError = false,
  isLoading = false,
  isRefetching = false,
  children,
  isPaperEnable = true,
}: {
  isError?: boolean;
  isLoading?: boolean;
  isRefetching?: boolean;
  children?: ReactNode;
  isPaperEnable?: boolean;
}) {
  useProgress({
    isRefetching: isRefetching,
  });
  return (
    <>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loading size={18} />
      ) : isPaperEnable ? (
        <Paper shadow="md" p="md">
          {children}
        </Paper>
      ) : (
        children
      )}
    </>
  );
}

export default memo(LoadingErrorContainer);
