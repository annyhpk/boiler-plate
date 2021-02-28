import React from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import RightMenu from './Sections/RightMenu';

function NavBar() {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home" icon={<MailOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="subscription" icon={<AppstoreOutlined />}>
        <Link to="/subscription">Subscription</Link>
      </Menu.Item>
      <RightMenu />
    </Menu>
  );
}

export default NavBar;
