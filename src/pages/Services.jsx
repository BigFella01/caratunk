import AppNav from '../components/AppNav'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Services.module.scss'
// import BsAccordion from '../components/BsAccordion'
import { Accordion } from 'react-bootstrap'

function Servicespage() {
  return (
    <>
      <AppNav />
      <section className={styles.main}>
        <h2 className={styles.title}>Services</h2>
        <section className={styles.accordions}>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Septic Sytems</Accordion.Header>
              <Accordion.Body className={styles.contentContainer}>
                <p>
                  As a New Hampshire licensed septic installer Caratunk
                  Contractors can get your septic up and running. Whether you
                  are a home owner with a failed system or a campground looking
                  to double its capacity, we will guide you through the process
                  of design, permits, construction, and inspections to get your
                  septic system operational.{' '}
                </p>
                <p>Stone and Pipe</p>
                <p>Enviro Septics</p>
                <p>Eljen Septics</p>
                <p>Effluent Pumps and Gravity Systems</p>
                <p>Grease Traps</p>
                <strong>Septic Repairs</strong>
                <br></br>
                <p>Septic Tank Replacement</p>
                <p>Leach Field Replacement</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Yard Reconstruction</Accordion.Header>
              <Accordion.Body className={styles.contentContainer}>
                <strong>Pool Demo</strong>
                <br></br>
                <strong>Yard Grading</strong>
                <br></br>
                <strong>Drainage</strong>
                <br></br>
                <p>Drainage Recharge Systems</p>
                <p>Underdrain</p>
                <p>Culverts</p>
                <strong>Gravel Driveways and Parking</strong>
                <br></br>
                <strong>Minor Site Cleanup and Clearing</strong>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Parking Lots</Accordion.Header>
              <Accordion.Body className={styles.contentContainer}>
                <strong>Grading</strong>
                <br></br>
                <strong>Drainage</strong>
                <br></br>
                <p>Drainage Recharge Systems</p>
                <p>Catch Basins</p>
                <p>Under Drain</p>
                <strong>Site Lighting</strong>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Retaining Walls</Accordion.Header>
              <Accordion.Body className={styles.contentContainer}>
                <strong>Small Precast Retaining Walls</strong>
                <br></br>
                <strong>Large Precast Retaining Walls</strong>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>
      </section>
      <Footer />
    </>
  )
}

export default Servicespage
