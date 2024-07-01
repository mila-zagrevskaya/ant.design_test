import React from 'react';

import { Layout, Menu } from 'antd';

export const Header = () => {
  const { Header } = Layout;
  return (
  <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
      {new Array(7).fill(null).map((_, index) => {
        const key = index + 1;
        return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
      })}
    </Menu>
  </Header>
  );
};
