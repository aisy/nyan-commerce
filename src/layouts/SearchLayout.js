import { Layout } from 'antd';

import Navbar from '../components/Navbar/index';

const SearchLayout = ({ children }) => {
  return (
    <Layout>
      <Navbar />
      <div style={{ padding: "0px 100px" }}>
        {children}
      </div>
    </Layout>
  );
}

export default SearchLayout
