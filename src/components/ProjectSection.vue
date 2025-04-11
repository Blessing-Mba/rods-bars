<template>
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
  </template>
  
  <script>
  export default {
    name: 'ProjectsSection',
    data() {
      return {
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
    }
  }
  </script>