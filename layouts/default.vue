<template>
    <nav>
      <div class="nav__logo">Properate<span>.</span></div>
      <ul class="nav__links">
        <li class="link"><a href="#">Technology</a></li>
        <li class="link"><a href="#">Solutions</a></li>
        <li class="link"><a href="#">Science</a></li>
        <li class="link"><a href="..\pages\about.vue">About</a></li>
      </ul>
      <button class="btn">Login</button>
    </nav>
    <header>
      <div class="section__container header__container">
        <div class="header__image">
          <img src="header-1.jpg" alt="header" />
          <img src="header-2.jpg" alt="header" />
        </div>
        <div class="header__content">
          <div>
            <h1>85% of all homes need an Energy Retrofit by 2030</h1>
            <p class="section__subtitle">
              Yours is probably one of them.
            </p>
            <div class="action__btns">
              <button class="btn">Check with your address</button>
              <div class="story">
                <div class="video__image">
                  <img src="story.jpg" alt="story" />
                  <span><i class="ri-play-fill"></i></span>
                </div>
                <span>For professionals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

     <section class="gallary">
      <div class="section__container gallary__container">
        <div class="image__gallary">
          <div class="gallary__col">
            <img src="gallery-1.jpg" alt="gallary" />
          </div>
          <div class="gallary__col">
            <img src="gallery-2.jpg" alt="gallary" />
            <img src="gallery-3.jpg" alt="gallary" />
          </div>
        </div>
        <div class="gallary__content">
          <div>
            <h2 class="section__title">
              Process
            </h2>
            <p class="section__subtitle">
              

            Step 1: Evaluate your home <br><br>
            Step 2: Browse the available upgrades <br><br>
            Step 3: Start your journey <br><br>

            <br><br>Fix things now or wait until they stop working. 
            Have a plan that you can come back to any time. 

            </p>
          </div>
        </div>
      </div>
    </section>


    <section class="section__container destination__container">
      <div class="section__header">
        <div>
          <h2 class="section__title">Case Studies</h2>
          <p class="section__subtitle">
            Explore a variety of case studies focused on energy-efficient homes. 
          </p>
        </div>
        <div class="destination__nav">
          <span><i class="ri-arrow-left-s-line"></i></span>
          <span><i class="ri-arrow-right-s-line"></i></span>
        </div>
      </div>
      <div class="destination__grid">
        <div class="destination__card">
          <img src="destination-1.jpg" alt="destination" />
          <div class="destination__details">
            <p class="destination__title">One year in the RDOS.</p>
            <p class="destination__subtitle">How Properate built the journey</p>
          </div>
        </div>
        <div class="destination__card">
          <img src="destination-2.jpg" alt="destination" />
          <div class="destination__details">
            <p class="destination__title">One year in the RDOS.</p>
            <p class="destination__subtitle">How Properate built the journey </p>
          </div>
        </div>
        <div class="destination__card">
          <img src="destination-3.jpg" alt="destination" />
          <div class="destination__details">
            <p class="destination__title">One year in the RDOS.</p>
            <p class="destination__subtitle">How Properate built the journey </p>
          </div>
        </div>
        <div class="destination__card">
          <img src="destination-4.jpg" alt="destination" />
          <div class="destination__details">
            <p class="destination__title">One year in the RDOS.</p>
            <p class="destination__subtitle">How Properate built the journey </p>
          </div>
        </div>
      </div>
    </section>

       <div class="section__header2">
  <div class="section__title-container">
    <h2 class="section__title">Science</h2>
  </div>
</div>


<div class="trip__grid">
  <div class="trip__card">
    <img src="trip-1.jpg" alt="trip" />
    <div class="trip__details">
      <p>Fix things now or wait until they stop working. Have a plan that you can come back to any time.

</p>
    </div>
  </div>
  <div class="trip__card">
    <img src="trip-2.jpg" alt="trip" />
    <div class="trip__details">
      <p>Fix things now or wait until they stop working. Have a plan that you can come back to any time.

</p>
    </div>
  </div>
  <div class="trip__card">
    <img src="trip-3.jpg" alt="trip" />
    <div class="trip__details">
      <p>Fix things now or wait until they stop working. Have a plan that you can come back to any time.

</p>
    </div>
  </div>
</div>


   
    <section class="subscribe">
      <div class="section__container subscribe__container">
        <div class="subscribe__content">
          <h2 class="section__title">Subscribe to stay in the loop!</h2>
          <p class="section__subtitle">
            Explore suitable and affordable changes to make around your home. Recieve a personalized
            report within minutes of completing our questionaire. 
          </p>
        </div>
        <div class="subscribe__form">
          <form>
            <input type="email" placeholder="Your email here" />
            <button class="btn" type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="section__container footer__container">
        <div class="footer__col">
          <h3>Properate<span>.</span></h3>
          <p>
            Improve your home's efficiency. Use our tools to calculate your potential savings, and recieve a personalized report within in minutes
            of completing our questionaire.
          </p>
        </div>
        <div class="footer__col">
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Home</p>
          <p>Professionals</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Pricing</p>
        </div>
        <div class="footer__col">
          <h4>Address</h4>
          <p>
            <span>Address:</span> 401-68 Water St. Vancouver BC, Canada  V6B 1A4
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


<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap");

:root {
  --primary-color: #3685fb;
  --primary-color-dark: #2f73d9;
  --secondary-color: #fafcff;
  --text-dark: #0d213f;
  --text-light: #767268;
  --extra-light: #ffffff;
  --max-width: 1200px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.section__container {
  max-width: var(--max-width);
  margin: auto;
  padding: 5rem 1rem;
}

.section__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.section__header2 {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.section__title-container {
  margin: 0 auto; /* Center the container horizontally */
}

.section__title {
  font-size: 2rem;
  color: var(--text-dark);
}

.section__subtitle2 {
  font-size: 1rem;
  color: var(--text-dark);
  max-width: calc(var(--max-width) / 2);
}

.section__title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.section__subtitle {
  font-size: 1rem;
  color: var(--text-dark);
  max-width: calc(var(--max-width) / 2);
}

.btn {
  padding: 0.75rem 2rem;
  outline: none;
  border: none;
  font-size: 1rem;
  color: var(--extra-light);
  background-color: var(--primary-color);
  border-radius: 5rem;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  background-color: var(--primary-color-dark);
}

a {
  text-decoration: none;
}

img {
  width: 100%;
  display: block;
}

body {
  font-family: "Poppins", sans-serif;
}

nav {
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: var(--max-width);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__logo {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-dark);
  cursor: pointer;
}

.nav__logo span {
  color: var(--primary-color);
}

.nav__links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.link a {
  padding: 0 1rem;
  color: var(--text-dark);
  transition: 0.3s;
}

.link a:hover {
  color: var(--primary-color);
}

header {
  background-color: var(--secondary-color);
}

.header__container {
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.header__image {
  position: relative;
}

.header__image img {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 0.5rem solid var(--extra-light);
  border-radius: 2rem;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
}

.header__image img:nth-child(1) {
  max-width: 350px;
  transform: translate(-75%, -50%);
}

.header__image img:nth-child(2) {
  max-width: 250px;
  transform: translate(0%, -25%);
}

.header__content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__content > div {
  max-width: 400px;
  display: grid;
  gap: 1rem;
}

.header__content .sub__header {
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary-color);
}

.header__content h1 {
  font-size: 3rem;
  line-height: 4rem;
  font-weight: 800;
  color: var(--text-dark);
}

.header__content .action__btns {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
}

.story {
  display: flex;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
}

.video__image {
  position: relative;
}

.video__image img {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
}

.video__image span {
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
}

.video__image span i {
  padding: 0.5rem;
  font-size: 1rem;
  color: red;
  background-color: var(--extra-light);
  border-radius: 100%;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
}

.story > span {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-dark);
}

.destination__nav {
  display: flex;
  gap: 1rem;
}

.destination__nav span {
  width: 30px;
  height: 30px;
  display: grid;
  place-content: center;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 100%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.3s;
}

.destination__nav span:hover {
  color: var(--extra-light);
  background-color: var(--primary-color);
}

.destination__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.destination__card {
  overflow: hidden;
  position: relative;
  isolation: isolate;
  cursor: pointer;
}

.destination__card img {
  border-radius: 1rem;
}

.destination__details {
  position: absolute;
  width: calc(100% - 2rem);
  padding: 1rem;
  bottom: -6rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: var(--extra-light);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  z-index: 1;
  transition: 0.3s;
}

.destination__card:hover .destination__details {
  bottom: 1rem;
}

.destination__title {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.destination__subtitle {
  font-size: 1rem;
  font-weight: 600;
}

.trip {
  background-color: var(--secondary-color);
}

.trip__container :is(.section__title, .section__subtitle, .view__all) {
  text-align: center;
  margin-right: auto;
  margin-left: auto;
}

.trip__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 4rem auto;
  max-width: 1000px; 
}

.trip__card {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
}

.trip__details {
  padding: 1rem;
  display: grid;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-dark);
  background-color: var(--extra-light);
  cursor: pointer;
}


.gallary__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.image__gallary {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.gallary__col {
  display: grid;
  place-content: center;
  gap: 1rem;
}

.gallary__col img {
  border-radius: 1rem;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
}

.gallary__content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.gallary__content > div {
  max-width: 400px;
}

.gallary__content .section__subtitle {
  margin-bottom: 2rem;
}

.subscribe {
  background-color: var(--secondary-color);
}

.subscribe__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.subscribe__form {
  display: flex;
  align-items: center;
  justify-content: center;
}

.subscribe__form form {
  width: 100%;
  max-width: 400px;
  display: flex;
  background-color: var(--extra-light);
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
  border-radius: 5rem;
}

.subscribe__form input {
  width: 100%;
  padding: 1rem;
  outline: none;
  border: none;
  border-radius: 5rem;
  font-size: 1rem;
}

.footer {
  background-color: var(--text-dark);
}

.footer__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  color: var(--secondary-color);
}

.footer__col h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

.footer__col h3 span {
  color: var(--primary-color);
}

.footer__col p {
  font-size: 0.8rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.3s;
}

.footer__col p:hover {
  color: var(--primary-color);
}

.footer__col p span {
  font-weight: 600;
}

.footer__col h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

.footer__bar {
  max-width: var(--max-width);
  margin: auto;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  color: var(--secondary-color);
  border-top: 1px solid var(--text-light);
}

@media (width < 1200px) {
  .header__image img:nth-child(1) {
    max-width: 300px;
  }

  .header__image img:nth-child(2) {
    max-width: 200px;
  }
}

@media (width < 900px) {
  .nav__links {
    display: none;
  }

  .header__container {
    grid-template-columns: repeat(1, 1fr);
  }
  .header__image {
    min-height: 500px;
  }

  .destination__grid {
    gap: 1rem;
  }

  .trip__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (width < 600px) {
  .destination__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .trip__grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .gallary__container {
    grid-template-columns: repeat(1, 1fr);
  }

  .subscribe__container {
    grid-template-columns: repeat(1, 1fr);
  }

  .footer__container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>