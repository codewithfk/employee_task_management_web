import {
  Box,
  Collapse,
  Group,
  Text,
  UnstyledButton
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./NavbarLinksGroup.module.css";
interface LinksGroupProps {
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  link?: string;
}

export default function LinksGroup({
  label,
  initiallyOpened,
  links,
  link
}: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const [opened,setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Link to={link.link} key={link.label}>
      <Text
        className={classes.link}
      >
        {link.label}
      </Text>
    </Link>
  ));
  return (
    <>
      <UnstyledButton
        className={classes.control}
        onClick={() => (link ? navigate(link) : setOpened((o) => !o))}
        style={link === pathname? {background:'#5557D0',color:'white' }:{}}
      >
        <Group justify="space-between" gap={0}>
          <Box p={10} style={{ display: "flex", alignItems: "center" }}>
            <Box ml="sm" fz={'md'}>{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              size={16}
              style={{ transform: opened ? "rotate(-90deg)" : "none" }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
