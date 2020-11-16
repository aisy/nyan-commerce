import { Typography, Button, Row, Col } from 'antd';

import CardProduct from './CardProduct';

const ListCardItems = ({ title, data, link }) => {

  const { Title } = Typography;

  return (
    <div style={{ margin: "40px 0px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <Title level={4}>{title ? title : "Title"}</Title>
        <Button type={"primary"}>View All</Button>
      </div>

      <Row gutter={16}>
        {
          [...Array(6)].map((x, i) => (
            <Col span={4}>
              <CardProduct
                key={i}
                title={`Item ${i + 1}`}
              />
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default ListCardItems;