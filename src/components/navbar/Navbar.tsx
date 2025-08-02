import { ScrollArea } from "@mantine/core";
import classes from "./Navbar.module.css";
import LinksGroup from "./navbarLinksGroup/NavbarLinksGroup";

const naveList = [
  { label: "Manager", link: "/manager" },
  { label: "Employee", link: "/employee" },
  { label: "Task", link: "/task" },
];
export default function Navbar() {
  const links = naveList.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));
  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
    </nav>
  );
}
