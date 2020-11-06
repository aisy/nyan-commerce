import DefaultLayout from '../layouts/DefaultLayout';

import CarouselPromo from '../components/Home/CarouselPromo';
import ProductCategory from '../components/Home/ProductCategory';
import FlashSale from '../components/Home/FlashSale';

const HomePage = () => {
  return (
    <DefaultLayout>
      <CarouselPromo />
      <ProductCategory />
      <FlashSale />
    </DefaultLayout>
  )
}

export default HomePage
