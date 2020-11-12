import { Card, Col, Row, Typography } from 'antd';

import CardProduct from '../components/CardProduct';

const ListCardItemsImage = () => {

  const { Title } = Typography;

  return (
    <>
      <Card style={{ marginBottom: 20 }}>
        <Row>
          <Col span={6}>
            <Title level={3}>Title</Title>
            <div>asd</div>
          </Col>
          <Col span={18}>
            <Row gutter={24}>
              {
                [...Array(4)].map((x, i) => (
                  <CardProduct
                    span={6}
                    bordered={true}
                    title={`Item ${i + 1}`}
                  />
                ))
              }
            </Row>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default ListCardItemsImage