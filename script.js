// const { JSDOM } = require( 'jsdom' )
// const { window } = new JSDOM( '' )
// const $ = require( 'jquery' )( window )
// import $ from 'https://code.jquery.com/jquery-3.5.1.min.js'
// const $ = require( 'jquery' )




function toggleOpen() {
  const navbarMenu = document.getElementById('navbar-menu')
  const navbarBurger = document.getElementById('navbar-burger')
  navbarMenu.classList.toggle('is-active')
  navbarBurger.classList.toggle('is-active')
}


function main() {
  console.log('wah')

  $(document).ready(function () {
    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    })
    function toggleOpen() {
      const navbarMenu = document.getElementById('navbar-menu')
      const navbarBurger = document.getElementById('navbar-burger')
      navbarMenu.classList.toggle('is-active')
      navbarBurger.classList.toggle('is-active')
    }
    const burger = document.getElementById('navbar-burger')
    const navItems = Array.from(document.getElementsByClassName('navbar-item'))
    console.log(burger)
    console.log({ navItems })
    burger.addEventListener('click', toggleOpen)
    navItems.forEach(item => item.addEventListener('click', toggleOpen))

    function toggleFlipped(event) {
      const projectClicked = event.target.parentElement.parentElement.parentElement.parentElement.parentElement
      projectClicked.classList.toggle('is-flipped')
    }

    //get the elements with the class project
    const projects = Array.from(document.getElementsByClassName('read-more-icon'))
    //add an event listener, when it is clicked on, add the class .is-flipped to that project div
    projects.forEach(project => project.addEventListener('click', toggleFlipped))
  })

}



// $('.fade').slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
// });


window.addEventListener('DOMContentLoaded', main)