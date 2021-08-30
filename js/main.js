// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel ({
//         items:3,
//         margin:30,
//         loop:true,
//         responsive:{
//             992:{
//                 items: 3
//             },
//             768:{
//                 items: 2
//             },
//             320:{
//                 items: 1
//             }
//         }
//
//     });
// });


// Show menu
const burgerMenu = document.querySelector('.mobile-menu')
const topMenu = document.querySelector('.header-nav')

burgerMenu.addEventListener('click',() => {
    console.log(topMenu)
    topMenu.classList.toggle('show')
})
//Hide menu when click nav links

const menuLinks = document.querySelectorAll('.top-menu a')
menuLinks.forEach(item => item.addEventListener('click',() =>{
    topMenu.classList.remove('show')
} ))







