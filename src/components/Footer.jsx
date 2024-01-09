import facebookPNG from '../images/facebook.png'
import instagramPNG from '../images/instagram.png'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          Call to book an estimate: <span>978-494-3456</span>
        </p>
        <p>
          Email us at <span>Caratunkcontractors@gmail.com</span>
        </p>
      </div>
      <div className={styles.icons}>
        <a
          href="https://www.facebook.com/people/Caratunk-Contractors/61550600411175/"
          target="_blank"
          rel="noreferrer"
        >
          <img className={styles.img} src={facebookPNG}></img>
        </a>
        <a
          href="https://www.instagram.com/caratunk_contractors?igsh=Ym9wbHAzY245NG1w"
          target="_blank"
          rel="noreferrer"
        >
          <img className={styles.img} src={instagramPNG}></img>
        </a>
      </div>
    </footer>
  )
}

export default Footer
