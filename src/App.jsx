import React, { useState, useLayoutEffect } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import Shop from './pages/Shop'
import Navbar from './components/Navbar'
import HeaderCom from './components/HeaderCom'
import ContentCom from './components/ContentCom'
import { Layout, Menu, Breadcrumb, } from 'antd';
import { ShopOutlined, MenuOutlined, UserOutlined, LaptopOutlined, ShoppingCartOutlined, NotificationOutlined } from '@ant-design/icons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";

import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/CartPage';
import Profile from './pages/Profile';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const App = () => {
  
  const [items, setItems] = useState([])
  const productAPI = "http://localhost:3000/cart"

  useLayoutEffect(() => {
    fetch(productAPI)
      .then(res => res.json())
      .then(post => {
        setItems(post)
      })
  }, [])

  return (
    <Router>
      <Layout>
        <HeaderCom />
        <Layout>
          <Navbar />

          <Routes>
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:productId" element={<ProductDetail products={items} />} />
            <Route path="/profile" element={<Profile />} />

          </Routes>

        </Layout>
      </Layout>
    </Router>
  )
};

export default App;