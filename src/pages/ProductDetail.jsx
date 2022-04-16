import React, { useState, useLayoutEffect, useEffect } from 'react';
import { Image, List, Card, Layout, Breadcrumb, Typography, Space, Rate, Badge, Button } from 'antd';
import { ShoppingCartOutlined, NotificationOutlined, DollarOutlined } from '@ant-design/icons';
import ProductCom from '../components/ProductCom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useLocation,
  useHistory
} from "react-router-dom";



const { Title } = Typography;
const { Header, Content, Sider } = Layout;


const ProductDetail = (props) => {
  const location = useLocation()
  let listpath = location.pathname.split('/')
  const id = listpath[listpath.length - 1]
  const [item, setItem] = useState({})
  const [items, setItems] = useState([])
  const [numItemCart, setNumItemCart] = useState(0)
  const cartAPI = "http://localhost:3000/cart"
  const productAPI = `http://localhost:3000/product/${id}`

  useLayoutEffect(() => {
    fetch(cartAPI)
      .then(res => res.json())
      .then(post => {
        setItems(post)
        let num = post.reduce((previousValue, currentValue) => (
          previousValue + currentValue.quantity
        ), 0)
        setNumItemCart(num)
      })
  }, [])
  useLayoutEffect(() => {
    fetch(productAPI)
      .then(res => res.json())
      .then(post => {
        setItem(post)
      })
  }, [])

  const handleAddToCart = (data, callback) => {
    setNumItemCart((prev) => prev + 1)
    var indexCart = -1
    for (var i = 0; i < items.length; i++) {
      if (data.id == items[i].id) {
        indexCart = i
        break
      }
    }

    if (indexCart != -1) {
      data.quantity = items[indexCart].quantity + 1
      setItems((prev) => (
        [
          ...items,
          items[indexCart].quantity = data.quantity
        ]
      ))
      var options = {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      fetch(`${cartAPI}/${id}`, options)
        .then((response) => response.json())
        .then(callback)
    }
    else {
      data.quantity = 1
      setItems((prev) => (
        [
          ...prev,
          data
        ]
      ))
      var options = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      fetch(cartAPI, options)
        .then((response) => response.json())
        .then(callback)
    }
  }
  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Breadcrumb style={{ margin: '16px 0', cursor: 'pointer' }}>
          <Link to={"/shop"}> <Breadcrumb.Item>Shop</Breadcrumb.Item></Link>
          <Breadcrumb.Item>Product</Breadcrumb.Item>
        </Breadcrumb>
        <Badge count={numItemCart} >
          <Link to='/cart'>
            <ShoppingCartOutlined style={{ padding: 3, fontSize: "30px" }} />
          </Link>
        </Badge>
      </div>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Space size={12}>
          <Image
            width={300}
            src={item.img}
          />
          <div>
            <Title level={2}>{item.title}</Title>
            <p width="500px">{item.description}</p>
            <Title >{item.price} VND</Title>
            <Rate value={item.rating} />
            <div style={{ marginTop: '10px' }}>
              <Space size={12}>
                <Button type="primary" icon={<DollarOutlined />} size="large" >Mua ngay</Button>
                <Button
                  style={{ backgroundColor: '#00FF19' }}
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  size="large"
                  onClick={() => handleAddToCart(item)}
                >Thêm vào rỏ hàng</Button>
              </Space>
            </div>
          </div>
          
        </Space>
        
      </Content>
    </Layout>
  )
}

export default ProductDetail