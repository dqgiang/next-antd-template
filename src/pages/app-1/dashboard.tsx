import React from 'react';
import { Card } from 'antd';
import PageLayout from '@components/PageLayout/PageLayout.component';

const Dashboard = () => {
  const routes = [
    {
      path: '/',
      breadcrumbName: 'Home',
    },
    {
      path: 'app-1',
      breadcrumbName: 'App 1',
    },
    {
      path: '',
      breadcrumbName: 'Dashboard',
    },
  ];

  return (
    <PageLayout ghost={false} title="Dashboard" routes={routes}>
      <Card>Content</Card>
    </PageLayout>
  );
};

export default Dashboard;
