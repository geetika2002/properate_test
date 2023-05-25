<template>
<br><br><br>
    <div class="container mx-auto p-6 bg-gray-200 flex items-center justify-center">
      <div class="flex items-start w-full max-w-2xl">
        <div class="w-full ">
          <h1 class="text-2xl font-bold mt-12 px-12">Inspiring Stories of Customer Successs</h1>
          <p class="px-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum magna in</p>
        </div>
        <div class="w-2/3 grid grid-cols-2 grid-rows-2 gap-2">
          <img src="/random2.png" alt="Image 1" class="w-full h-48 pt-12 object-cover row-span-2" />
          <img src="/random2.png" alt="Image 2" class="w-full h-24 object-cover" />
          <img src="/random2.png" alt="Image 3" class="w-full h-24 object-cover" />
          <img src="/random2.png" alt="Image 4" class="w-full h-24 object-cover col-span-2" />
        </div>
      </div>
    </div>
  
    <div class="container mx-auto mt-10">
      <h2 class="text-3xl font-bold mb-2">Case Studies</h2>
      <div class="w-full max-w-xs">
        <div class="relative">
          <input v-model="searchText"
            class="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="Search..." />
          <button class="absolute inset-y-0 right-0 px-3 flex items-center bg-blue-500 rounded-r text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
      </div>
  
     
      <div class="p-4 flex flex-wrap">
      <ContentList path="/blogs" v-slot="{ list }">
        <div v-for="blog in list" :key="blog.path" class="p-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <nuxt-link :to="blog.path">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img class="lg:h-48 md:h-36 w-full object-cover object-center" :src="blog.img" :alt="blog.alt">
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                <h1 class="title-font text-2xl font-bold text-gray-900 mb-3"><NuxtLink :to="blog._path">{{ blog.title }}</NuxtLink></h1>
                <!-- <h1 class="title-font text-2xl font-bold text-gray-900 mb-3">{{ blog.title }}</h1> -->
                <!-- <p class="leading-relaxed mb-3">{{ blog.description }}</p> -->
                <p class="mt-2">{{ formatDate(blog.date) }}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </ContentList>
    </div>
  
    </div>
  

    <div class="container mx-auto flex px-5 py-24 pb-1 pt-1 md:flex-row flex-col items-center bg-white shadow-lg">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Learn More
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact Us</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="/random1.jpg">
    </div>
  </div>
   

   <br><br>
  </template>
  
  <script>
  export default {
    methods: {
      formatDate(date) {
        // Format the date as 'Dec 22, 2022'
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
      }
    }
  };
  
  </script>
  
    
  <style scoped>
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
  </style>