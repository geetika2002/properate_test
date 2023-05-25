<template>
  <head class="flex justify-center">
    <header class="container ml-30 mr-30 mb-0 text-gray-800 text-left bg-gray-100">
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/@heroicons/vue@1.0.4/dist/heroicons.min.css" rel="stylesheet">

      <nav class="md:flex hidden justify-between items-center bg-white text-xl text-white w-full h-20 lg:px-20 md:px-10">
        <div class="text-2xl text-gray-900">
          Logo
        </div>
        <ul class="flex">
          <li v-for="(menuItem, index) in menu" :key="index"
            :class="{ 'mr-6 text-gray-800 font-bold': activeItems === menuItem, 'mr-6 text-xl text-gray-800 hover:text-[#12b488] transform duration-150': activeItems !== menuItem }">
            <NuxtLink :to="menuItem === 'Home' ? '/' : menuItem">{{ menuItem }}</NuxtLink>
          </li>
        </ul>
        <button
          class="mr-4 flex items-center text-lg bg-pink-500 pl-4 pr-2.5 py-1.5 text-white rounded-full hover:bg-pink-600 transform duration-150">
          Sign up
          <i class="w-6 h-6 font-bold ml-2">&rarr;</i>
        </button>
      </nav>

      <nav class="md:hidden flex px-6 justify-between items-center w-full font-bold h-12 bg-white text-gray-800">
        <div class="text-2xl">
          Logo
        </div>
        <template v-if="toggleOpen">
          <i class="w-8 h-8 p-1 hover:bg-gray-500 rounded-md bg-gray-300 hover:bg-gray-100 transform duration-150"
            @click="setToggleOpen(false)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg></i>
        </template>
        <template v-else>
          <i class="w-8 h-8 p-1 hover:bg-gray-500 rounded-md bg-gray-300 hover:bg-gray-100 transform duration-150"
            @click="setToggleOpen(true)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </i>
        </template>
      </nav>
      <ul v-if="toggleOpen" class="block overflow-auto md:hidden w-full h-60px p-6 bg-gray-100">
        <li v-for="(menuItem, index) in menu" :key="index"
          :class="{ 'w-full py-2.5 text-black font-bold': activeItems === menuItem, 'w-full py-2.5 text-black-400': activeItems !== menuItem }">
          <NuxtLink :to="menuItem">{{ menuItem }}</NuxtLink>
        </li>
      </ul>
    </header>
  </head>
  <!-- output the page content-->
  <div class="mb-2 bg-gray">
    <slot />
  </div>
  <!-- Footer container -->
  <div class="flex justify-center">
    <footer class="container ml-30 mr-30 mb-0 text-gray-800 text-center bg-gray-100">
      <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. -->
      <div class="mx-6 px-1 md:px-10 py-10 text-left md:text-left">
        <div class="grid-1 grid gap-4 sm:grid-cols-1 lg:grid-cols-8">
          <!-- Tailwind Elements section -->
          <div class="lg:col-span-2 sm:col-span-3">
            <h6 class="mb-4 flex items-center justify-left font-semibold uppercase md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-3 h-4 w-4">
                <path
                  d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              LOGO
            </h6>
          </div>
          <!-- Products section -->
          <div class="lg:col-span-1 sm:col-span-3">
            <h6 class="mb-4 flex justify-left font-semibold uppercase md:justify-start">
              Solutions
            </h6>
            <p class="mb-4">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">Properate Wizard</a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">Properate Map</a>
            </p>

            <p>
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">Properate Studio</a>
            </p>
          </div>
          <!-- Useful links section -->
          <div class="lg:col-span-1 sm:col-span-3">
            <h6 class="mb-4 flex justify-left font-semibold uppercase md:justify-start">
              Resources
            </h6>
            <p class="mb-4">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">Blog</a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">FAQ</a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">Webinars</a>
            </p>
          </div>
          <!-- Company section -->
          <div class="lg:col-span-1 sm:col-span-3">
            <h6 class="mb-4 flex justify-left font-semibold uppercase md:justify-start">
              Company
            </h6>
            <p class="mb-4">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">About</a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">Careers</a>
            </p>
          </div>
          <!-- Contact section -->
          <div class="lg:col-span-2 sm:col-span-3">
            <h6 class="mb-2 flex justify-left font-semibold uppercase md:justify-start">
              Subscribe to our newsletter
            </h6>
            <h6 class="mb-2 flex justify-center text-neutral-600 dark:text-neutral-200 md:justify-start">
              For product anouncements and exclusive insights
            </h6>

            <form action="">
              <div class="grid-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
                <div class="relative mb-6 col-span-2">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input type="text" id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-full focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@properate.io" />
                </div>

                <div class="mb-6 md:mr-auto">
                  <button type="button" class="subscribe" data-te-ripple-init data-te-ripple-color="light">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- copyright section-->




      <div class="mb-0 bg-gray-200 flex justify-center dark:bg-neutral-700 flex-grow items-center">
        <span class="mt-5 mx-auto mb-2">© 2023 Brand,inc. Privacy Terms Sitemap</span>
      </div>
      <div
        class="mb-0 bg-gray-200 flex dark:bg-neutral-700 items-center justify-center lg:justify-end sm:justify-center">
        <a href="#!" class="mb-3 mr-6 text-neutral-600 dark:text-neutral-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </a>
        <a href="#!" class="mb-3 mr-6 text-neutral-600 dark:text-neutral-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>
        <a href="#!" class="mb-3 mr-6 text-neutral-600 dark:text-neutral-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
              fill-rule="evenodd" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="#!" class="mb-3 mr-6 text-neutral-600 dark:text-neutral-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a href="#!" class="mb-3 mr-6 text-neutral-600 dark:text-neutral-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </a>
        <a href="#!" class="mb-3 mr-6 text-neutral-600 dark:text-neutral-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: ["Home", "Features", "Pricing", "Aboutus", "FAQ"],
      //activeItems: "Home",
      toggleOpen: false
    };
  },
  methods: {
    setToggleOpen(value) {
      this.toggleOpen = value;
    }
  }
};
</script>

<style scoped>
/* Add your custom styles here */
.router-link-exact-active {
  color: #12b488;
  font-weight: bold;
}
</style>