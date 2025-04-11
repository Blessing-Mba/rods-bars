<template>
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
  </template>
  
  <script>
  export default {
    name: 'ServicesSection',
    data() {
      return {
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
        ]
      }
    }
  }
  </script>