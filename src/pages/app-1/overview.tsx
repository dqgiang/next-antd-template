import React from 'react';
import { Card } from 'antd';
import PageLayout, { Props } from '@components/PageLayout/PageLayout.component';

const Dashboard = () => {
  const props: Props = {};

  return (
    <PageLayout {...props}>
      <Card>This is index</Card>
    </PageLayout>
  );
};

export default Dashboard;
