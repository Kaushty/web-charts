import React from 'react';
import { Layout, PageHeader, Typography } from 'antd';
import 'antd/dist/antd.css';

import { LayoutContent } from './modules';
import './common/styles.css';

function App() {
  const { Content, Footer } = Layout;

  return (
    <Layout className="layout">
      <PageHeader
        className="site-page-header"
        title="Web Charts"
        ghost={false}
      />
      <Content className="site-page-content">
        <LayoutContent />
      </Content>
      <Footer className="site-page-footer" style={{ textAlign: 'center' }}>
        Created by{' '}
        <Typography.Link
          href="https://www.linkedin.com/in/kaushik-shetty"
          target="_blank"
        >
          Kaushik Shetty
        </Typography.Link>
      </Footer>
    </Layout>
  );
}

export default App;
