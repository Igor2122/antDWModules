import React from "react";
import {Menu} from "antd";

interface INavLinkProps {
  route: string;
  title: string;
}

export default function NavLink({ route, title }: INavLinkProps) {
  return (
    <>
      <Menu.Item active={true} key="1">
        <NavLink title={title} route={route} />
      </Menu.Item>
    </>
  );
}
