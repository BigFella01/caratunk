import AppNav from '../components/AppNav'
import Footer from '../components/Footer'
import styles from './Photos.module.scss'

import photo from '../images/caratunk-img1.png'
import photo2 from '../images/caratunk-img2.jpg'
import photo3 from '../images/caratunk-img3.jpg'
import photo4 from '../images/caratunk-img4.jpg'
import photo5 from '../images/caratunk-img5.jpg'
import photo7 from '../images/caratunk-img7.jpg'
import photo8 from '../images/caratunk-img8.png'
import photo10 from '../images/caratunk-img10.png'
import photo11 from '../images/caratunk-img11.png'
import photo15 from '../images/caratunk-img15.png'

function Photos() {
  return (
    <>
      <AppNav />
      <section className={styles.photoContainer}>
        <h2 className={styles.title}>Photos</h2>
        <img src={photo}></img>
        <img src={photo2}></img>
        <img src={photo3}></img>
        <img src={photo4}></img>
        <img src={photo5}></img>
        <img src={photo7}></img>
        <img src={photo8}></img>
        <img src={photo10}></img>
        <img src={photo11}></img>
        <img src={photo15}></img>
      </section>
      <Footer />
    </>
  )
}

export default Photos
