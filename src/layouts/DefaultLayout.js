import React from 'react';
import { Layout } from 'antd';

import Navbar from '../components/Navbar';

const DefaultLayout = ({ children }) => {
  return (
    <Layout>
      <Navbar />
      <div>
        {children}
      </div>
    </Layout>
  )
}

export default DefaultLayout
