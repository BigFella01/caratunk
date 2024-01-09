import AppNav from '../components/AppNav'
import Footer from '../components/Footer'
import styles from './About.module.scss'

function Aboutpage() {
  return (
    <>
      <AppNav />
      <section className={styles.main}>
        <h2>Our Background</h2>
        <p>
          Caratunk Contractors LLC is an excavation company providing quality
          and professional work. We service campgrounds, mobile home parks,
          commercial, and residential excavation projects across New Hampshire.
          We are licensed and insured!
        </p>
        <p>
          Our previous experience in heavy civil and large commercial excavation
          has created our passion and expertise in excavation work. The lessons
          learned on these large utility, highway construction, and commercial
          building projects have created skill set that Caratunk Contractors
          applies on every job no matter how big or small.
        </p>
        <p className={styles.location}>
          Located out of Dover NH, we serve NH, and southern Maine.
        </p>
        <span>
          Did you know that Caratunk is an Algonquin word that means &quot;where
          the rivers meet&quot;?
        </span>
      </section>
      <Footer />
    </>
  )
}

export default Aboutpage
