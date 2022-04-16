import React, { useState, useLayoutEffect } from 'react'
import { Image, Avatar, List, Card, Layout, Breadcrumb, Typography, Space, Rate, Badge, Button } from 'antd';
import { ShoppingCartOutlined, DollarOutlined, PlusOutlined } from '@ant-design/icons';
import CartItemCom from '../components/CartItemCom';

const { Header, Content, Sider } = Layout;
const { Text, Link, Title } = Typography;
const CartPage = () => {
    const [items, setItems] = useState([])
    const cartAPI = "http://localhost:3000/cart"
    const [total, setTotal] = useState(0)
    useLayoutEffect(() => {
        fetch(cartAPI)
            .then(response => response.json())
            .then(post => {
                setItems(post)
                let sum = post.reduce((pre, cur) => (pre+cur.price*cur.quantity)   
                ,0)
                setTotal(sum)
            })
    }, [total])

    const handleDelete = ()=> {

    }
    return (
        <Layout style={{ padding: '0 24px 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Breadcrumb style={{ margin: '16px 0', cursor: 'pointer' }}>
                    <Breadcrumb.Item>Cart</Breadcrumb.Item>

                </Breadcrumb>
                <Title level={5}>{items.length} items in bag</Title>
            </div>
            <List
                grid={{ gutter: 16, column: 1 }}
                itemLayout="horizontal"
                dataSource={items}
                renderItem={item => (
                    <List.Item>
                        <Card >
                            <CartItemCom item={item} callback={(data) => (setTotal(total+data))} />
                        </Card>
                    </List.Item>
                )}
            />
            <div style={{marginRight: '50px', display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ padding: '10px', display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>
                    <Title italic='true' level={4}>Sub Total</Title>
                    <Title italic='true' level={4}>Tax</Title>
                    <Title italic='true' level={4}>Total</Title>
                </div>
                <div style={{ padding: '10px', display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>
                    <Title level={4}>{total} VND</Title>
                    <Title level={4}>{total * 0.01} VND</Title>
                    <Title level={4}>{total*1.01} VND</Title>
                </div>
            </div>
        </Layout>
    )
}

export default CartPage