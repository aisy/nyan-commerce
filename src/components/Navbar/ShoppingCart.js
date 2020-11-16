import { Card, List, Avatar, Button } from 'antd'

const ShoppingCart = () => {

  const dataSample = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
  ];

  return (
    <Card style={{ width: 400 }}>
      <List
        itemLayout="horizontal"
        dataSource={dataSample}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
      <Button block shape={"round"} type={"primary"}>Check out</Button>
    </Card>
  )
}

export default ShoppingCart