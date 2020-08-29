import React, { ReactNode } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import { LaptopOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

interface IAuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        {/*<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>*/}
        {/*  <Menu.Item key="1">nav 1</Menu.Item>*/}
        {/*  <Menu.Item key="2">nav 2</Menu.Item>*/}
        {/*  <Menu.Item key="3">nav 3</Menu.Item>*/}
        {/*</Menu>*/}
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub2"]}
              style={{ height: "100%" }}
            >
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav2">
                {/*{Object.values(config.routes).map((value) => (*/}
                {/*  <Menu.Item active={true} key="1">*/}
                {/*    <NavLink title={value.path} route={value.path} />*/}
                {/*  </Menu.Item>*/}
                {/*))}*/}
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}
