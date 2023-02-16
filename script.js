function mesaj() {
  let sum = "Welcome to Alif !"

  alert(sum);
}


// ShowAndHide Video
let videoFilter = document.querySelector('.video-filter');

function show () {
  document.getElementById("video_show").style.display = "block";
  videoFilter.style.display = "block";
}

function hide () {
  document.getElementById("video_show").style.display = "none";
  videoFilter.style.display = "none";
}



/* Animation scrool */

var smoothScroll = {

  move : function (old, des, actual) {
    easeIn = function (t) { return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; };
    actual += 1;
    ease = easeIn(actual / 100);
    delta = des - old;
    delta *= ease;
    delta += old;
    window.scrollTo(0, delta);
    if (actual < 100) {
      window.requestAnimationFrame(function () {
        smoothScroll.move(old, des, actual);
      });
    }
  },

  linkInit : function (e) {
    e.preventDefault();
    link = e.target.getAttribute("href").substr(1);
    block = document.getElementById(link).offsetTop;
    client = document.documentElement.scrollTop;

    smoothScroll.move(client, block, 0);
  },

  init : function () {
    links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      link = links[i].getAttribute("href");
      if (link.search("#") == 0 & link.substr(1) != "") {
        links[i].onclick = smoothScroll.linkInit;
      }
    }
  }
};

window.onload = smoothScroll.init; 



/*====NAVBAR CHANGE====*/

if (window.matchMedia('(max-width: 1041px)').matches) {
  const nav = document.querySelector('nav');
  nav.style.background = '#3056d3';
  nav.style.boxShadow = "none";
}

if (window.matchMedia('(min-width: 1041px)').matches) {
  const nav = document.querySelector('nav');
const logo = document.querySelector('.brand');
const btnMenu = document.querySelector('.btn-menu');
const navigations = document.querySelectorAll('.navLink');

function navbarChangeColor() {
  var scrollPos = window.scrollY;

  if(scrollPos > 50){
    nav.style.backgroundColor = '#f8f8ff';
    nav.style.boxShadow = "0 -5px 7px #3056d3";
    logo.style.color = '#3056d3';
    btnMenu.style.color = '#3056d3';
    navigations.forEach(function(navigation){
      navigation.style.color = "#3056d3";
    });
  }else{
    nav.style.backgroundColor = 'transparent';
    nav.style.boxShadow = "none";
    logo.style.color = '#fff';
    btnMenu.style.color = '#fff';
    navigations.forEach(function(navigation){
      navigation.style.color = "#fff";
    });
  }

}

window.onscroll = navbarChangeColor;
}

/*====NAVBAR END====*/


// AOS ANIMATION
AOS.init({
  duration: 800,
  easing: 'easeInCubic',
  once: false,
  mirror: true,
});


// CurrentYear
const currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear;


// GSAP HOMEPAGE
const tl = gsap.timeline({defaults: {ease: 'power4.out', delay: 0.5}});

tl.to(".slide", {x: "0%", duration: 5.5});
tl.fromTo(".contentRight", {opacity: 0}, {opacity: 1, duration: 1, ease: 'bounce'});


// ACTIVE SCROLL

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.navigation a[href="#' + sectionId + '"]').forEach(link => {
        link.classList.add('active');
      });
    } else {
      document.querySelectorAll('.navigation a[href="#' + sectionId + '"]').forEach(link => {
        link.classList.remove('active');
      });
    }
  });
});

// HideNavbar
const navLink = document.querySelectorAll('.navLink');
const checkbox = document.querySelector('input[type=checkbox]');

navLink.forEach(link => {
    link.addEventListener('click', function() {
        checkbox.checked = false;
    });
});

// Preloader Settings
window.onload = function() {
  setTimeout(function() {
    document.getElementById('preloader').style.display = 'none';
  }, 1500);
};