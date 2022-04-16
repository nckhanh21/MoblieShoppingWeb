import React, { useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import '../index';
import { List, Card, Layout, Menu, Breadcrumb, Input } from 'antd';
import { ShopOutlined, MenuOutlined, UserOutlined, ShoppingCartOutlined, FilterOutlined } from '@ant-design/icons';
import ProductCom from '../components/ProductCom';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;

const Shop = () => {
  const onSearch = value => console.log(value)
  const [items, setItems] = useState([])
  const productAPI = "http://localhost:3000/product"

  useLayoutEffect(() => {
    fetch(productAPI)
      .then(res => res.json())
      .then(post => {
        setItems(post)
      })
  }, [])

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Breadcrumb style={{ margin: '16px 0', cursor: 'pointer'}}>
          <Breadcrumb.Item>Shop</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <Search placeholder="Search..." allowClear onSearch={onSearch} style={{ width: 200 }} />
          <FilterOutlined style={{fontSize:"30px", paddingLeft: "10px"}} />
        </div>
      </div>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={items}
          renderItem={item => (
            <List.Item>
              <Card ><ProductCom item={item} /></Card>
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  )
}

export default Shop