import React from 'react';
import { Layout, Menu } from 'antd';
import {
  BarChartOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import axios from 'axios';

const { Sider } = Layout;

function NavBar() {

    const onClickHandler = () => {
        axios.get('/api/users/logout')
            .then(response => {
                if(response.data.success) {
                    props.history.push('/login');
                } else {
                    alert('Failed to logout');
                }
            });
    };

    return (
        <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="logo"
        style={{
            marginLeft: '30%',
            marginTop: '5%'
        }}
        >
            <h2 
            style={{
                color: 'white'
            }}
            >- Logo -</h2>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <UserOutlined />
            <span className="nav-text" onClick={onClickHandler}>Logout</span>
          </Menu.Item>
          <Menu.Item key="2">
            <VideoCameraOutlined />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <UploadOutlined />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <BarChartOutlined />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
};

export default NavBar;
