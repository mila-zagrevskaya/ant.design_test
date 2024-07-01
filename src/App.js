import React from 'react';

import { Layout } from 'antd';

import { Header } from 'components/Header/index';
import { Sidebar } from 'components/Sidebar/index';
import { Home } from 'components/Home/index';
import { Footer } from 'components/Footer/index';

function App() {
  return (
    <div className="App page-container">
      <Layout>
        <Sidebar />
        <Layout>
          <Header />
          <Home />
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
