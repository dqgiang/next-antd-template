import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Route, MenuDataItem } from '@ant-design/pro-layout/lib/typings';
import { SiderMenuProps } from '@ant-design/pro-layout/lib/components/SiderMenu/SiderMenu';

import Footer from './Footer/footer.component';

const { BasicLayout, PageContainer, defaultRenderCollapsedButton } = {
  BasicLayout: dynamic<any>(() => import('@ant-design/pro-layout').then((mod) => mod.BasicLayout), {
    ssr: false,
  }),
  PageContainer: dynamic<any>(
    () => import('@ant-design/pro-layout').then((mod) => mod.PageContainer),
    {
      ssr: false,
    },
  ),
  defaultRenderCollapsedButton: dynamic<any>(
    () =>
      import('@ant-design/pro-layout/lib/components/SiderMenu/SiderMenu').then(
        (mod) => mod.defaultRenderCollapsedButton,
      ),
    { ssr: false },
  ),
};

const breadcrumbItemRender = (route: any, params: any, routes: string | any[], paths: any[]) => {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link href={`/${paths.join('/')}`}>{route.breadcrumbName}</Link>
  );
};

const ROUTES: Route = {
  path: '/',
  routes: [
    {
      path: 'app-1',
      name: 'App 1',
      routes: [
        {
          path: 'overview',
          name: 'Overview',
          icon: null,
        },
        {
          path: 'dashboard',
          name: 'Dashboard',
          icon: null,
        },
      ],
    },
    {
      path: '/app-2',
      name: 'Example Page',
    },
  ],
};

const menuHeaderRender = (
  logoDom: React.ReactNode,
  titleDom: React.ReactNode,
  props: SiderMenuProps | undefined,
) => (
  <Link href="/">
    <a>
      {logoDom}
      {!props?.collapsed && titleDom}
    </a>
  </Link>
);

const menuItemRender = (options: MenuDataItem, element: React.ReactNode) => (
  <Link href={options.path || ''}>
    <a>{element}</a>
  </Link>
);

// export type Props = {
//   breadcrumbNameMap: Record<string, MenuDataItem>;
//   route: ProLayoutProps['route'] & {
//     authority: string[];
//   };
//   settings: Settings;
//   dispatch: Dispatch;
// } & ProLayoutProps;

export type Props = any;

const PageLayout = (props: Props) => {
  const {
    children,
    settings,
    defaultCollapsed,
    showCollapsedButton,
    pageHeaderProps,
    ...restProps
  } = props;
  const { title: pageTitle = '' } = pageHeaderProps || {};

  // NOTE: When intentially set collapsed true by default, avoid breakpoint trigger of ProLayout
  const [breakpoint] = useState(!defaultCollapsed && 'lg');

  return (
    <BasicLayout
      style={{ minHeight: '100vh' }}
      route={ROUTES}
      menuItemRender={menuItemRender}
      menuHeaderRender={menuHeaderRender}
      location={location}
      defaultCollapsed={defaultCollapsed}
      breakpoint={breakpoint}
      collapsedButtonRender={!!showCollapsedButton && defaultRenderCollapsedButton}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          breadcrumbName: 'HOME',
        },
        ...routers,
      ]}
      footerRender={
        settings?.footerRender === undefined || settings.footerRender
          ? (props: any) => <Footer {...props} />
          : undefined
      }
      {...restProps}
    >
      <PageContainer title={pageTitle || ''}>{children}</PageContainer>
    </BasicLayout>
  );
};

export default PageLayout;
