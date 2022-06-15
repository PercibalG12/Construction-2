
window.addEventListener('scroll', function (){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window,scrollY > 500)
    if (window,scrollY < 500) {
         scroll.classList.remove("active") 
    }
})



function scrollToTop(){
    window.scrollTo (0,0);
}

