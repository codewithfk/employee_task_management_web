import { Avatar, Box, Group, HoverCard, Text } from "@mantine/core";
import React, { useMemo } from "react";

interface TCustomAvatarGroupProps {
  data?: { src?: string; name?: string }[];
  maxShown?: number;
}

const INITIALS_COLORS = ["blue", "indigo", "green", "yellow", "orange"];

function CustomAvatarGroup({
  data = [],
  maxShown = 3,
}: TCustomAvatarGroupProps) {
  const users = useMemo(() => {
    let target = [...data];
    if (data?.length > maxShown) {
      target = data.slice(0, maxShown);
    }
    return {
      data: target,
      maxShown: maxShown,
      totalCount: data?.length || 0,
      shownCount: target?.length || 0,
      remainingCount: (data?.length || 0) - (target?.length || 0),
      remainingData: data?.slice(maxShown) || [],
    };
  }, [data, maxShown]);
  return (
    <Avatar.Group spacing="sm">
      {users?.data?.map((item, index) => (
        <Avatar
          key={index + ""}
          src={item?.src}
          name={item?.name}
          radius="xl"
          allowedInitialsColors={INITIALS_COLORS}
          color="initials"
        />
      ))}

      {users?.remainingCount ? (
        <HoverCard width={280} shadow="md" withArrow>
          <HoverCard.Target>
            <Avatar radius="xl">+{users?.remainingCount}</Avatar>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Box style={{ maxHeight: 200, overflowY: "auto" }}>
              {users?.remainingData?.map((item, index) => (
                <Group
                  key={index}
                  wrap="nowrap"
                  style={{
                    borderBottom: "1px solid #e0e0e0",
                    padding: "8px 0",
                  }}
                >
                  <Avatar
                    src={item?.src}
                    name={item?.name}
                    radius="xl"
                    allowedInitialsColors={INITIALS_COLORS}
                    color="initials"
                  />
                  <Text lineClamp={2} size="sm">
                    {item?.name}
                  </Text>
                </Group>
              ))}
            </Box>
          </HoverCard.Dropdown>
        </HoverCard>
      ) : null}
    </Avatar.Group>
  );
}

export default CustomAvatarGroup;
