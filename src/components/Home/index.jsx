import React from 'react';

import { Layout } from 'antd';

import { CardPanel } from 'components/CardsPanel/index';
import { ProgressBar } from 'components/Progress/index';
import { WizardSteps } from 'components/Steps/index';
import { Tables } from 'components/Table/index';

export const Home = () => {
  const { Content } = Layout;
  return (
    <Content>
      <CardPanel />
      <ProgressBar/>
      <WizardSteps/>
      <Tables />
    </Content>
  );
};
