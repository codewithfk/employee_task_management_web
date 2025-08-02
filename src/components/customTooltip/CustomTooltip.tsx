import { Tooltip, TooltipProps } from "@mantine/core";
interface ITooltip extends TooltipProps {}
function CustomTooltip(props: ITooltip) {
  return (
    <Tooltip
      // multiline={props.multiline ?? true}
      // position={props?.position ?? "bottom"}
      withArrow={props?.withArrow ?? true}
      arrowSize={props?.arrowSize ?? 8}
      {...props}
    />
  );
}

export default CustomTooltip;
