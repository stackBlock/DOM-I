const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};



// nav

var navMenu = Object.keys(siteContent.nav).map(item => siteContent.nav[item]);

const navItems = document.querySelectorAll('nav a');

for (i = 0; i < navMenu.length - 1; i++) {
  navItems[i].innerText = navMenu[i];
}

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// cta

let h1_ = document.querySelector('h1');
h1_.innerText = siteContent['cta']['h1'];

let button = document.querySelector('.cta .cta-text button');
button.innerText = siteContent['cta']['button'];

let headerImg = document.querySelector('#cta-img');
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);

let middleImg = document.querySelector(".middle-img");
middleImg.setAttribute("src", "img/mid-page-accent.jpg")


// main-content

let featuresH4 = document.getElementsByTagName('h4')[0];
featuresH4.innerText = siteContent['main-content'][0];

let featuresContent = document.getElementsByTagName('p')[0];
featuresContent.innerText = siteContent['main-content']['features-content'];

let about_H4 = document.getElementsByTagName('h4')[1];
about_H4.innerText = siteContent['main-content']['about-h4'];

let aboutContent_1 = document.getElementsByTagName('p')[1];
aboutContent_1.innerText = siteContent['main-content']['about-content'];

let services_H4 = document.getElementsByTagName('h4')[2];
services_H4.innerText = siteContent['main-content']['services-h4'];

let servicesContent = document.getElementsByTagName('p')[2];
servicesContent.innerText = siteContent['main-content']['services-content'];

let product_H4 = document.getElementsByTagName('h4')[3];
product_H4.innerText = siteContent['main-content']['product-h4'];

let productContent = document.getElementsByTagName('p')[3];
productContent.innerText = siteContent['main-content']['product-content'];

let vision_H4 = document.getElementsByTagName('h4')[4];
vision_H4.innerText = siteContent['main-content']['vision-h4'];

let visionContent = document.getElementsByTagName('p')[4];
visionContent.innerText = siteContent['main-content']['vision-content'];


// Contact

let contact_H4 = document.getElementsByTagName('h4')[5];
contact_H4.innerText = siteContent['contact']['contact-h4'];
let address = document.getElementsByTagName('p')[5];
address.innerText = siteContent['contact']['address'];
let phone = document.getElementsByTagName('p')[6];
phone.innerText = siteContent['contact']['phone'];
let email = document.getElementsByTagName('p')[7];
email.innerText = siteContent['contact']['email'];


//footer
let footer = document.getElementsByTagName('p')[8];
footer.innerText = siteContent['footer']['copyright'];
