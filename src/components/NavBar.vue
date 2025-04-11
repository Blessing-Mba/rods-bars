<template>
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
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    data() {
      return {
        isMenuOpen: false,
        isScrolled: false
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
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
  </script>