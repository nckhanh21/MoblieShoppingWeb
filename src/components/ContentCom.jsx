import React from 'react';
import ReactDOM from 'react-dom';
import '../index';
import { Layout, Menu, Breadcrumb } from 'antd';
import { ShopOutlined, MenuOutlined, UserOutlined, ShoppingCartOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const ContentCom = () => {
  return (
    <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Contentđâsad
          </Content>
        </Layout>
  )
}

export default ContentCom