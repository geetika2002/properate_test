<template>
  
  <nav>
    <div class="nav__logo"><NuxtLink to="/"><img src="/logo.png" /></NuxtLink></div>
    <ul class="nav__links">
      <li class="link">
        <NuxtLink to="/"><b>Technology</b></NuxtLink>
      </li>
      <li class="link">
        <NuxtLink to="/"><b>Solutions</b></NuxtLink>
      </li>
      <li class="link">
        <NuxtLink to="/"><b>Science</b></NuxtLink>
      </li>
      <li class="link">
        <NuxtLink to="aboutus"><b>About</b></NuxtLink>
      </li>
      <li class="link">
        <NuxtLink to="faq"><b>FAQ</b></NuxtLink>
      </li>
    </ul>
    <button class="btn">Login</button>
  </nav>
  <!-- output the page content-->
  <div class="mb-2">
    <slot />
  </div>
  <!-- Footer container -->
  <footer class="footer">
    <div class="section__container footer__container">
      <div class="footer__col">
        <NuxtLink to="/"><img src="logo.png"> </NuxtLink>
        <p>
        <br>
          Improve your home's efficiency. Use our tools to calculate your potential savings, and recieve a personalized
          report within in minutes
          of completing our questionaire.
        </p>
      </div>
      <div class="footer__col">
        <h4>Support</h4>
        <p><NuxtLink to="faq">FAQs</NuxtLink></p>
        <p><NuxtLink to="/">Home</NuxtLink></p>
        <p>Professionals</p>
        <p><NuxtLink to="aboutus">About Us</NuxtLink></p>
        <p><NuxtLink to="careers">Careers</NuxtLink></p>
        <p><NuxtLink to="casestudy">Blog</NuxtLink></p>
        <p>Pricing</p>
      </div>
      <div class="footer__col">
        <h4><NuxtLink to="contactus">Contact</NuxtLink></h4>
        <p>
          <span>Address:</span> 401-68 Water St. Vancouver BC, Canada V6B 1A4
        </p>
        <p><span>Email:</span> arman@properate.io </p>
        <p><span>Phone:</span> +1 604-396-5355</p>
      </div>
    </div>
    <div class="footer__bar">
      Copyright © 2023 BCIT team, All rights reserved.
    </div>
  </footer>
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

@import url('https://fonts.googleapis.com/css?family=Roboto');

p,
h1, h2, h3, h4, h5, h6 {
  font-family: 'Roboto', sans-serif;
}

.nav__logo img {
  width: 150px;
  height: auto;  
}

.footer__col img {
  width: 150px; 
  height: auto; 
}


</style>