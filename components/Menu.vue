
<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Your Website</h1>
        <p>Your catchphrase or description goes here.</p>
        <a href="#contact" class="btn">Contact Us</a>
      </div>
    </section>

    <!-- Image Section -->
    <section class="image-section">
      <div class="image-grid">
        <!-- Loop through 12 images -->
        <div v-for="image in imageList" :key="image.id" class="image-item">
          <img :src="image.url" :alt="image.alt" />
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="contact-form">
        <h2>Contact Us</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="formData.name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="formData.email" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="formData.message" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn">Submit</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      imageList: [
        // Add your image data here
      { id: 1, url: '/assets/images/blender.jpg', alt: 'Image 1' },
      { id: 2, url: '/images/image2.svg', alt: 'Image 2' },
      { id: 3, url: '/images/image3.svg', alt: 'Image 3' },
        // Repeat for the other 11 images
      ]
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here
      // You can use Axios or any other library to send the form data to a server
      console.log('Form submitted with data:', this.formData);
    }
  }
};
</script>

<style scoped>
/* Add your CSS styles here to style the sections, form, and images */
/* Example: */
.hero {
  background-image: url('hero-background.jpg');
  /* Add hero section styles */
}

.image-section {
  width: auto;
}

.contact-section {
  /* Add contact section styles */
}
</style>

