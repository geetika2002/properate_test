<template>
  

    <header>
      <div class="section__container header__container">
  
  
        <div class="header__content">
          <div>
            <h1>85% of all homes need an Energy Retrofit by 2030</h1>
            <p class="section__subtitle">
              <b>Yours is probably one of them.</b>
            </p>
            <div class="action__btns">
              <button class="btn"><b>Check with your address</b></button>
              <span><button class="btn"><b>For professionals</b></button></span>
            </div>
          </div>
        </div>
  
        <div class="header__image">
          <img src="/header-1.png" usemap="#workmap" alt="header" />
  
          <map name="workmap" id="workmap">
            <area shape="rect" coords="150,10,210,100" alt="area1" href="#" @click="openLayer('area1', $event)">
            <area shape="rect" coords="90,130,190,190" alt="area2" href="#" @click="openLayer('area2', $event)">
            <area shape="rect" coords="260,50,400,170" alt="area3" href="#" @click="openLayer('area3', $event)">
          </map>
  
        </div>
      </div>
      <div id="area1">
        <img src="/solar_panel.png" />
      </div>
      <div id="area2">
        <img src="/solar_panel.png" />
        <p>this is area2</p>
      </div>
      <div id="area3">
        <img src="/solar_panel.png" />
        <p>this is area3</p>
      </div>
     
    
     
    </header>
  
    <section class="gallary" @scroll="handleScroll">
      <div class="section__container gallary__container">
        <h2 class="section__title">
              <b>Process</b>
            </h2>
  
        <div class="gallary__content">
        
            <div class="process_step" ref="process_step" >
              <div id="step1" class="step" :class="{ expanded: currentStepIndex >= 0 }">
                <h2>Step 1</h2>
                <div class="gallary__col">
                    
                    <img src="/trip-1.jpg" alt="gallary" />
                  </div>
                <p>Evaluate your home</p>
              </div>
              <div id="step2" class="step" :class="{ expanded: currentStepIndex >= 1 }">
                <h2>Step 2</h2>
                <div class="galla_ry_col">
                  <img src="/trip-2.jpg" alt="gallary" />
  
                </div>
                <p>Browse the available upgrades</p>
              </div>
              <div id="step3" class="step" :class="{ expanded: currentStepIndex >= 2 }">
                <h2>Step 3</h2>
                <div class="gallary__col">
  
                  <img src="/trip-3.jpg" alt="gallary" />
                </div>
                <p>Start your journey</p>
              </div>
            </div>
            <br><br>Fix things now or wait until they stop working.
            Have a plan that you can come back to any time.
  
       
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
          <img src="/destination-1.jpg" alt="destination" />
          <div class="destination__details">
            <p class="destination__title">One year in the RDOS.</p>
            <p class="destination__subtitle">How Properate built the journey</p>
          </div>
        </div>
        <div class="destination__card">
          <img src="/destination-2.jpg" alt="destination" />
          <div class="destination__details">
            <p class="destination__title">One year in the RDOS.</p>
            <p class="destination__subtitle">How Properate built the journey </p>
          </div>
        </div>
        <div class="destination__card">
          <img src="/destination-3.jpg" alt="destination" />
          <div class="destination__details">
            <p class="destination__title">One year in the RDOS.</p>
            <p class="destination__subtitle">How Properate built the journey </p>
          </div>
        </div>
        <div class="destination__card">
          <img src="/destination-4.jpg" alt="destination" />
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
        <img src="/trip-1.jpg" alt="trip" />
        <div class="trip__details">
          <p>Fix things now or wait until they stop working. Have a plan that you can come back to any time.
  
          </p>
        </div>
      </div>
      <div class="trip__card">
        <img src="/trip-2.jpg" alt="trip" />
        <div class="trip__details">
          <p>Fix things now or wait until they stop working. Have a plan that you can come back to any time.
  
          </p>
        </div>
      </div>
      <div class="trip__card">
        <img src="/trip-3.jpg" alt="trip" />
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
  </template>
  
  
  <style>
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  
  p,
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
  }
  
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
    padding: 2rem 1rem;
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
    margin: 0 auto;
    /* Center the container horizontally */
  }
  
  
  
  .section__subtitle2 {
    font-size: 1rem;
    color: var(--text-dark);
    max-width: calc(var(--max-width) / 2);
  }
  
  .section__title {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: transparent;
    background-image: linear-gradient(to right, #8B0000, #0C6C72, #E5D3B4, #D6B18D, #BED2BC);
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 200%;
    background-position: -200%;
    transition: all ease-in-out 2s;
    cursor: pointer;
  
  
  }
  
  .section__title:hover {
    background-position: 200%;
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
    color: #0C6C72;
    background-color: #F1F1F1;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .btn:hover {
    background-color: #4CC0BB;
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
    color: #0C6C72;
    cursor: pointer;
  }
  
  .nav__logo span {
    color: #0C6C72;
  }
  
  .nav__links {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 20px;
  }
  
  .link a {
    padding: 0 1rem;
    color: #0C6C72;
    transition: 0.3s;
  }
  
  .link a:hover {
    color: #4CC0BB;
  }
  
  .header__container {
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    background-color: linear-gradient(135deg, #358280, #5E988D, #87AE9B);
  }
  
  .header__image {
    position: relative;
  }
  
  .header__image img {
    position: absolute;
    top: 50%;
    left: 60%;
  }
  
  .header__image img:nth-child(1) {
    width: 100%;
    height: 80%;
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
  
  .layer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
  
  .header__content>div {
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
    background: linear-gradient(to right, rgba(119, 195, 183, 1) 0%, rgba(94, 152, 141, 1) 20%, rgba(0, 0, 0, 1) 61%), linear-gradient(rgb(97, 183, 217) 52%, rgb(224, 246, 255) 60%, rgb(78, 99, 132) 61%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: wave 2000ms ease alternate infinite;
    transition: all 0.4s ease;
  }
  
  @keyframes wave {
    0% {
      background-position: 0 0;
    }
  
    100% {
      background-position: 50vw 10px;
    }
  }
  
  .header__content .action__btns {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;
  }
  
  #area1,
  #area2,
  #area3 {
    position: absolute;
    top: 70%;
    left: 70%;
    transform: translate(-50%, -50%);
    display: none;
    color: white;
    font-weight: bold;
  }
  
  #area1 img,
  #area2 img,
  #area3 img {
    width: 100px;
    height: auto;
  
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
  
  .story>span {
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
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    width: 100%;
    height: 100%;
  }
  
  
  .image__gallary {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }
  
  .gallary__col {
    display: grid;
    place-content: center;
    gap: 1rem;
    width: 100vh;
  }
  
  
  .gallary__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .gallary__content>div {
    max-width: 100vh;
  }
  
  .gallary__content .section__subtitle {
    margin-bottom: 2rem;
  }
  
  
  .subscribe {
    background-color: var(--secondary-color);
  }
  
  .subscribe h2 {
    font-size: 2.5rem;
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
    background-color: #d8d8cf;
  
  }
  
  .footer__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
    color: #383838;
  
  
  
  }
  
  .footer__col h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  
  .footer__col h3 span {
    color: #383838;
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
    color: #383838;
    border-top: 1px solid #383838;
  }
  
  .process_step {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }
  
  .process_step::-webkit-scrollbar {
    display: flex;
  }
  
  .step {
    height: 100%;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .step h2 {
    font-size: 3rem;
    
  }
  
  .step p {
    font-size: 1.5rem;
  }
  .step img{
    width: 100vh;
    max-height: 300px;
  }
  .expanded {
    /* Define styles for expanded steps */
    font-size: 1.1rem;
   
  
  }
  
  .gallary__col img{
    width: 100vh;
    max-height: 300px;
    
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
  
  <script>
  export default {
    data() {
      return {
        showLayer: null,
        currentStepIndex: 0
      };
    },
    methods: {
      openLayer(area, event) {
        //alert(area)
        this.showLayer = area;
        var coordinates = {
          area1: { top: 1, left: 3 },
          area2: { top: 183, left: 2 },
          area3: { top: 280, left: 2 }
        };
        var overlay = document.getElementById(area);
  
  
        overlay.style.display = "block";
  
        var x = event.clientX;
        var y = event.clientY;
      
        overlay.style.top = y + "px";
        overlay.style.left = x + "px";
        //overlay.style.top = coordinates[area].top + "px";
        //overlay.style.top = coordinates[area].top + "px";
  
        //overlay.style.left = coordinates[area].left + "px";
      },
      handleScroll() {
        const container = this.$refs.process_step;
        const steps = container.querySelectorAll('.step');
        const scrollPosition = container.scrollTop;
        const stepHeight = steps[this.currentStepIndex].offsetHeight;
  
        if (scrollPosition >= stepHeight) {
          steps[this.currentStepIndex].classList.add('expanded');
          this.currentStepIndex++;
        }
      }
    }
  }
  </script>