"use strict";

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback){
    if (elem.length > 1) {
        elem.forEach(item => {
            item.addEventListener(type, callback);
        });
    } else {
        elem.addEventListener(type, callback);
    }
};

/**
 * navbar toggle
 */
const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');
const navbarLinks = document.querySelectorAll('[data-nav-link]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');

const toggleNavbar = function () {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('active');
}

addEventOnElem(navTogglers, 'click', toggleNavbar);

const closeNavbar = function (){
    navbar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('active');
}
addEventOnElem(navbarLinks, 'click', closeNavbar);

/**
 *  Header, goToTopBtn will be active, when window scroll down to 100px 
 */

const header = document.querySelector('[data-header]');
const goTopBtn = document.querySelector('[data-go-top]');


const showElemOnScroll = function () {
    if (window.scrollY > 100) {
        header.classList.add('active');
        goTopBtn.classList.add('active');
    } else {
        header.classList.remove('active');
        goTopBtn.classList.remove('active');
    }
}

addEventOnElem(window, 'scroll', showElemOnScroll);


/**
 * Product filter
 */

const filterBtns = document.querySelectorAll('[data-filter-btn]');
const filterBox = document.querySelector('[data-filter]');

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
    lastClickedFilterBtn.classList.remove('active');
    this.classList.add('active');
    lastClickedFilterBtn = this;

    filterBox.setAttribute('data-filter', this.dataset.filterBtn);
}

addEventOnElem(filterBtns, 'click', filter);











