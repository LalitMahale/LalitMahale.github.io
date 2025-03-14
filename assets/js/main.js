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
   * chatbot integration
   */


  new PureCounter();


  // Chat Window Integration Below:
  document.addEventListener('DOMContentLoaded', function () {
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const closeChatButton = document.getElementById('closeChat');
    const optionsContainer = document.getElementById('options');
    const userInput = document.getElementById('userInput');
    const chatContent = document.querySelector('.chat-content'); // Ensure this class exists in your HTML
    const sendButton = document.getElementById('sendButton'); // Send button

    // Automatically open chat window when page loads
    chatWindow.style.display = 'block'; 
    showOptions(); 
  
    // Show chat window when the user clicks the bot icon
    chatButton.addEventListener('click', function () {
        chatWindow.style.display = 'block';
        showOptions();
    });
  
    // Close the chat window
    closeChatButton.addEventListener('click', function () {
        chatWindow.style.display = 'none';
    });
  
    // Listen for Enter key to send the user message
    userInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const userMessage = userInput.value.trim();
            if (userMessage) {
                displayUserMessage(userMessage);
                sendMessageToBackend(userMessage);
                userInput.value = '';
            }
        }
    });
  
    // Function to show initial options
    function showOptions() {
        optionsContainer.innerHTML = `
            <button class="chat-option" data-option="Projects">View Projects</button>
            <button class="chat-option" data-option="About Me">About Me</button>
            <button class="chat-option" data-option="Help">Help</button>
        `;
        addEventListenersToButtons();
    }
  
    // Function to add event listeners to buttons
    function addEventListenersToButtons() {
        const buttons = optionsContainer.querySelectorAll('.chat-option');
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                const option = button.getAttribute('data-option');
                handleOption(option);
            });
        });
    }
  
    // Handle button options
    function handleOption(option) {
        if (option === 'Projects') {
            showProjectOptions();
        } 
          else if (option == "Certificate") {
            showProjectOptions();
          }
          else if (option === 'About Me') {
            displayUserMessage("About Me");
            displayBotMessage("👋 Hi I'm Lalit Mahale. I'm AI/ML Expert. For More detail 🤙call at 📱 8087830153");
        } else if (option === 'Help') {
            displayUserMessage("Help"); 
            displayBotMessage("For 🤖 assistance, you can email me at 📧 mahalelalit45@gmail.com");
        }
    }
  
    // Show project options
    function showProjectOptions() {
        optionsContainer.innerHTML = `
            <button class="chat-option" data-link="https://huggingface.co/spaces/Lalit1997/medical-report-analyzer">Medical Report Analyzer</button>
            <button class="chat-option" data-link="https://huggingface.co/spaces/Lalit1997/all-in-one-summarizer">All in One Document Summarizer</button>

            <button class="chat-option" data-option="Back">Back</button>
        `;
        const buttons = optionsContainer.querySelectorAll('.chat-option');
        buttons.forEach(button => {
            if (button.getAttribute('data-link')) {
                // Redirect to the link
                button.addEventListener('click', function () {
                    const link = button.getAttribute('data-link');
                    window.open(link, '_blank'); // Open link in a new tab
                });
            } else {
                // Handle "Back" button
                button.addEventListener('click', function () {
                    showOptions(); // Go back to the main menu
                });
            }
        });
    }
  
    // Function to send a message to the backend

    function sendMessageToBackend(message) {
        const url = "https://lalit1997-test-api.hf.space/chatbot";
    
        // Construct the payload as query parameters
        const params = new URLSearchParams({
            text: message,   // User's input
            token: 'AIzaSyB3wI2r6ZgQnYQ3V39PX5S0zWSRqy5ldYw_Lalit' // Token from environment variable
        });
    
        // Make the API GET request
        fetch(`${url}?${params.toString()}`)
            .then(response => {
                if (!response.ok) {
                    // If response status is not OK, throw an error to catch block
                    return response.text().then(errText => {
                        throw new Error(errText); // Include error text in the error object
                    });
                }
                return response.text();
            })
            .then(data => {
                console.log("Response Text:", data);
    
                let responseText;
                try {
                    responseText = JSON.parse(data).result || "Sorry, I didn't -understand.";
                } catch (e) {
                    responseText = data || "Unexpected response from the server.";
                }
    
                displayBotMessage(responseText); // Display the bot's response
            })
            .catch(error => {
                console.error('Error:', error);
                displayBotMessage(`Error occurred: ${error.message}`); // Display error message
            });
    }
    
  
    // Function to display bot's message https://huggingface.co/spaces/Lalit1997/all-in-one-summarizer
    function displayBotMessage(message) {
        const botMessageDiv = documentnm-.createElement('div');
        botMessageDiv.classList.add('bot-message');
        botMessageDiv.textContent = message;
        chatContent.appendChild(botMessageDiv);
        scrollToBottom();
    }
  
    // Function to display user's message
    function displayUserMessage(message) {
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('user-message');
        userMessageDiv.textContent = message;
        chatContent.appendChild(userMessageDiv);
        scrollToBottom();
    }
  
    // Scroll to the bottom of the chat content
    function scrollToBottom() {
        chatContent.scrollTop = chatContent.scrollHeight;
    }
});


})();
