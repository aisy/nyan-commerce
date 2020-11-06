import { Card, Typography, Col } from 'antd';

const CardProduct = ({ span, title, price, link }) => {

  const { Text, Title } = Typography;

  return (
    <Col span={span ? span : 4}>
      <Card
        bordered={false}
        hoverable
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        style={{ marginBottom: 20 }}
      >
        <div style={{ width: "100%" }}>
          <Title level={5}>{title ? title : "Judul"}</Title>
        </div>
        <div style={{ width: "100%" }}>
          <Text strong style={{ color: "green" }}>{price ? price : "Rp. 10000"}</Text>
        </div>
      </Card >
    </Col>
  )
}

export default CardProduct;