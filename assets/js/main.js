

/*==================== MENU SHOW Y HIDDEN ====================*/
const navmenu = document.getElementById('nav-menu'),
      navtoggle = document.getElementById('nav-toggle'),
      navclose = document.getElementById('nav-close')


if (navtoggle)
    navtoggle.addEventListener('click',() =>{
        navmenu.classList.add('show-menu')
    })


    if (navclose)
    navclose.addEventListener('click',() =>{
        navmenu.classList.remove('show-menu')
    })


    /*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



const SkillsContent = document.getElementsByClassName('skills__content'),
      SkillsHeaders = document.querySelectorAll('.skills__header')


      function toggleSkills(){
             let itemClass = this.parentNode.className

             for(let i = 0; i < SkillsContent.length; i++){
                SkillsContent[i].className = 'skills__content skills__close'
             }

             if(itemClass = 'skills__content skills__close'){
                 this.parentNode.className = 'skills__content skills__open'
             }
      }


    SkillsHeaders.forEach((el) =>{
        el.addEventListener('click', toggleSkills)
    })



    const tabs = document.querySelectorAll('[data-target]'),
          tabContents = document.querySelectorAll('[data-content')

          tabs.forEach(tab =>{
               tab.addEventListener('click', ()=>{
                   const target = document.querySelector(tab.dataset.target)
                   tabContents.forEach(tabContents =>{
                    tabContents.classList.remove('qualification__active')
                   })
                   target.classList.add('qualification__active')

                   tabs.forEach(tab =>{
                       tab.classList.remove('qualification__active')
                   })
                   tab.classList.add('qualification__active')
               })
          })




        const modelViews = document.querySelectorAll('.services__model'),
              modelBtns = document.querySelectorAll('.services--button'),
              modelCloses = document.querySelectorAll('.services__model-close')
              
              
        let model = function(modelClick){
            modelViews[modelClick].classList.add('active-model')
        } 
        
        modelBtns.forEach((modelBtn, i)=>{
            modelBtn.addEventListener('click',()=>{
                model(i)
            })
        })

        modelCloses.forEach((modelClose)=>{
            modelClose.addEventListener('click', ()=>{
                modelViews.forEach((modelView)=>{
                    modelView.classList.remove('active-model')
                })
            })
        })


        let swiper = new Swiper(".mySwiper", {
            cssMode: true,
            loop:true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable:true
            },
          });



          let swiperTestimonial = new Swiper(".testimonial__container", {
            loop:true,
            grabCursor:true,
            spaceBetween:48,

            pagination: {
              el: ".swiper-pagination",
              clickable:true,
              dynamicBullets:true
            },
            breakpoints:{
                568:{
                    slidesPerView:2,
                }
            }
          });





 const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})