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
  // Fix: Change beforeDestroy to beforeUnmount
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
@import '../style.css';

/* Fix: Use require for background images */
.hero {
  background: url('~@/assets/hero.jpg') no-repeat 120% center;
}

/* Fix: Use require for background images */
.contact {
  background: linear-gradient(45deg, rgba(44, 62, 80, 0.95), rgba(75, 0, 130, 0.9)), url('~@/assets/IMG-20250318-WA0071.jpg') no-repeat center center;
}

/* Update navigation font */
.nav-links a {
  font-family: var(--general-sans-medium);
  font-weight: 400;
}
</style>