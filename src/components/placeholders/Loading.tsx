import { Flex } from "@mantine/core";
import Lottie from "lottie-react";
import LoadingLottie from "./assets/loading.json";

function Loading({ size = 24, style }: {
  size?: number,
  style?: React.CSSProperties
}) {
  return (
    <Flex h={"90%"} align={"center"} justify={"center"} style={style}>
      <Lottie
        animationData={LoadingLottie}
        loop={true}
        style={{
          height: size * 10,
          width: size * 10,
        }}
      />
    </Flex>
  );
}

export default Loading;
