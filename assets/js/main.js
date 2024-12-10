// /**
// * Template Name: MyResume - v4.9.2
// * Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
// * Author: BootstrapMade.com
// * License: https://bootstrapmade.com/license/
// */
// (function() {
//   "use strict";

//   /**
//    * Easy selector helper function
//    */
//   const select = (el, all = false) => {
//     el = el.trim()
//     if (all) {
//       return [...document.querySelectorAll(el)]
//     } else {
//       return document.querySelector(el)
//     }
//   }

//   /**
//    * Easy event listener function
//    */
//   const on = (type, el, listener, all = false) => {
//     let selectEl = select(el, all)
//     if (selectEl) {
//       if (all) {
//         selectEl.forEach(e => e.addEventListener(type, listener))
//       } else {
//         selectEl.addEventListener(type, listener)
//       }
//     }
//   }

//   /**
//    * Easy on scroll event listener 
//    */
//   const onscroll = (el, listener) => {
//     el.addEventListener('scroll', listener)
//   }

//   /**
//    * Navbar links active state on scroll
//    */
//   let navbarlinks = select('#navbar .scrollto', true)
//   const navbarlinksActive = () => {
//     let position = window.scrollY + 200
//     navbarlinks.forEach(navbarlink => {
//       if (!navbarlink.hash) return
//       let section = select(navbarlink.hash)
//       if (!section) return
//       if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
//         navbarlink.classList.add('active')
//       } else {
//         navbarlink.classList.remove('active')
//       }
//     })
//   }
//   window.addEventListener('load', navbarlinksActive)
//   onscroll(document, navbarlinksActive)

//   /**
//    * Scrolls to an element with header offset
//    */
//   const scrollto = (el) => {
//     let elementPos = select(el).offsetTop
//     window.scrollTo({
//       top: elementPos,
//       behavior: 'smooth'
//     })
//   }

//   /**
//    * Back to top button
//    */
//   let backtotop = select('.back-to-top')
//   if (backtotop) {
//     const toggleBacktotop = () => {
//       if (window.scrollY > 100) {
//         backtotop.classList.add('active')
//       } else {
//         backtotop.classList.remove('active')
//       }
//     }
//     window.addEventListener('load', toggleBacktotop)
//     onscroll(document, toggleBacktotop)
//   }

//   /**
//    * Mobile nav toggle
//    */
//   on('click', '.mobile-nav-toggle', function(e) {
//     select('body').classList.toggle('mobile-nav-active')
//     this.classList.toggle('bi-list')
//     this.classList.toggle('bi-x')
//   })

//   /**
//    * Scrool with ofset on links with a class name .scrollto
//    */
//   on('click', '.scrollto', function(e) {
//     if (select(this.hash)) {
//       e.preventDefault()

//       let body = select('body')
//       if (body.classList.contains('mobile-nav-active')) {
//         body.classList.remove('mobile-nav-active')
//         let navbarToggle = select('.mobile-nav-toggle')
//         navbarToggle.classList.toggle('bi-list')
//         navbarToggle.classList.toggle('bi-x')
//       }
//       scrollto(this.hash)
//     }
//   }, true)

//   /**
//    * Scroll with ofset on page load with hash links in the url
//    */
//   window.addEventListener('load', () => {
//     if (window.location.hash) {
//       if (select(window.location.hash)) {
//         scrollto(window.location.hash)
//       }
//     }
//   });

//   /**
//    * Preloader
//    */
//   let preloader = select('#preloader');
//   if (preloader) {
//     window.addEventListener('load', () => {
//       preloader.remove()
//     });
//   }

//   /**
//    * Hero type effect
//    */
//   const typed = select('.typed')
//   if (typed) {
//     let typed_strings = typed.getAttribute('data-typed-items')
//     typed_strings = typed_strings.split(',')
//     new Typed('.typed', {
//       strings: typed_strings,
//       loop: true,
//       typeSpeed: 100,
//       backSpeed: 50,
//       backDelay: 2000
//     });
//   }

//   /**
//    * Skills animation
//    */
//   let skilsContent = select('.skills-content');
//   if (skilsContent) {
//     new Waypoint({
//       element: skilsContent,
//       offset: '80%',
//       handler: function(direction) {
//         let progress = select('.progress .progress-bar', true);
//         progress.forEach((el) => {
//           el.style.width = el.getAttribute('aria-valuenow') + '%'
//         });
//       }
//     })
//   }

//   /**
//    * Porfolio isotope and filter
//    */
//   window.addEventListener('load', () => {
//     let portfolioContainer = select('.portfolio-container');
//     if (portfolioContainer) {
//       let portfolioIsotope = new Isotope(portfolioContainer, {
//         itemSelector: '.portfolio-item'
//       });

//       let portfolioFilters = select('#portfolio-flters li', true);

//       on('click', '#portfolio-flters li', function(e) {
//         e.preventDefault();
//         portfolioFilters.forEach(function(el) {
//           el.classList.remove('filter-active');
//         });
//         this.classList.add('filter-active');

//         portfolioIsotope.arrange({
//           filter: this.getAttribute('data-filter')
//         });
//         portfolioIsotope.on('arrangeComplete', function() {
//           AOS.refresh()
//         });
//       }, true);
//     }

//   });

//   /**
//    * Initiate portfolio lightbox 
//    */
//   const portfolioLightbox = GLightbox({
//     selector: '.portfolio-lightbox'
//   });

//   /**
//    * Initiate portfolio details lightbox 
//    */
//   const portfolioDetailsLightbox = GLightbox({
//     selector: '.portfolio-details-lightbox',
//     width: '90%',
//     height: '90vh'
//   });

//   /**
//    * Portfolio details slider
//    */
//   new Swiper('.portfolio-details-slider', {
//     speed: 400,
//     loop: true,
//     autoplay: {
//       delay: 2000,
//       disableOnInteraction: false
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//       clickable: true
//     }
//   });

//   /**
//    * Testimonials slider
//    */
//   new Swiper('.testimonials-slider', {
//     speed: 600,
//     loop: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false
//     },
//     slidesPerView: 'auto',
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//       clickable: true
//     }
//   });

//   /**
//    * Animation on scroll
//    */
//   window.addEventListener('load', () => {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-in-out',
//       once: true,
//       mirror: false
//     })
//   });

//   /**
//    * Initiate Pure Counter 
//    */
//   new PureCounter();

// })()

/**
* Template Name: MyResume - v4.9.2
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

  // Chat Window Integration Below:

  document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const closeChatButton = document.getElementById('closeChat');
    const optionsContainer = document.getElementById('options');
    const userInput = document.getElementById('userInput');
  
    // Automatically open chat window when page loads
    chatWindow.style.display = 'block';  // Show the chat window
    showOptions();  // Show the available options for the user
  
    // Display a message to guide the user (optional)
    // displayBotMessage('Hello! How can I help you today? You can ask for the "Last Updated Date", or use the buttons below.');
  
    // Show chat window when the user clicks the bot icon
    chatButton.addEventListener('click', function() {
        chatWindow.style.display = 'block';
        showOptions();
    });
  
    // Close the chat window
    closeChatButton.addEventListener('click', function() {
        chatWindow.style.display = 'none';
    });
  
    // Handle user input and options
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleUserInput(userInput.value);
            userInput.value = '';  // Clear input field
        }
    });
  
    // Function to show options in the chat window
    function showOptions() {
        optionsContainer.innerHTML = `
            <button onclick="sendOption('Last Updated Date')">Last Updated Date</button>
            <button onclick="sendOption('Help')">Help</button>
            <button onclick="sendOption('About Me')">About Me</button>
        `;
    }
  
    // Function to send selected option and process response
    window.sendOption = function(option) {
        displayUserMessage(option); // Display selected option from user
        if (option === 'Last Updated Date') {
            fetchLastUpdatedDate();
        } else if (option === 'About Me') {
          displayBotMessage(`Hi I'm Lalit Mahale.
      I'm an AI/ML Expert.
      For more details, you can contact me at +91 8087830153.`);
      }
    }
  
    // Function to handle user input
    function handleUserInput(input) {
        displayUserMessage(input);  // Display user message
        // Process user input
        if (input.toLowerCase() === 'last updated date') {
            fetchLastUpdatedDate();
        } else {
            displayBotMessage('I am sorry, I didn\'t understand that. You can ask for the "Last Updated Date".');
        }
    }
  
    // Display bot's message
    function displayBotMessage(message) {
        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('bot-message');
        botMessageDiv.textContent = message;
        document.querySelector('.chat-content').appendChild(botMessageDiv);
        scrollToBottom();
    }
  
    // Display user's message
    function displayUserMessage(message) {
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('user-message');
        userMessageDiv.textContent = message;
        document.querySelector('.chat-content').appendChild(userMessageDiv);
        scrollToBottom();
    }
  
    // Scroll to the bottom of the chat content
    function scrollToBottom() {
        const chatContent = document.querySelector('.chat-content');
        chatContent.scrollTop = chatContent.scrollHeight;
    }
  
    // Fetch last updated date from the backend
    function fetchLastUpdatedDate() {
        // Assuming you have an API that provides this data
        fetch('https://api.example.com/last-updated')
            .then(response => response.json())
            .then(data => {
                displayBotMessage(`The last updated date is: ${data.lastUpdatedDate}`);
            })
            .catch(error => {
                displayBotMessage('Sorry, I was unable to fetch the last updated date.');
            });
    }
  });
  

})();
