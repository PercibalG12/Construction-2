
window.addEventListener('scroll', function (){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window,scrollY > 500)
})



function scrollToTop(){
    window.scrollTo (0,0);
}


