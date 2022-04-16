import React from 'react';
import ReactDOM from 'react-dom';
import '../index';
import { Layout, Menu, Image, Typography,Avatar } from 'antd';
import { ShopOutlined,  } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Title } = Typography;


const HeaderCom = () => {
    return (
        <Header style={{ backgroundColor: '#C6E5F4' }} className="header">
            <div style={{ display: 'flex',justifyContent: 'space-between'}} >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                        width={50}
                        src="https://s3-alpha-sig.figma.com/img/b6e8/93c4/d34c78218f2e618bae4d316ce9b46881?Expires=1650844800&Signature=gHq~QvV3RIgG~XPjycMoCM2ifK8fkWPBFPQUJX~JtnqScIA7W-n~gA8z3HoU73aflAiURKL5UdB7SoSzHyCOXcx5g0il6TegoHs2j2SFa59-vDcfyFPdQk5cqBnEWwKiFL553ivihfqMf1LiC8CEx7E7H2aE5pqZzieFLFint1ztTy2qPcqvspghAVqDQskGAeQAVK4ATOB3-HNyZlnBdtMdZHIX1iwRCV-EfKdFr78pbGTNNhJkoqWzcXmSGDU15VQH7p04XI11ShYVDXi0jfwwh7cvp0qe9MOLWjNoztOcZRULkD8zHmjQRv9wJySLDdGmRlESgQNyAafgLOXzjw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    />
                    <Title style={{ margin: "5px 0px 0px 30px" }} level={2}>Mobile Shopping</Title>
                </div>
                <div>
                <Avatar size={40} src="https://s3-alpha-sig.figma.com/img/fa77/2ed1/10e7ea98f927884bc61c118fc3fd77a8?Expires=1650844800&Signature=evzd5NYE~eIZcs15W8NaGLrbuvSOUMkk4Ek8XQWa4lrqXDijfeLSW5tBp-gRpBnrUj7bFqRPyE9~M1b9U5YJ3d3BG9dKgQQe7nK6KcWAdQViCwdDD5DPM~8KenreVs8W66pFq~ee0M8wiCy7X0sWnJtCbUy4GtJIxn-C18OyDYkCUuRwQp2i9bVqKNnX8oqA2uJr8pZz-DO38wTHR5vtSD5iJbisyigrHl4gn~Wi3QhWu3NcRh61y9JLBIKrfITWC7d6z-pwibl3WDwtPVrI2TnNMS~oz3wh61oBnbc4P95o1XpK0wytDvxZvy6mr8CKTKutTUxTWNnzyOMhWTCrzg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />

                </div>
            </div>
        </Header>
    )
}

export default HeaderCom