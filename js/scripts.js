/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

document.getElementById('toggleButton').addEventListener('click', function () {
    var portugueseContent = document.querySelectorAll('.portuguese');
    var englishContent = document.querySelectorAll('.english');

    // Check the current state and toggle the visibility
    if (portugueseContent[0].style.display === 'none') {
        for (var i = 0; i < portugueseContent.length; i++) {
            portugueseContent[i].style.display = 'block';
            englishContent[i].style.display = 'none';
        }
        this.textContent = 'Translate to English';
    } else {
        for (var i = 0; i < portugueseContent.length; i++) {
            portugueseContent[i].style.display = 'none';
            englishContent[i].style.display = 'block';
        }
        this.textContent = 'Traduzir para Português';
    }
});

window.addEventListener('DOMContentLoaded', event => {

    

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
