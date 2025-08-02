import { CSSProperties, Flex, Text } from "@mantine/core";
import Lottie from "lottie-react";
import noDataLottie from "./assets/noData.json";

const EmptyData = ({ size = 38, style, text = "No Data found!" }: {
  size?: number,
  style?: CSSProperties,
  text?: string
}) => {
  return (
    <Flex
      h={"90%"}
      align={"center"}
      justify={"center"}
      style={style}
      direction={"column"}
    >
      <Lottie
        animationData={noDataLottie}
        loop={true}
        style={{
          height: size * 10,
          width: size * 10,
        }}
      />
      <Text
        fw={"bold"} size={"1.5rem"} mt={"xl"}
      >
        {text}
      </Text>
    </Flex>
  );
};

export default EmptyData;
