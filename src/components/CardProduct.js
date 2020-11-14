import { Card, Typography, Col, Button, Tooltip } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

const CardProduct = ({ span, title, price, link, bordered }) => {

  const { Text, Title } = Typography;

  return (
    <Col span={span ? span : 4}>
      <Card
        bordered={bordered ? bordered : false}
        hoverable
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        style={{ marginBottom: 20 }}
      >
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
          <Title level={5}>{title ? title : "Title"}</Title>
          <Tooltip placement={"topRight"} title={"Add to wishlist"}>
            <Button shape={"circle"} size={"small"} icon={<HeartOutlined />} />
          </Tooltip>
        </div>
        <div style={{ width: "100%" }}>
          <Text strong style={{ color: "green" }}>{price ? price : "Rp. 10000"}</Text>
        </div>
      </Card >
    </Col>
  )
}

export default CardProduct;