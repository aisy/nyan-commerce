import { Typography, Button, Row } from 'antd';

import CardProduct from '../../components/CardProduct';

const FlashSale = () => {

  const { Title } = Typography;

  return (
    <div style={{ padding: "0px 100px", margin: "40px 0px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <Title level={4}>Flash Sale</Title>
        <Button type={"primary"}>View All</Button>
      </div>

      <Row gutter={16}>
        {
          [ ...Array(6) ].map((x, i) => (
            <CardProduct />
          ))
        }
      </Row>
    </div>
  )
}

export default FlashSale;