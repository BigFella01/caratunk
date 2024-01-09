import AppNav from '../components/AppNav'
import Footer from '../components/Footer'
import styles from './Contact.module.scss'

function Contactpage() {
  return (
    <>
      <AppNav />
      <section className={styles.main}>
        <h3 className={styles.title}>Hours & Appointments</h3>
        <div className={styles.contactInfo}>
          <strong>
            Call to book an estimate: <span>978-494-3456</span>
          </strong>
          <br></br>
          <strong>
            Email: <span>Caratunkcontractors@gmail.com</span>
          </strong>
          <p>Monday through Saturday 9AM-5PM</p>
        </div>
        <div className={styles.map}>
          <strong>Service Area</strong>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93189.9011802499!2d-70.99580132369822!3d43.12165208721067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e293823121d2fb%3A0xb98b6315035d65fd!2sDurham%2C%20NH%2003824!5e0!3m2!1sen!2sus!4v1704644605552!5m2!1sen!2sus"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contactpage
