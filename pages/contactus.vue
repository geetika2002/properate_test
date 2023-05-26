<template>
<br><br>
    <div class="container mx-auto px-4">
      <h1 class="mt-8 mb-4 text-3xl font-bold text-center text-teal-900">Drop Us A Line</h1>
      <ul class="flex flex-wrap justify-center mb-8">
  <li class="mt-4 mx-2 text-xl flex items-center text-teal-700">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-4 h-4">
      <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </svg>
    Vancouver, BC, Canada
  </li>
  <li class="mt-4 mx-2 text-xl flex items-center text-teal-700">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4">
      <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
    </svg>
    linfo@properate.io
  </li>
  <li class="mt-4 mx-2 text-xl flex items-center text-teal-700">
    <svg aria-hidden="true" focusable="false" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em">
      <!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
      <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
    </svg>
    +1(888)9023332
  </li>
</ul>

      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:pr-8">
          <p class="mt-8 mb-4 text-3xl font-bold text-teal-900">Contact Us</p>
          <div class="mb-4 text-teal-700">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" class="px-4 py-2 border rounded w-full">
          </div>
          <div class="mb-4 text-teal-700">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" class="px-4 py-2 border rounded w-full">
          </div>
          <div class="mb-4 text-teal-700">
            <label for="questions">Questions</label>
            <textarea id="questions" name="questions" placeholder="Enter your questions or comments" class="px-4 py-2 border rounded w-full"></textarea>
          </div>
          <div class="flex">
        <a class="inline-block px-7 py-3 bg-zinc-100 text-teal-600 font-bold text-medium leading-snug uppercase rounded shadow-md hover:bg-teal-500 hover:shadow-lg focus:bg-teal-50 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-50 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2 justify-self-start"
          href="#!" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">Submit</a>
      </div>
        </div>
        <div class="w-full md:w-1/2 mt-8 md:mt-0">
          <div class="max-w-full">
            <img src="/random2.png" alt="Image description" class="w-full h-auto">
          </div>
        </div>
      </div>
    </div>

    <br><br>
  </template>
  

  <style scoped>
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
  
  .btn {
    @apply bg-gray-600 text-white rounded-full px-4 py-2;
  }
  
  .container {
    @apply px-4;
  }
  
  textarea {
    @apply resize-y;
  }
  
  @media (min-width: 768px) {
    .container {
      @apply mx-auto max-w-2xl;
    }
  }
  
  @media (min-width: 992px) {
    .container {
      @apply max-w-4xl;
    }
  }
  
  @media (min-width: 1200px) {
    .container {
      @apply max-w-6xl;
    }
  }
  </style>
  