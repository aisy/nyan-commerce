import { Layout } from 'antd';

import Navbar from '../components/Navbar/index';

const styles = {
  containerLayout: {
    marginTop: 60,
    // padding: 100,
  }
}

const DefaultLayout = ({ children }) => {
  return (
    <Layout>
      <Navbar />
      <div style={styles.containerLayout}>
        {children}
      </div>
    </Layout>
  )
}

export default DefaultLayout
