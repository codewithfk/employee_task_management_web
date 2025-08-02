import { Flex } from "@mantine/core";
import Lottie from "lottie-react";
import NoInternetLottie from "./assets/noInternet.json";

function NoInternetConnection({ size = 32, style }: {
  size?: number,
  style?: React.CSSProperties
}) {
  return (
    <Flex h={"90%"} align={"center"} justify={"center"} style={style}>
      <Lottie
        animationData={NoInternetLottie}
        loop={true}
        style={{
          height: size * 10,
          width: size * 10,
        }}
      />
    </Flex>
  );
}

export default NoInternetConnection;
