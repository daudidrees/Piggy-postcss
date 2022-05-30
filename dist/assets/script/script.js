const message = document.querySelectorAll('.faq-content');
const showMessage = document.querySelectorAll('.faq-desc-wrapper');
const faqBtn = document.querySelectorAll('#faq-btn');
const personContent = document.querySelectorAll(".person__content");
const personSecondContent = document.querySelectorAll(".person__content_2");
const personDescriptionMobile = document.querySelectorAll('.person_desc__mobile');
const personDescriptionDesktop = document.querySelectorAll('.person_desc__desktop');
const hamburger = document.querySelector(".hamburger-icon");
const mblNav = document.querySelector('.mobile-nav')
const navCross = document.querySelector('.nav-cross-btn')

const circleChart = document.getElementById('circle-chart')
const circleChartCircles = document.querySelectorAll('[data-chart-circle]')

const observer = new IntersectionObserver((entries, observer) => {
  const [{ isIntersecting, target }] = entries

  if (isIntersecting && target === circleChart) {
    observer.disconnect()
    circleChartCircles.forEach(circle => {
      circle.setAttribute('stroke-dasharray', circle.getAttribute('data-chart-dasharray'))
    })
  }
}, {
  threshold: 0.3
})

observer.observe(circleChart)

document.querySelector('.nav-links').addEventListener('click', function(e) {
  e.preventDefault();
  if(e.target.classList.contains('nav-item')){
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({behavior: "smooth"})
  }
});

function hideAllFaqs (faqs) {
  faqs.forEach(faq => {
    faq.lastElementChild.textContent = '+'
    faq.nextElementSibling.classList.remove('show')
  })
}

message.forEach(faq => {
  faq.addEventListener('click', function () {
    const el = this.nextElementSibling
    const signEl = this.lastElementChild

    if (el.classList.contains('show')) {
      hideAllFaqs(message)
    } else {
      hideAllFaqs(message)
      el.classList.add('show')
      signEl.textContent = '-'
    }
  })
})

personContent.forEach((personEl, index) => {
  personEl.addEventListener('click', () => {
    const personDescMobileEl = personDescriptionMobile[index]
    const personDescDesktopEl = personDescriptionDesktop[index]

    if (!personDescMobileEl || !personDescDesktopEl) return

   if (!personDescDesktopEl.classList.contains('hidden')) {
      personDescMobileEl.classList.add('hidden')
      personDescDesktopEl.classList.add('hidden')
    } else {
      personDescriptionMobile.forEach(el => el.classList.add('hidden'))
      personDescriptionDesktop.forEach(el => el.classList.add('hidden'))

      personDescMobileEl.classList.remove('hidden')
      personDescDesktopEl.classList.remove('hidden')
    }
  })
})

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// Mbl-Nav

document.querySelector('.sidenav').addEventListener('click', function(e) {
  e.preventDefault();
  if(e.target.classList.contains('nav-item')){
    const mblNav = e.target.getAttribute("href");
    document.querySelector(mblNav).scrollIntoView({behavior: "smooth"});
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
});


const about = document.getElementById('footer')
const learnMore = document.getElementById('join')

learnMore.addEventListener("click", function (e) {
  e.preventDefault();
  about.scrollIntoView({behavior: "smooth"})
});