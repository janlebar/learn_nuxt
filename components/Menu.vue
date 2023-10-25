


    

    <!-- Contact Section -->
    <!-- <section id="contact" class="contact-section p-12">
      <div class="contact-form max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center">Contact Us</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name" class="text-gray-700">Name</label>
            <input type="text" id="name" v-model="formData.name" required class="w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          <div class="form-group">
            <label for="email" class="text-gray-700">Email</label>
            <input type="email" id="email" v-model="formData.email" required class="w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          <div class="form-group">
            <label for="message" class="text-gray-700">Message</label>
            <textarea id="message" v-model="formData.message" rows="4" required class="w-full p-2 border border-gray-300 rounded-lg"></textarea>
          </div>
          <button type="submit" class="btn bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out w-full mt-4">Submit</button>
        </form>
      </div>
    </section> -->












<template>
  <div>
    <!-- Hero Section -->
    <section class="hero custom-red-background p-12">
      <div class="hero-content text-center">
        <h1 class="text-3xl sm:text-5xl font-bold text-blue-600">Welcome to Your Website</h1>
        <p class="text-lg sm:text-xl text-gray-600 mt-4">Your catchphrase or description goes here.</p>
        <a href="#contact" class="btn inline-block mt-6 py-2 px-4 bg-indigo-500 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300 ease-in-out">Contact Us</a>
      </div>

      <div class="flex justify-center sm:flex-block">
        <a
          download="Stoman-Resume.pdf"
          href="/files/JanLebarCV.pdf"
          class="w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-300 flex items-center justify-center"
          aria-label="Download Resume"
        >
          <i data-feather="arrow-down-circle" class="w-5 sm:w-6 mr-2 sm:mr-3 duration-100"></i>
          <span class="text-sm sm:text-lg font-general-medium duration-100">Download CV</span>
        </a>
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
        { id: 1, url: 'image1.jpg', alt: 'Image 1' },
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
  /* Add image section styles */
}

.contact-section {
  /* Add contact section styles */
}
</style>