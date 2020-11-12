import { Carousel } from 'antd'

const CarouselPromo = () => {

  const styles = {
    sliderImage: {
      height: '360px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#364d79',
    }
  }

  return (
    <Carousel autoplay>
      <div>
        <h3 style={styles.sliderImage}>1</h3>
      </div>
      <div>
        <h3 style={styles.sliderImage}>2</h3>
      </div>
      <div>
        <h3 style={styles.sliderImage}>3</h3>
      </div>
      <div>
        <h3 style={styles.sliderImage}>4</h3>
      </div>
    </Carousel>
  )
}

export default CarouselPromo
