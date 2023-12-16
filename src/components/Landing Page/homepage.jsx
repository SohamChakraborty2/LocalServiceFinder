import styles from '../../styles/Landing Page/homepage.module.css'
import LandingPageimg from '../../assets/landing-page-img.jpg'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <section id='home' className={styles.section}>

            <div className={styles.left}>
                <h1 className={styles.h1}>Local <br /> Service Finder</h1>
                <p className={styles.p}>Connecting users with trusted local services in their area, offering a convenient platform to discover, hire, and rate services such as plumbers, electricians, and more, fostering a seamless and reliable community connection.</p>
                <button><Link to='signup'>Get Started</Link></button>
            </div>
            <div className={styles.right}>
                <img src={LandingPageimg} alt="" className={styles.img} />
            </div>

        </section>
    )
}

export default HomePage