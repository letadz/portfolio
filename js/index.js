const navbar = document.querySelector('.navbar-header')
const navToggle = document.querySelector('.mobile-nav-toggle')
const navigation = document.querySelector('.navigation')

navToggle.addEventListener('click', () => {
    navigation.hasAttribute('data-visible') 
        ? navToggle.setAttribute('aria-expanded', false) 
        : navToggle.setAttribute('aria-expanded', true)
        
    navigation.toggleAttribute('data-visible')
    navbar.toggleAttribute('data-overlay')

})
