import { Card, Typography, Row, Col } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const ProductCategory = ({ title }) => {

  const { Title, Text } = Typography

  return (
    <div style={{ margin: "10px 0px" }}>
      <div style={{ width: "100%", marginBottom: 20 }}>
        <Title level={4}>
          {title ? title : "Product Category"}
        </Title>
      </div>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          {
            [ ...Array(5) ].map((x, i) => (
              <Col span={3} key={i}>
                <Card
                  hoverable
                  bordered={false}
                  style={{ textAlign: "center", borderRadius: 20 }}
                >
                  <div style={{ width: "100%", marginBottom: 5 }}>
                    <HomeOutlined style={{ fontSize: 40, color: "#096dd9" }} />
                  </div>
                  <Text type={"secondary"}>
                    Category {i + 1}
                  </Text>
                </Card>
              </Col>
            ))
          }
        </Row>
      </div>
    </div>
  )
}

export default ProductCategory