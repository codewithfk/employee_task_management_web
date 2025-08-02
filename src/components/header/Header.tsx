import {
  Avatar,
    Burger,
    Group,
    Image,
    Menu,
    Text,
    UnstyledButton,
} from "@mantine/core";
import classes from "./Header.module.css";
import Logo from '../../assets/images/logo.png'
import { IconChevronDown, IconLogout } from "@tabler/icons-react";
import { useState } from "react";
import cx from "clsx";
import { modals } from "@mantine/modals";
import { store } from "../../redux/store";
interface IHeader {
  opened: boolean;
  toggle: () => void;
}
const user = {
  name: "Jane Spoonfighter",
  email: "janspoon@fighter.dev",
  image:
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
};
function Header({ opened, toggle }: IHeader) {
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const handleLogout = async () => {
    modals.openConfirmModal({
      title: "Logout",
      centered: true,
      children: <Text>Are you sure you want to logout this profile?</Text>,
      labels: { confirm: "Confirm", cancel: "Cancel" },
      onCancel: () => console.log("Cancel"),
      onConfirm: async () => {
        try {        
            store.dispatch({
              type: "LOGOUT",
            });
        } catch (error) {
          console.error("logoutError", error);
        }
      },
    });
  };
  return (
    <Group h="100%" px="md" justify="space-between" className={classes.header}>
      <Group h="100%" px="md">
        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="md" />
        <Image
          src={Logo}
          alt="noImage"
          width={120}
          height={60}
        />
      </Group>
        <Menu
          width={260}
          position="bottom-end"
          transitionProps={{ transition: "pop-top-right" }}
          onClose={() => setUserMenuOpened(false)}
          onOpen={() => setUserMenuOpened(true)}
          withinPortal
        >
          <Menu.Target>
            <UnstyledButton
              className={cx(classes.user, {
                [classes.userActive]: userMenuOpened,
              })}
            >
              <Group gap={7}>
                <Avatar
                  src={user.image}
                  alt={user.name}
                  radius="md"
                  size={"md"}
                />
                <Text fw={500} size="sm" lh={1} mr={3} visibleFrom="sm">
                  Admin
                </Text>
                <IconChevronDown size={"22"} stroke={1.5} />
              </Group>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              onClick={handleLogout}
              leftSection={<IconLogout size={16} stroke={1.5} />}
            >
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
    </Group>
  );
}

export default Header;
