import DefaultLayout from '../layouts/DefaultLayout';

import CarouselPromo from '../components/Home/CarouselPromo';
import ProductCategory from '../components/Home/ProductCategory';
import FlashSale from '../components/Home/FlashSale';
import ListCardItems from '../components/ListCardItems';
import ListCardItemsImage from '../components/ListCardItemsImage';

const HomePage = () => {
  return (
    <DefaultLayout>
      <CarouselPromo />

      <div style={{ paddingLeft: 120, paddingRight: 120 }}>
        <ProductCategory />
        <FlashSale />
        <ListCardItems />
        <ListCardItemsImage />
      </div>
    </DefaultLayout>
  )
}

export default HomePage
