export default {
    methods: {
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
      }
    },
    mounted() {
      this.initAnimations();
    }
  }