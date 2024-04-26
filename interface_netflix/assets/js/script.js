$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function redirecionarYoutube() {
    window.open("https://www.youtube.com/watch?v=GXrDYboUnnw");
}

function redirecionarInstagram() {
    window.open("https://www.instagram.com/theoriginals/");
}