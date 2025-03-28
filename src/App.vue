<template>
  <div id="app">
    <nav class="navbar">
      <div class="logo">
        <img src="@/assets/Rods-logo.png" alt="Rods and Bars Logo">
      </div>
      <div class="menu-toggle" @click="toggleMenu">
        <i class="fas" :class="{ 'fa-bars': !isMenuOpen, 'fa-times': isMenuOpen }"></i>
      </div>
      <div class="nav-links" :class="{ 'active': isMenuOpen }">
        <a href="#home" @click="closeMenu">Home</a>
        <a href="#about" @click="closeMenu">About</a>
        <a href="#services" @click="closeMenu">Services</a>
        <a href="#projects" @click="closeMenu">Projects</a>
        <a href="#contact" @click="closeMenu">Contact</a>
      </div>
    </nav>

    <section id="home" class="hero animate-section">
      <div class="hero-content left">
        <h1>Expert Engineering and Innovative Solutions</h1>
        <p class="sub-text">We handle simple and complex contructions. We pride ourselves with top notch aesthetic finisishing that would stand the test of time</p>
        <a href="#contact" class="cta-button">Get Started</a>
      </div>
    </section>

    <section id="about" class="about animate-section">
      <div class="container">
        <h2>About Us</h2>
        <div class="about-content">
          <div class="about-text">
            <p>With over 6 years of experience, Rods & Bars has been at the forefront of delivering exceptional construction services. Our commitment to quality, safety, and customer satisfaction sets us apart in the industry.</p>
            <div class="about-image-grid">
              <img src="@/assets/IMG-20250318-WA0064.jpg" alt="Construction Site 1">
              <img src="@/assets/IMG-20250318-WA0065.jpg" alt="Construction Site 2">
            </div>
          </div>
          <div class="about-stats">
            <div class="stat">
              <h3>6+</h3>
              <p>Years Experience</p>
            </div>
            <div class="stat">
              <h3>87+</h3>
              <p>Clients</p>
            </div>
            <div class="stat">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="services animate-section">
      <div class="container">
        <h2 class="animate-item">WHAT WE DO</h2>
        <div class="services-grid">
          <div class="service-card animate-item" v-for="(service, index) in services" :key="index">
            <div class="service-bar"></div>
            <i :class="service.icon"></i>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="projects animate-section">
      <h2 class="animate-item">Our Projects</h2>
      <div class="projects-grid">
        <div class="project-card animate-item" v-for="(project, index) in projects" :key="index">
          <img :src="project.image" :alt="project.title">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </section>

    <section id="ceo-message" class="ceo-message animate-section">
      <div class="ceo-container">
        <div class="ceo-content">
          <h2>A Message From Our CEO</h2>
          <div class="ceo-quote">
            <i class="fas fa-quote-left quote-icon"></i>
            <p>At Rods & Bars, we believe in building more than just structures 
              – we're building lasting relationships and communities.
               Our team spirit, dream-delivery synchronization and prompt conveyance make us stand out
              in the frontlines;</p>
              <br>
              <p>Truly <b>giving strength to your will !</b></p>
            <div class="ceo-signature">
              <h4>Obi Chinweotito</h4>
              <p>Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact animate-section">
      <div class="contact-container">
        <div class="contact-wrapper">
          <h2>Ready to Start Your Project?</h2>
          <a href="mailto: rodsnbars@gmail.com" class="cta-button work-with-us-btn">
            <i class="fas fa-envelope"></i> Email Us
          </a>
        </div>
        <div class="contact-info">
          <h3>Get in Touch</h3>
          <p><i class="fas fa-map-marker-alt"></i> Gwarinpa, Abuja, Nigeria</p>
          <p><i class="fas fa-phone"></i> +234 901 458 1204</p>
          <p><i class="fas fa-envelope"></i> rodsnbars@gmail.com</p>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Rods & Bars Ltd</h4>
          <p>Building excellence since 2019</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div class="footer-section">
          <h4>Follow Us</h4>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/rodsnbars/"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Rods & Bars Ltd. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false,
      services: [
        {
          icon: 'fas fa-drafting-compass',
          title: 'Structural Engineering',
          description: 'Expert structural engineering services ensuring safety, stability, and compliance with building codes.'
        },
        {
          icon: 'fas fa-hammer',
          title: 'Woodwork',
          description: 'High-quality woodworking services for both residential and commercial projects.'
        },
        {
          icon: 'fas fa-building',
          title: 'Space Management',
          description: 'Efficient space planning and management solutions to maximize property utilization.'
        },
        {
          icon: 'fas fa-city',
          title: 'Real Estate Development',
          description: 'Comprehensive real estate development services from planning to execution.'
        },
        {
          icon: 'fas fa-hard-hat',
          title: 'General Contracting',
          description: 'Full-service general contracting for construction projects of all sizes.'
        }
      ],
      projects: [
        {
          image: require('@/assets/IMG-20250318-WA0053.jpg'),
          title: 'Modern Office Complex',
          description: 'Downtown commercial development'
        },
        {
          image: require('@/assets/IMG-20250318-WA0058.jpg'),
          title: 'Luxury Home',
          description: 'Custom residential construction'
        },
        {
          image: require('@/assets/IMG-20250318-WA0056.jpg'),
          title: 'Historic Renovation',
          description: 'Heritage building restoration'
        },
        {
          image: require('@/assets/IMG-20250318-WA0071.jpg'),
          title: 'Industrial Complex',
          description: 'State-of-the-art manufacturing facility'
        },
        {
          image: require('@/assets/IMG-20250318-WA0073.jpg'),
          title: 'Retail Center',
          description: 'Modern shopping complex'
        },
        {
          image: require('@/assets/IMG-20250318-WA0069.jpg'),
          title: 'Residential Development',
          description: 'Multi-unit housing project'
        }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    },
    closeMenu() {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    },
    initAnimations() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('animate-section')) {
              entry.target.classList.add('animate-visible');
              // Animate items within the section
              const items = entry.target.querySelectorAll('.animate-item');
              items.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('animate-visible');
                }, index * 200); // Stagger the animations
              });
            }
            observer.unobserve(entry.target);
          }
        });
      }, options);

      // Observe all sections and items
      document.querySelectorAll('.animate-section').forEach(section => {
        observer.observe(section);
      });
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
      const navbar = document.querySelector('.navbar');
      if (this.isScrolled) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  },
  mounted() {
    this.initAnimations();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

/* Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
}

/* Variables */
:root {
  --primary-color: #4B0082;
  --secondary-color: #663399;
  --accent-color: #2c3e50;
  --light-bg: #f9f9f9;
  --dark-bg: #1a1a1a;
}

/* Typography */
html, body {
  overflow-x: hidden;
  width: 100%;
  position: relative;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f9fa;
  scroll-behavior: smooth;
  scrollbar-gutter: stable;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  line-height: 1.3;
  word-wrap: break-word;
}

.hero-content h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-content p {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  font-weight: 300;
  margin-bottom: 2rem;
  opacity: 0.9;
}

/* Layout */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Section Styles */
section {
  padding: 6rem 1rem;
  overflow: hidden;
  padding-top: calc(5rem + 60px);
  margin-top: -60px;
}

section h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: black;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
}

section h2:after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #FF0000;
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  padding: 0.8rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(75, 0, 130, 0.1);
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(75, 0, 130, 0.97);
  padding: 0.6rem 5%;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.navbar.scrolled .nav-links a {
  color: white;
}

.navbar.scrolled .nav-links a:hover {
  color: rgba(255, 255, 255, 0.9);
}

.navbar.scrolled .menu-toggle {
  color: white;
}

.logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1002;
}

.logo img {
  height: 50px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.logo:after {
  content: '';
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 30px;
  background: linear-gradient(to bottom, transparent, var(--primary-color), transparent);
}

.nav-links {
  display: flex;
  align-items: center;
  margin-left: auto;
  padding-right: 50px;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--accent-color);
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  padding: 0.5rem 0;
}

.nav-links a:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  transition: width 0.3s ease;
}

.nav-links a:hover:after {
  width: 100%;
}

.menu-toggle {
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--accent-color);
  z-index: 1002;
  transition: all 0.3s ease;
  background: none;
  border: none;
  padding: 0.5rem;
}

/* Mobile Menu */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
    position: fixed;
    right: 5%;
    z-index: 1002;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: rgba(75, 0, 130, 0.97);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;
    padding: 2rem;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .nav-links.active {
    right: 0;
  }

  .nav-links a {
    margin: 1rem 0;
    font-size: 1.2rem;
    color: white;
  }

  .nav-links a:after {
    background: white;
  }

  .logo:after {
    display: none;
  }

  .logo img {
    height: 40px;
  }

  section {
    padding-top: calc(4rem + 100px);
    margin-top: -100px;
  }
}

/* iOS Safari Fix */
@supports (-webkit-touch-callout: none) {
  .nav-links,
  .hero {
    height: -webkit-fill-available;
  }
}

/* Animations */
.animate-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.animate-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Hero Section */
.hero {
  min-height: 100vh;
  position: relative;
  background: url('@/assets/hero.jpg') no-repeat 120% center;
  background-size: 65% auto;
  display: grid;
  grid-template-columns: 45% 55%;
  align-items: center;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 65%;
  height: 100%;
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 15%);
  z-index: 1;
}

.hero-content.left {
  padding: 0 4rem;
  text-align: left;
  z-index: 2;
}

.hero-content.left h1 {
  display: block;
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.2;
}

.hero-content.left p {
  font-size: 1.5rem;
  color: #5d6d7e;
  margin-bottom: 2rem;
  font-weight: 400;
}

.hero-content.left .sub-text {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-weight: 400;
  line-height: 1.6;
  max-width: 450px;
}

.hero-content.left .cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: #FF0000;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.hero-content.left .cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
}

@media (max-width: 992px) {
  .hero {
    grid-template-columns: 1fr;
    background-size: cover;
    background-position: right -100px center;
    text-align: center;
  }

  .hero::before {
    width: 100%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8));
  }

  .hero-content.left {
    padding: 2rem;
    text-align: center;
  }

  .hero-content.left .sub-text {
    margin: 0 auto;
    max-width: 600px;
  }
}

/* About Section */
.about {
  background-color: #f9f9f9;
  position: relative;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.about.animate-visible .about-content {
  opacity: 1;
  transform: translateY(0);
}

.about-image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}

.about-image-grid img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.about-image-grid img:hover {
  transform: scale(1.05);
}

/* Services Section */
.services {
  background-color: #fafafa;
  position: relative;
  padding: 4rem 2rem;
}

.services h2 {
  color: #2c3e50;
  margin-bottom: 4rem;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background: white;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  border: 1px solid #eef2f7;
}

.service-bar {
  position: absolute;
  left: 0;
  top: 0;
  height: 4px;
  width: 100%;
  background: #FF0000;
  border-radius: 12px 12px 0 0;
}

.service-card i {
  font-size: 2.5rem;
  color: grey;
  margin: 1rem 0;
}

.service-card h3 {
  color: #2c3e50;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.3;
}

.service-card p {
  color: #5d6d7e;
  font-size: 0.95rem;
  line-height: 1.6;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  border-color: rgba(75, 0, 130, 0.97);
}

@media (max-width: 992px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 576px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .service-card {
    padding: 1.5rem;
  }
}

/* Projects Section */
.projects {
  background-color: #f9f9f9;
  position: relative;
}

.project-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(20px);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(75, 0, 130, 0.15);
  border-top: 3px solid var(--primary-color);
}

.project-card img {
  height: 300px;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.project-card:hover img {
  transform: scale(1.05);
}

.project-card h3 {
  font-size: 1.3rem;
  margin: 1rem;
  color: #2c3e50;
}

.project-card p {
  margin: 0 1rem 1rem;
  color: #666;
  font-size: 0.95rem;
}

/* CEO Message Section */
.ceo-message {
  background-color: #f9f9f9;
  position: relative;
}

.ceo-container {
  max-width: 900px;
  margin: 0 auto;
}

.ceo-content {
  text-align: center;
  padding: 2rem;
}

.ceo-quote {
  margin-top: 2rem;
  position: relative;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid var(--primary-color);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.ceo-message.animate-visible .ceo-quote {
  opacity: 1;
  transform: translateY(0);
}

.quote-icon {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.ceo-quote p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-style: italic;
}

.ceo-signature {
  margin-top: 2rem;
  text-align: right;
}

.ceo-signature h4 {
  color: #2c3e50;
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
}

.ceo-signature p {
  color: #666;
  font-style: normal;
  font-size: 1rem;
}

/* Contact Section */
.contact {
  background: linear-gradient(45deg, rgba(44, 62, 80, 0.95), rgba(75, 0, 130, 0.9)), url('@/assets/IMG-20250318-WA0071.jpg') no-repeat center center;
  background-size: cover;
  color: white;
  text-align: center;
  padding: 6rem 1rem;
}

.contact-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  align-items: center;
}

.contact-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.work-with-us-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: white;
  text-decoration: none;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.work-with-us-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(75, 0, 130, 0.3);
}

.work-with-us-btn i {
  font-size: 1.2rem;
}

.contact-info {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-info h3 {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 1rem;
}

.contact-info h3:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
}

.contact-info p {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin: 1.2rem 0;
  font-size: 1rem;
}

.contact-info i {
  font-size: 1.2rem;
  color: var(--primary-color);
}

/* Footer */
.footer {
  background: whitesmoke;
  color: black;
  padding: 5rem 5% 2rem;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer h4 {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 1rem;
}

.footer h4:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: whitesmoke;
}

.footer-section a {
  color: #999;
  text-decoration: none;
  margin: 0.5rem 0;
  transition: color 0.3s ease;
  display: block;
}

.footer-section a:hover {
  color: var(--primary-color);
}

.social-links a {
  font-size: 1.5rem;
  margin-right: 1.5rem;
  transition: all 0.3s ease;
}

.social-links a:hover {
  color: var(--primary-color);
  transform: translateY(-3px);
}

/* Grid Systems */
.services-grid,
.projects-grid,
.about-stats {
  display: grid;
  gap: 1.5rem;
  width: 100%;
}

.services-grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.projects-grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

/* Responsive Design */
@media (max-width: 1200px) {
  .services-grid,
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  section {
    padding: 4rem 3%;
  }
}

@media (max-width: 992px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .contact-container {
    grid-template-columns: 1fr;
  }

  .about-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem 5%;
  }

  .hero-content {
    padding: 0 1rem;
  }

  .contact-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .contact-info {
    padding: 1.5rem;
  }
  
  .work-with-us-btn {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .about-stats,
  .footer-content {
    grid-template-columns: 1fr;
  }

  .service-card,
  .project-card {
    margin: 0 auto;
    max-width: 100%;
  }

  .social-links {
    justify-content: center;
  }
}

/* Accessibility */
@media (hover: none) and (pointer: coarse) {
  .nav-links a,
  .cta-button,
  .submit-button,
  .service-card,
  .social-links a {
    min-height: 44px;
    min-width: 44px;
    padding: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

/* Prevent iOS zoom */
input, textarea, button {
  font-size: 16px;
}

/* Transitions */
a, button, .service-card, .project-card {
  transition: all 0.3s ease;
}

@media (hover: hover) {
  .nav-links a:hover,
  .cta-button:hover,
  .submit-button:hover,
  .service-card:hover {
    transform: translateY(-5px);
  }
}

/* Buttons */
.cta-button,
.submit-button {
  width: fit-content;
  margin: 0 auto;
  display: inline-block;
  padding: clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem);
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
}

/* Content Overflow Prevention */
.service-card,
.project-card,
.stat,
.ceo-quote {
  overflow: hidden;
  word-wrap: break-word;
}
</style>

