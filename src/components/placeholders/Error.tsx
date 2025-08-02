"use client";
import { Button, CSSProperties, Flex } from "@mantine/core";
import { useState } from "react";
import ErrorLottie from "./assets/error.json";
import Lottie from "lottie-react";

function Error({ size = 32, style }: {
  size?: number,
  style?: CSSProperties
}) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Flex
      h={"90%"}
      align={"center"}
      justify={"center"}
      direction="column"
      style={style}
    >
      <Lottie
        animationData={ErrorLottie}
        loop={true}
        style={{
          height: size * 10,
          width: size * 10,
        }}
      />
      <Button
        onClick={() => {
          setIsLoading(true);
          window.location.reload();
        }}
        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
        color="red"
        loading={isLoading}
      >
        Try Again
      </Button>
    </Flex>
  );
}

export default Error;
