<template>
    <header class="bg-blue-500 p-4">
      <nav class="container mx-auto flex items-center justify-between">
        <div class="text-white text-2xl font-bold">My Nuxt App</div>
        <ul class="flex space-x-4">
          <li><a class="text-white hover:text-blue-300" href="/">Home</a></li>
          <li><a class="text-white hover:text-blue-300" href="/about">About</a></li>
          <li><a class="text-white hover:text-blue-300" href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>

  </template>
  
  <script>
  export default {
    name: 'Header',
  }
  </script>