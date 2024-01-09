import AppNav from '../components/AppNav'
import styles from './Home.module.scss'
import photo from '../images/caratunk-img1.png'
import photo15 from '../images/caratunk-img15.png'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <>
      <AppNav />
      <section className={styles.main}>
        <div className={styles.about}>
          <h2>Caratunk Contractors LLC</h2>
          <h3>Septic and Excavation Contractor</h3>
          <span>
            Septic Installation - Yard Grading - Campgrounds - Retaining Walls -
            Agricultural Excavation
          </span>
        </div>
        <div className={styles.infoPiece}>
          <h4>Septic Systems</h4>
          <div>
            <img src="https://www4.erie.gov/septicsmart/sites/www4.erie.gov.septicsmart/files/2022-06/conventional_septic_system-600x575.jpg"></img>
          </div>
        </div>
        <div className={styles.infoPiece}>
          <h4>Yard Reconstruction</h4>
          <div>
            <img src={photo15}></img>
          </div>
        </div>
        <div className={styles.infoPiece}>
          <h4>Retaining Walls</h4>
          <div>
            <img src={photo}></img>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Homepage
