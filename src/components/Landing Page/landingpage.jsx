import HomePage from "./homepage"
import styles from '../../styles/Landing Page/header.module.css'
import searchIcon from '../../assets/search-icon.png'
import hireIcon from '../../assets/hire-icon.png'
import connectIcon from '../../assets/connect-icon.png'
import emailIcon from '../../assets/email-icon.png'
import twitterIcon from '../../assets/twitter-icon.png'
import linkedinIcon from '../../assets/linkedin-icon.png'
import { Link } from 'react-router-dom'
import '../../styles/Landing Page/landingpage.css'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <h3>Local Service Finder</h3>
                <span><a href="#home">Home</a></span>
                <span><a href="#features">Features</a></span>
                <span><a href="#about">About</a></span>
                <span><a href="#contact">Contact</a></span>
            </div>
            <div className={styles.right}>
                <button><Link to='login'>Login</Link></button>
                <button><Link to='signup'>Register</Link></button>
            </div>
        </header>
    )
}
function Features() {
    return (
        <section id="features">
            <h2>How it works?</h2>
            <div><img src={searchIcon} alt="" /><span>Find local talent and services in your neighbourhood</span></div>
            <div><img src={connectIcon} alt="" /><span>Connect with local service providers and explore options</span></div>
            <div><img src={hireIcon} alt="" /><span>Hire service providers after discussing terms of service</span></div>
        </section>
    )
}
function About() {
    return (
        <section id='about'>
            <h1>Why it matters?</h1>
            <p>In today's fast-paced world, the search for reliable local services has become increasingly vital yet often presents a challenging ordeal. The <u>Local Service Finder</u> projects steps in as the answer to this predicament, offering an accessible digital platform that simplifies the process of discovering and connection with local service providers.
                <br />In the past, seeking out professionals for various tasks, from home repairs to specialized services, often meant relying on word-of-mouth recommendations leaving individuals uncertain about the quality and dependability of the services they'd receive. <br /> Our platform seeks to transform this experience by creating a centralized hub where individuals and businesses can seamlessly find, asses and engage with trusted local service experts.</p>
        </section>
    )
}
function Contact() {
    return (
        <section id="contact">
            <h1>Contact Us</h1>
            <div className="wrapper">
                <div><img src={emailIcon} alt="email" /><span>someone@gmail.comn</span></div>
                <div><img src={twitterIcon} alt="twitter" /><span>@twitterhandle</span></div>
                <div><img src={linkedinIcon} alt="linkedIn" /><span>@linkedInhandle</span></div>
            </div>
        </section>
    )
}
function LandingPage() {
    return (
        <>
            <Header />
            <HomePage />
            <Features />
            <About />
            <Contact />
        </>
    )
}

export default LandingPage