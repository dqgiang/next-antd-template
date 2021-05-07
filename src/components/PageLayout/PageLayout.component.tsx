import React from 'react';
import { Layout, PageHeader, Menu } from 'antd';
import Link from 'next/link';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const breadcrumbItemRender = (route: any, params: any, routes: string | any[], paths: any[]) => {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link href={`/${paths.join('/')}`}>{route.breadcrumbName}</Link>
  );
};

type Props = any;

const PageLayout = ({
  children,
  routes,
  extraHeader,
  title,
  subtitle,
  className,
  ghost = false,
  onBack,
}: Props) => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo"></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">App 1</Menu.Item>
          <Menu.Item key="2">App 2</Menu.Item>
          <Menu.Item key="3">App 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title="subnav 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className={className}>
          <PageHeader
            ghost={ghost}
            title={title}
            extra={extraHeader}
            breadcrumb={{
              routes,
              itemRender: breadcrumbItemRender,
            }}
            onBack={onBack}
          />
          <Content style={{ margin: '1.5rem' }}>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
