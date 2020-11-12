import { Space, Typography, Button, Input, Badge, Dropdown, List, Avatar, Card, Menu } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import ShoppingCart from './ShoppingCart';

const Navbar = ({ isLogin = true }) => {

  const { Text } = Typography;
  const { Search } = Input;

  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
  ];



  const renderAccount = () => {
    return (
      <Menu style={{ padding: 12 }}>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
      </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
      </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
      </a>
        </Menu.Item>
        <Menu.Item danger>a danger item</Menu.Item>
      </Menu>
    )
  }

  const styles = {
    header: {
      backgroundColor: "#fff",
      boxShadow: "0 4px 6px -1px rgba(0,0,0,0.07)",
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      padding: "15px 100px",
    },
    headerContent: {
      display: "flex",
      justifyContent: "space-between"
    },
    headerTitle: {
      fontWeight: 700,
    }
  }

  return (
    <>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <Text style={styles.headerTitle}>Nyan Commerce</Text>
          <div style={{ width: 400 }}>
            <Search placeholder="Cari berdasarkan nama produk atau brand" onSearch={value => console.log(value)} enterButton />
          </div>
          <Space size={"large"}>
            <Text>Home</Text>
            <Text>Home</Text>
            <Text>Home</Text>
            <Dropdown overlay={ShoppingCart} placement={"bottomCenter"} overlayStyle={{ paddingTop: 20 }}>
              <Badge count={4} size={"small"}>
                <Button type={"primary"} shape={"circle"} icon={<ShoppingCartOutlined />} />
              </Badge>
            </Dropdown>
            {
              isLogin ?
                <Dropdown overlay={renderAccount} placement={"bottomCenter"} overlayStyle={{ paddingTop: 20 }}>
                  <Button type={"primary"} shape={"round"} icon={<UserOutlined />}>Aisy</Button>
                </Dropdown>
                :
                <Button type={"primary"} shape={"round"} icon={<UserOutlined />}>Akun</Button>
            }
          </Space>
        </div>
      </div>
    </>
  )
}

export default Navbar
